inlets = 1;
outlets = 3;
autowatch = 1;

include("lm.js");

var _init = false;

var PatternGenerator = require('./patternGenerator').patternGenerator;
var HbgKit = require('./hbgKit').hbgKit;
var _kit = new HbgKit();

var _hbg_loop_len = 2048; // 4 bars
var _hbg_num_beats = 16;

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

var _muted = {};
var _offsets = {};

var _drum_pitch = {
    'kick': 36,
    'clap': 37,
    'snare': 38,
    'closedhat': 39,
    'openhat': 44,
    'shaker': 45,
    'perc1': 46,
    'perc2': 47,
    'ride': 52,
}

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
    'breakdown 1': 'breakdown',
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

    var i;
    post("[liveInit] initializing locks...\n")
    for (i = 0; i < _drum_groups.length; i++) {
        _locks[_drum_groups[i]] = 0;
    }

    for (i = 0; i < _drums.length; i++) {
        _muted[_drums[i]] = false;
        _offsets[_drums[i]] = 0;
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

// called when user clicks a lock toggle in the UI
function toggleLock (section, value) {
    _locks[section] = value;
}

// called when user clicks a mute toggle in the UI
function mute (drum, value) {
    var idx = drum - 1;
    drum = _drums[idx];
    if (value) {
        _muted[drum] = false;
    }
    else {
        _muted[drum] = true;
    }
}


// called when user clicks a shift button in the UI
function shift (drum, value) {
    var idx = drum - 1;
    drum = _drums[idx];

    _offsets[drum] += value;
    //post ("[shift] offsets: " + JSON.stringify(_offsets));
    var all_notes = generateAllNotes();
    sendSteps(all_notes);
}


function changeSection (section) {
    if (!_init) {
        return;
    }
    _section = _section_menu_items[section];
    var all_notes = generateAllNotes();
    sendSteps(all_notes);
}


// called when user clicks regen
function regen() {
    post("[regen] entering\n");

    for (i = 0; i < _drums.length; i++) {
        _offsets[_drums[i]] = 0;
    }

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

function generateClips () {
    for (i = 0; i < _sections.length; i++) {
        var section = _sections[i]
    }
    for (var section in _sections) {
        if (!_sections.hasOwnProperty(section)) {
            continue;
        }
        post ("[generateClips]  - " + _section + "\n");
        _section = section
        var notes_by_drum_group = generateAllNotes();
        
        var all_notes = [];
        for (var drum_group in notes_by_drum_group) {
            var notes = notes_by_drum_group[drum_group];
            for (var j = 0; j < notes.length; j++) {
                if (_muted[notes[j].drum]) {
                    continue;
                }
                all_notes.push (notes[j]);
            }
        }

        generateClip (section, all_notes)
    }
}

function generateClip (label, notes) {
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

    post("[generateClip] creating clip in slot " + clipSlotNum + "\n")
    post("[generateClip] setting notes in clip; num notes: " + notes.length + "\n")

    clipSlot.call("create_clip", _hbg_num_beats);
    var clip = new LiveAPI("this_device canonical_parent clip_slots " + clipSlotNum + " clip");

    clip.set("name", label);

    clip.call("set_notes");
    post("clip.call(notes, " + notes.length + ")")
    clip.call("notes", notes.length);

    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        //post ("[generateClip]   - " + JSON.stringify(note) + "\n")
        var start = (note.start / 128).toFixed(4);
        var duration = (note.duration / 128).toFixed(4);
        var velocity = Math.floor(note.velocity / 100 * 128);
        var pitch = _drum_pitch[note.drum]

        clip.call("note", pitch, start, duration, velocity);
    }

    clip.call("done");
}

// gather all notes from patterns
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
                var d = pattern.notes[i].drum;
                var start = pattern.notes[i].start + loop_len;
                var offset = _offsets[d] * 32;
                var new_start = (start + offset) % _hbg_loop_len;
                if (new_start < 0) {
                    new_start += _hbg_loop_len;
                }
                var note = {
                    drum: d,
                    velocity: pattern.notes[i].velocity,
                    start: new_start,
                    duration: pattern.notes[i].duration,
                }
                all_notes[pattern.notes[i].drum].push(note);
                //post("[generateAllNotes]   " + note.drum + " " + note.start + "\n");
            }
            loop_len += pattern.length;
        }
    }

    return all_notes;
}

function sendSteps (all_notes) {
    var i;
    var dg1 = this.patcher.getnamed("drumGrid1")
    dg1.message("clear");

    var velocity_tables = []
    for (i = 0; i < _drums.length; i++) {
        var i1 = i + 1;
        var t = this.patcher.getnamed("tblVelocity" + i1);
        velocity_tables.push(t);
        t.message("clear");
    }

    var dg1 = this.patcher.getnamed("drumGrid1")
    dg1.message("clear");

    for (i = 0; i < _drums.length; i++) {
        var drum = _drums[i];
        var notes = all_notes[drum];
        var y = i + 1;

        post("[sendSteps] drum " + drum + " - " + notes.length + " notes\n");

        if (notes.length < 1) {
            continue;
        }

        // we want to populate a table full of note velocities; but rather than having
        // zeroes in between the non-zeroes, we'll fill in the gaps with the last non-zero
        // velocity seen; need to account for wraparound, too.
        var last_nzvelocity = Math.floor(notes[notes.length - 1].velocity / 100 * 128);
        var last_nzvelocity_x = Math.floor(notes[notes.length - 1].start / 32) + 1;
        var msg;

        for (j = 0; j < notes.length; j++) {
            var x = Math.floor(notes[j].start / 32) + 1;

            post("[sendSteps] x: " + x + "\n");
            post("[sendSteps] last_nzvelocity: " + last_nzvelocity + "\n");
            post("[sendSteps] last_nzvelocity_x: " + last_nzvelocity_x + "\n");
            var z_beats = x - last_nzvelocity_x - 1;
            if (z_beats < 0)  {
                z_beats += Math.floor(_hbg_loop_len / 32);
            }
            post("[sendSteps] z_beats: " + z_beats + "\n");

            for (var k = 0; k < z_beats; k++) {
                var x1 = (last_nzvelocity_x + k) % Math.floor(_hbg_loop_len / 32) + 1;
                msg = " * list " + x1 + " " + y + " (" + last_nzvelocity + ")";
                post("[sendSteps] " + msg + "\n");
                velocity_tables[i].message("list", x1, last_nzvelocity);
            }

            //var v = Math.floor(Math.random() * 128)
            var v = Math.floor(notes[j].velocity / 100 * 128);
            msg = "list " + x + " " + y + " (" + v + ")";
            post("[sendSteps] " + msg + "\n");
            dg1.message("list", x, y, 1);
            velocity_tables[i].message("list", x, v);

            last_velocity = v;
            last_velocity_x = x;

            for (k = last_velocity_x + 1; k < x; k++) {
                velocity_tables[i].message("list", k, lats_velocity);
            }

            last_nzvelocity = v;
            last_nzvelocity_x = x;
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

//liveInit();