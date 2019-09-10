var HBG = require('./hbgDefs.js').defs;
var MidiWriter = require('midi-writer-js')
var sprintf = require('sprintf-js').sprintf

const _patterns = {
  'kick': require('./patterns-kick').patterns,
  'mid-primary': require('./patterns-mid-primary').patterns,
  'mid-secondary': require('./patterns-mid-secondary').patterns,
  'tops-primary': require('./patterns-tops-primary').patterns,
  'tops-secondary': require('./patterns-tops-secondary').patterns,
  'tops-power': require('./patterns-tops-power').patterns,
  'perc': require('./patterns-perc').patterns
}

const _sections = {
  'mixin': [
    'kick',
    'tops-primary'
  ],
  'hardtrack1': [
    'kick',
    'mid-primary',
    'tops-primary',
    'tops-secondary',
    'perc'
  ],
  'breakdown': [
    'kick'
  ],
  'hardtrack2': [
    'kick',
    'mid-primary',
    'mid-secondary',
    'tops-primary',
    'tops-secondary',
    'perc'
  ],
  'breakdown2': [
    'mid-primary',
    'tops-primary'
  ],
  'hardtrack3': [
    'kick',
    'mid-primary',
    'mid-secondary',
    'tops-primary',
    'tops-secondary',
    'perc',
    'tops-power'
  ],
  'mixout': [
    'kick',
    'mid-primary',
    'tops-primary'
  ]
}

