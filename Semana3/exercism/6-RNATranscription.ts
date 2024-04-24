export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }
export function toRna(DNA: string): string {
  return [...DNA].reduce((output, letter) => {
    if (!(Object.keys(nuc_map).includes(letter))) throw Error('Invalid input DNA.')
    output += nuc_map[letter]; return output
  }, '')
}