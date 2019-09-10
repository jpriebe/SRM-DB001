var hbgKit = function () {
  var _drumMap = null

  // default to general midi; might later add volume to each drum to keep levels balanced
  var _drums = {
    'kick': { pitch: 'C1' },
    'clap': { pitch: 'C#1' },
    'snare': { pitch: 'D1' },
    'closedhat': { pitch: 'D#1' },
    'openhat': { pitch: 'G#1' },
    'shaker': { pitch: 'A1' },
    'perc1': { pitch: 'A#1' },
    'perc2': { pitch: 'B1' },
    'ride': { pitch: 'E2' },
  }

  this.setDrumMap = function (drumMap) {
    _drumMap = drumMap
  }

  this.selectRandomDrums = function () {
    if (_drumMap === null) {
      return
    }

    for (var identifier in _drums) {
      if (!_drums.hasOwnProperty(identifier)) {
        continue
      }

      this.selectRandomDrum(identifier)
    }
  }

  this.selectRandomDrum = function (identifier) {
    if ((_drumMap === null) || (typeof _drumMap[identifier] === 'undefined')) {
      return
    }

    var pitch = _drumMap[identifier][Math.floor(Math.random() * _drumMap[identifier].length)]
    _drums[identifier].pitch = pitch
  }

  this.getDrums = function () {
    return _drums
  }
}

exports.hbgKit = hbgKit