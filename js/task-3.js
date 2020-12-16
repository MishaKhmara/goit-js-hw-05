function findLongestWord(string) {
  const splStrArray = string.split(' ');
  const lengthofStringArray = splStrArray.map(item => item.length);
  const maxLengthinArr = Math.max(...lengthofStringArray);
  const result = splStrArray.find(item => item.length === maxLengthinArr);
  return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
