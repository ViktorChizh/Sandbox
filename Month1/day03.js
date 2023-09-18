//freecodecamp
// не было смысла копировать

//codewars

function isIsogram(str) {
  str = str.toLowerCase()
  let k = 0
  while (str.length > 1) {
    let l = str[0]
    str = str.slice(1)
    str.includes(l) ? (k = 1) : ''
    if (k === 1) { break }
  }
  return k === 1 ? false : true
  //	return new Set(str.toUpperCase()).size == str.length;
  //  return !/(\w).*\1/i.test(str)
  //return !str.match(/([a-z]).*\1/i);
}