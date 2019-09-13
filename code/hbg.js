inlets = 1;
outlets = 3;
autowatch = 1;

include("lm.js");

var _init = false;

var PatternGenerator = require('./patternGenerator').patternGenerator;
var HbgKit = require('./hbgKit').hbgKit;
var _kit = new HbgKit();

var _hbg_loop_len = 2048; // 4 bars

// this array dictates the order in which the notes are loaded into the live.grid
var _drums = [
    'kick',
    'clap',
    'snare',
    'closedhat',
    'openhat',
    'shaker',
    'perc1',
    'perc2',
    'ride'
]

var _drum_groups = [
    'kick',
    'mid-primary',
    'mid-secondary',
    'tops-primary',
    'tops-secondary',
    'perc',
    'tops-power',
];

var _section = 'hardtrack2';
var _sections = {};
var _section_menu_items = {
    'mix-in': 'mixin',
    'hard track 1': 'hardtrack1',
    'breakdown 1': 'breakdown1',
    'hard track 2': 'hardtrack2',
    'breakdown 2': 'breakdown2',
    'hard track 3': 'hardtrack3',
    'mix-out': 'mixout',
}

var _locks = {}

var _gen;

function liveInit() {
    if (_init) {
        return;
    }

    post("[liveInit] initializing locks...\n")
    for (var i = 0; i < _drum_groups.length; i++) {
        _locks[_drum_groups[i]] = 0;
    }

    post("[liveInit] creating pattern generator...\n")
    _gen = new PatternGenerator(_kit);

    post("[liveInit] getting sections...\n")
    _sections = _gen.getSections();

    post("[liveInit] selecting first pattern...\n")
    _gen.selectPatterns();

    post("[liveInit] generating and sending notes...\n")
    regen();

    _init = true;
    post("[liveInit] done.\n")
}

function toggleLock (section, value) {
    _locks[section] = value;
}

function changeSection (section) {
    if (!_init) {
        return;
    }
    post("[changeSection] received: " + section + "\n");
    _section = _section_menu_items[section];
    post("[changeSection] new section: " + _section + "\n");
    var all_notes = generateAllNotes();
    sendSteps(all_notes);
}


// called when user clicks regen
function regen() {
    post("[regen] entering\n");

    for (var i = 0; i < _drum_groups.length; i++) {
        var g = _drum_groups[i];
        if (_locks[g]) {
            post("[regen] skipping drum group: " + g + "\n");
            continue;
        }
        post("[regen] drum group: " + g + "\n");

        _gen.selectPattern(g);
    }

    var all_notes = generateAllNotes();
    sendSteps(all_notes);
}

// loads the steps into the grid
function generateAllNotes() {
    var i;

    post("[generateAllNotes] entering\n");
    var patterns = _gen.getPatterns()
    post(patterns)

    var all_notes = {};
    for (i = 0; i < _drums.length; i++) {
        all_notes[_drums[i]] = [];
    }

    var active_drum_groups = _sections[_section];
    post("[generateAllNotes] current section: " + _section + "\n");

    for (var drum_group in patterns) {
        if (!patterns.hasOwnProperty(drum_group)) {
            continue;
        }

        function inArray(needle, haystack) {
            var length = haystack.length;
            for(var i = 0; i < length; i++) {
                if(haystack[i] == needle) return true;
            }
            return false;
        }

        if (!inArray(drum_group, active_drum_groups)) {
            continue;
        }

        post("[generateAllNotes] pattern " + drum_group + "\n");

        var pattern = patterns[drum_group]
        var notes = {};

        loop_len = 0;
        while (loop_len < _hbg_loop_len) {
            for (i = 0; i < pattern.notes.length; i++) {
                var note = {
                    drum: pattern.notes[i].drum,
                    velocity: pattern.notes[i].velocity,
                    start: pattern.notes[i].start + loop_len,
                    duration: pattern.notes[i].duration,
                }
                all_notes[pattern.notes[i].drum].push(note);
                post("[generateAllNotes]   " + note.drum + " " + note.start + "\n");
            }
            loop_len += pattern.length;
        }
    }

    return all_notes;
}

function sendSteps (all_notes) {
    dg1 = this.patcher.getnamed("drumGrid1")
    dg1.message("clear");

    for (i = 0; i < _drums.length; i++) {
        var drum = _drums[i];
        var notes = all_notes[drum];

        post("[sendSteps] drum " + drum + " - " + notes.length + " notes\n");

        for (j = 0; j < notes.length; j++) {
            post(JSON.stringify(notes[j]) + "\n")
            var x = Math.floor(notes[j].start / 32) + 1;
            var y = i + 1;
            //var msg = "input-list " + x + " " + y + " 1";
            var msg = "list " + x + " " + y + " 1.";
            post("[sendSteps] " + msg + "\n");
            dg1.message("list", x, y, 1)
        }
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

liveInit();