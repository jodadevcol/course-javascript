const bulletin = [
  {
    materia: 'Calculo',
    semester1: 3.10,
    porcentage1: 0.25,
    semester2: 4.20,
    porcentage2: 0.25,
    semester3: 4.40,
    porcentage3: 0.50,
  },
    {
    materia: 'Fisica',
    semester1: 4.10,
    porcentage1: 0.25,
    semester2: 3.90,
    porcentage2: 0.25,
    semester3: 4.10,
    porcentage3: 0.50,
  }
]

console.log(bulletin)

const notes = bulletin.map(objectNotes => objectNotes.semester1 * objectNotes.porcentage1)

console.log(notes)