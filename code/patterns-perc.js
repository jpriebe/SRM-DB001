var HBG = require('./hbgDefs.js').defs

exports.patterns = [
  {
    name: 'p-0',
    weight: 2,
    length: HBG.M1,
    notes: [
    ]
  },
  {
    name: 'p-1',
    weight: 3,
    length: HBG.M1,
    notes: [
      { drum: 'perc1', velocity: 25, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B132, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-1a',
    weight: 6,
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 25, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B132, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-1b',
    weight: 6,
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 25, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B132, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-2',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 25, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B224, duration: HBG.D16 },
      { drum: 'perc1', velocity: 25, start: HBG.B232, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-3',
    length: HBG.M1,
    notes: [
      { drum: 'perc1', velocity: 35, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B133, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-3a',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 35, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B213, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-3b',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 35, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B312, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B313, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B332, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B333, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-4',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 35, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B233, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-4a',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 35, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 35, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc2', velocity: 25, start: HBG.B233, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-5',
    length: HBG.M2,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B121, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-5a',
    length: HBG.M4,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B121, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-6',
    length: HBG.M2,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-6a',
    length: HBG.M4,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-7',
    length: HBG.M2,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B144, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B142, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-7a',
    length: HBG.M4,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B144, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B142, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-8',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B211, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B214, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-8a',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B211, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B214, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-9',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B121, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B141, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B143, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B224, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-10',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B121, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B224, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B321, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B324, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B332, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B412, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B421, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B424, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-11',
    length: HBG.M8,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B211, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B214, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B311, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B314, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B323, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B333, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B341, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B342, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B344, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B511, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B514, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B523, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B611, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B614, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B711, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B714, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B723, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B734, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B741, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B742, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B744, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B811, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-12',
    length: HBG.M2,
    notes: [
      { drum: 'perc2', velocity: 45, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B131, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B143, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B222, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B231, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-13',
    length: HBG.M2,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B133, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B233, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-14',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B314, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B413, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B414, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B423, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-14a',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B314, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B323, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B413, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B414, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B423, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-15',
    length: HBG.M4,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B122, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B314, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B323, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B413, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B414, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B423, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-16',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B131, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B333, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-17',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 45, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 45, start: HBG.B131, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B333, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-18',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B131, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B133, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-19',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B123, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B124, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B131, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B133, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-20',
    length: HBG.M1,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B134, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-21',
    length: HBG.M2,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B134, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B214, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-22',
    length: HBG.M1,
    weight: 2,
    notes: [
      { drum: 'perc1', velocity: 65, start: HBG.B113, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B132, duration: HBG.D16 },
      { drum: 'perc1', velocity: 65, start: HBG.B141, duration: HBG.D16 }
    ]
  },
  {
    name: 'p-23',
    length: HBG.M4,
    weight: 2,
    notes: [
      { drum: 'perc2', velocity: 65, start: HBG.B111, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B112, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B114, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B212, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B213, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B221, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B312, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B313, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B321, duration: HBG.D16 },
      { drum: 'perc2', velocity: 45, start: HBG.B412, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B414, duration: HBG.D16 },
      { drum: 'perc2', velocity: 65, start: HBG.B422, duration: HBG.D16 }
    ]
  }
]
