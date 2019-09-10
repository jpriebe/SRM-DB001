var HBG = require('./hbgDefs.js').defs;

exports.patterns = [
  {
    name: 'm-p-1',
    length: HBG.M1,
    weight: 20,
    notes: [
      { drum: 'clap', velocity: 90, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B141, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-2',
    length: HBG.M1,
    notes: [
      { drum: 'clap', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 70, start: HBG.B141, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-3',
    length: HBG.M4,
    notes: [
      { drum: 'clap', velocity: 90, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B141, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B221, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B241, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B321, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B341, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B424, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B442, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-4',
    length: HBG.M4,
    notes: [
      { drum: 'clap', velocity: 90, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B141, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B221, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B241, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B321, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B341, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B421, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B434, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B442, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-5',
    length: HBG.M4,
    notes: [
      { drum: 'clap', velocity: 90, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B141, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B221, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B241, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B321, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B341, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B421, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B441, duration: HBG.D16 },
      { drum: 'clap', velocity: 70, start: HBG.B442, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B443, duration: HBG.D16 },
      { drum: 'clap', velocity: 70, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-6',
    weight: 3,
    length: HBG.M2,
    notes: [
      { drum: 'clap', velocity: 90, start: HBG.B121, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B141, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B221, duration: HBG.D16 },
      { drum: 'clap', velocity: 90, start: HBG.B234, duration: HBG.D16 }
    ]
  },
  {
    name: 'snare-1',
    length: HBG.M1,
    weight: 20,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B141, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-7',
    length: HBG.M4,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B141, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B221, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B241, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B321, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B341, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B424, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B442, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-8',
    length: HBG.M4,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B141, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B221, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B241, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B321, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B341, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B421, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B432, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B441, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B443, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-9',
    length: HBG.M4,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B141, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B221, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B241, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B321, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B341, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B421, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B441, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B443, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-p-10',
    length: HBG.M4,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B121, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B141, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B221, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B241, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B321, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B341, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B421, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B434, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B443, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B444, duration: HBG.D16 }
    ]
  }
]
