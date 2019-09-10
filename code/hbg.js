inlets = 1;
outlets = 3;
autowatch = 1;

include("lm.js");

var PatternGenerator = require('./patternGenerator').patternGenerator;
var HbgKit = require('./hbgKit').hbgKit;
var kit = new HbgKit();

var _init = false;

function liveInit() {
    post("[liveInit] entering...\n")
    _init = true;
    post("[liveInit] done.\n")
}

var _gen = new PatternGenerator(kit);
_gen.selectPatterns();
sendSteps();

// called when user clicks regen
function regen() {
    post("[regen]\n");
    _gen.selectPatterns();
    sendSteps();
}

// loads the steps into the grid
function sendSteps() {
    post("[sendSteps]\n");
    var patterns = _gen.getPatterns()
    post (patterns)

    dg1 = this.patcher.getnamed("drumGrid1")

    for (var identifier in patterns) {
      if (!patterns.hasOwnProperty(identifier)) {
        continue
      }
      post("[sendSteps] " + identifier + "\n");

      var pattern = patterns[identifier]
      var notes = {};
      post("[sendSteps] " + pattern + "\n");
      // reset the first 64 16th notes to 0
      dg1.message("clear");
      for (i = 0; i < pattern.notes.length; i++) {
          post(JSON.stringify(pattern.notes[i]) + "\n")
          var x = Math.floor(pattern.notes[i].start / 32) + 1;
          var y = 1;
          //var msg = "input-list " + x + " " + y + " 1";
          var msg = "list " + x + " " + y + " 1.";
          post("[sendSteps] " + msg + "\n");
          dg1.message("list", x, y, 1)
      }

      break;
    }

    /*
    outlet(0, "nstep", _steps.length)
    outlet(0, "loop", 0, _steps.length)
    for (var i = 0; i < _steps.length; i++) {
        var step = _steps[i];
        outlet(0, "step", i + 1, step.note, step.velocity, 120, step.probability)
    }
    */
}

function clipOut() {
    var track = new LiveAPI("this_device canonical_parent");
    var clipSlots = track.getcount("clip_slots");
    var clipSlot;

    var firstClip = null;

    for (var clipSlotNum = 0; clipSlotNum < clipSlots; clipSlotNum++) {
        clipSlot = new LiveAPI("this_device canonical_parent clip_slots " + clipSlotNum);
        var hasClip = clipSlot.get("has_clip").toString() !== "0";
        if (!hasClip) break;
    }

    if (clipSlotNum === clipSlots) {
        // have to create new clip slot (scene)
        var set = new LiveAPI("live_set");
        set.call("create_scene", -1);
        clipSlot = new LiveAPI("this_device canonical_parent clip_slots " + clipSlotNum);
    }

    post("Creating clip in slot " + clipSlotNum + "\n")

    post("Setting notes in clip; num notes: " + _live_steps_len + "\n")

    var beats = Math.ceil(_live_steps_len / 4);
    post("num beats: " + beats + "\n")

    clipSlot.call("create_clip", beats);
    var clip = new LiveAPI("this_device canonical_parent clip_slots " + clipSlotNum + " clip");
    //var notes = generateMidi();

    post("Setting notes in clip...\n")

    setClipNotes(clip);
}

// called once for each note output by the live.step when it receives the "dump" message;
// dump starts when user clicks the "clip" button
function dumpStep(s, i, pitch, velocity, duration) {
    post("received dump step: " + s + ", " + i + ", " + pitch + ", " + velocity + "\n");
    if (s !== 'step') {
        post("ignoring dump of type " + s + "\n")
    }
    if (i === 1) {
        _live_steps = [];
    }

    _live_steps[i - 1] = {
        pitch: pitch,
        velocity: velocity,
        duration: duration,
    }
    _live_steps_len = i;

    if (i === _steps.length) {
        clipOut();
    }
}

function setClipNotes(clip) {
    clip.call("set_notes");

    nonZeroCount = 0;
    for (var i = 0; i < _live_steps_len; i++) {
        var step = _live_steps[i];
        if (step.velocity > 0) {
            nonZeroCount++;
        }
    }

    post("clip.call(notes, " + nonZeroCount + ")")
    clip.call("notes", nonZeroCount);

    for (var i = 0; i < _live_steps_len; i++) {
        var step = _live_steps[i];
        if (step.velocity === 0) {
            continue;
        }
        post(JSON.stringify(step) + "\n")
        var start = (i / 4).toFixed(4);
        var duration = (step.duration / 480).toFixed(4);
        clip.call("note", step.pitch, start, duration, step.velocity);
    }

    clip.call("done");
}


function replaceAllNotes(clip, notes) {
    clip.call("select_all_notes");
    clip.call("replace_selected_notes");
    clip.call("notes", notes.length);

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        callNote(clip, note);
    }

    clip.call("done");
}


function callNote(clip, note) {
    clip.call("note", note.Pitch, note.Start.toFixed(4), note.Duration.toFixed(4), note.Velocity, note.Muted);
}

function callPatternStepDump() {
    var patternStep = this.patcher.getnamed("patternStep");
    patternStep.message("dump");
}