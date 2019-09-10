var HBG = require('./hbgDefs.js').defs;

exports.patterns = [
  {
    name: 'm-s-0',
    length: HBG.M1,
    weight: 20,
    notes: [
    ]
  },
  {
    name: 'm-s-1',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'clap', velocity: 60, start: HBG.B242, duration: HBG.D16 },
      { drum: 'clap', velocity: 60, start: HBG.B442, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-2',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'clap', velocity: 60, start: HBG.B244, duration: HBG.D16 },
      { drum: 'clap', velocity: 60, start: HBG.B444, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-3',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 60, start: HBG.B214, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-4',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 60, start: HBG.B214, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B234, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B242, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-5',
    length: HBG.M2,
    notes: [
      { drum: 'snare', velocity: 60, start: HBG.B243, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B244, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-6',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 60, start: HBG.B112, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B144, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B244, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-7',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 60, start: HBG.B123, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B131, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B142, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B224, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B232, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B242, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-8',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B123, duration: HBG.D16 },
      { drum: 'snare', velocity: 50, start: HBG.B124, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B131, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B142, duration: HBG.D16 },
      { drum: 'snare', velocity: 50, start: HBG.B224, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B231, duration: HBG.D16 },
      { drum: 'snare', velocity: 50, start: HBG.B232, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B242, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-9',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 70, start: HBG.B124, duration: HBG.D16 },
      { drum: 'snare', velocity: 50, start: HBG.B132, duration: HBG.D16 },
      { drum: 'snare', velocity: 70, start: HBG.B224, duration: HBG.D16 },
      { drum: 'snare', velocity: 60, start: HBG.B232, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-10',
    length: HBG.M1,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 65, start: HBG.B114, duration: HBG.D16 },
      { drum: 'snare', velocity: 65, start: HBG.B132, duration: HBG.D16 },
      { drum: 'snare', velocity: 65, start: HBG.B134, duration: HBG.D16 }
    ]
  },
  {
    name: 'm-s-10a',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'snare', velocity: 65, start: HBG.B114, duration: HBG.D16 },
      { drum: 'snare', velocity: 65, start: HBG.B132, duration: HBG.D16 },
      { drum: 'snare', velocity: 65, start: HBG.B134, duration: HBG.D16 },
      { drum: 'snare', velocity: 65, start: HBG.B214, duration: HBG.D16 }
    ]
  }
]