// TODO:
//  - add support for bar-4 / bar-8 fills?  like you could take a 1-bar fill and replace all the notes in the
//    mid-primary's last bar with the notes from the fill; or do you just put more patterns in, some with
//    fills and some without?
//  - perc pairs -- sometimes it's fun to try random combinations of percussion, but sometimes it would be nice to have
//    two tuned toms or two congas, etc.
//  - more percussion options: perc1, perc2, percsharp, percdeep, percsyn (then perc patterns could call for different ones)
//  - support for pattern groups, where they are variants of a single pattern, but some harder than others; you could use
//    the lighter one in hardtrack1, harder one in hardtrack3
//  - maybe add markers or cue points with these labels?
function patternGenerator (kit) {
  var _drums = {}
  var _selectedPatterns = []
  var _selectedPatternNames = []
  var _track = null
  var _swingInterval = 32
  var _swingPercentage = 50

  _drums = kit.getDrums()

  this.getSections = function () {
    return JSON.parse(JSON.stringify(_sections))
  }

  this.getPatternIdentifiers = function () {
    var xary = []
    for (var identifier in _patterns) {
      if (!_patterns.hasOwnProperty(identifier)) {
        continue
      }

      xary.push(identifier)
    }

    return xary
  }

  this.getPatternList = function () {
    var xary = []
    for (var p in _selectedPatternNames) {
      xary.push(sprintf('%-14s %-4s', p, _selectedPatternNames[p]))
    }

    return xary.join('\n')
  }

  this.selectPatterns = function () {
    _selectedPatterns = []

    for (var identifier in _patterns) {
      if (!_patterns.hasOwnProperty(identifier)) {
        continue
      }

      this.selectPattern(identifier)
    }
  }

  this.getPatterns = function () {
    var xary = [];
    for (var identifier in _patterns) {
      if (!_patterns.hasOwnProperty(identifier)) {
        continue
      }

      xary[identifier] = _selectedPatterns[identifier]
    }

    return xary
  }

  this.selectPattern = function (identifier) {
    var availPatterns = _patterns[identifier]

    if (!availPatterns) {
      post('No available patterns for drum "' + identifier + '"\n')
      return
    }

    var i = 0
    var xary = []
    for (i = 0; i < availPatterns.length; i++) {
      var p = availPatterns[i]
      if (typeof p.weight === 'undefined') {
        p.weight = 10
      }

      for (var j = 0; j < p.weight; j++) {
        xary.push(p)
      }
    }

    var selPattern = xary[Math.floor(Math.random() * xary.length)]

    var notes = JSON.parse(JSON.stringify(selPattern.notes))

    _selectedPatternNames[identifier] = selPattern.name

    // some pattern types we can shift by fixed amounts to provide extra variation
    if (identifier.match(/perc|tops-secondary/)) {
      if (typeof selPattern.shiftProbability === 'undefined') {
        selPattern.shiftProbability = 0.2
      }

      var newNotes = shift(notes, selPattern.shiftProbability, selPattern.length)
      if (JSON.stringify(notes) !== JSON.stringify(newNotes)) {
        _selectedPatternNames[identifier] += ' (shifted)'
      }
      selPattern.notes = newNotes
    }

    _selectedPatterns[identifier] = selPattern
  }

  this.setSwing = function (swingInterval, swingPercentage) {
    _swingInterval = swingInterval
    _swingPercentage = swingPercentage
  }

  this.generate = function (sections, sectionBars) {
    _track = new MidiWriter.Track()
    var section = null

    if (sections === null) {
      sections = []
      for (section in _sections) {
        sections.push(section)
      }
    }

    var i = 0; var j = 0
    var sectionOffset = 0
    for (i = 0; i < sections.length; i++) {
      section = sections[i]
      var patterns = _sections[section]
      for (j = 0; j < patterns.length; j++) {
        if (typeof _selectedPatterns[patterns[j]] === 'undefined') {
          continue
        }
        addNotes(_selectedPatterns[patterns[j]], sectionOffset, sectionBars)
      }

      sectionOffset += sectionBars * HBG.M1
    }

    return _track
  }

  function addNotes (pattern, sectionOffset, sectionBars) {
    var notes = pattern.notes

    var sectionLen = sectionBars * HBG.M1

    var offset = 0
    while (offset < sectionLen) {
      for (var i = 0; i < notes.length; i++) {
        var note = JSON.parse(JSON.stringify(notes[i]))
        note.start += offset
        if (note.start > sectionLen) {
          continue
        }

        if (typeof _drums[note.drum] === 'undefined') {
          continue
        }

        note.start += sectionOffset
        note = addSwing(note)
        var o = convertNoteToMidi(note, _drums[note.drum])
	//console.log (note)
        _track.addEvent(o)
      }
      offset += pattern.length
    }
  }

  function shift (notes, shiftProb, patternLen) {
    var shiftOffsets = []
    if (patternLen === HBG.M1) {
      shiftOffsets = [HBG.B121, HBG.B131, HBG.B141]
    }
    if (patternLen === HBG.M2) {
      shiftOffsets = [HBG.B131, HBG.B211, HBG.B231]
    }
    if (patternLen === HBG.M3) {
      shiftOffsets = [HBG.B211, HBG.B311]
    }
    if (patternLen === HBG.M4) {
      shiftOffsets = [HBG.B211, HBG.B311, HBG.B411]
    }

    if (Math.random() > shiftProb) {
      return notes
    }

    var shiftOffset = shiftOffsets[Math.floor(Math.random() * shiftOffsets.length)]

    var xary = []
    for (var i = 0; i < notes.length; i++) {
      var note = JSON.parse(JSON.stringify(notes[i]))
      note.start = (note.start + shiftOffset) % patternLen
      xary.push(note)
    }

    return xary
  }

  function addSwing (note) {
    if (_swingPercentage === 50) {
      return note
    }

    if (((note.start / _swingInterval) % 2) === 1) {
      var delta = Math.round((_swingPercentage - 50) / 100 * 2 * _swingInterval)
      note.start += delta
      note.duration -= delta
    }

    return note
  }

  function convertNoteToMidi (note, drum) {
    return new MidiWriter.NoteEvent({
      pitch: [drum.pitch],
      startTick: note.start,
      duration: 'T' + note.duration,
      velocity: note.velocity
    })
  }
}

exports.patternGenerator = patternGenerator
