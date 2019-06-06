/**
 *
 * @param {string} sequence
 * @returns {array} Returns an array of proteins (strings)
 */
export function translate (sequence) {
  if (!sequence || sequence.length < 1) return []
  const proteins = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }
  // Split strings codons (every 3 characters)
  // Then map over and place codon with protein
  // Filter out STOP proteins
  const translation = sequence.match(/.{1,3}/g).map(codon => {
    if (!proteins.hasOwnProperty(codon)) {
      throw Error('Invalid codon')
    }
    return proteins[codon]
  })
  return translation.indexOf('STOP') > -1 ? translation.slice(0, translation.indexOf('STOP')) : translation
}
