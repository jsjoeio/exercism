const COMPLEMENTS = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export function toRna (sequence) {
  if (sequence.length === 0) return ''
  // object with key values
  return sequence.split('').map(nucleotide => COMPLEMENTS[nucleotide]).join('')
}