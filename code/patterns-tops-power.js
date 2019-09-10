var HBG = require('./hbgDefs.js').defs;

exports.patterns = [
  {
    name: 't-pow-0',
    weight: 3,
    length: HBG.M1,
    notes: [
    ]
  },
  {
    name: 't-pow-1',
    length: HBG.M1,
    notes: [
      { drum: 'ride', velocity: 90, start: HBG.B113, duration: HBG.D16 },
      { drum: 'ride', velocity: 90, start: HBG.B123, duration: HBG.D16 },
      { drum: 'ride', velocity: 90, start: HBG.B133, duration: HBG.D16 },
      { drum: 'ride', velocity: 90, start: HBG.B143, duration: HBG.D16 }
    ]
  }
]
