module.exports = function check(str, bracketsConfig) {
  const openBrackets = []
  const closeBrackets = []
  const line = []

  for (elem of bracketsConfig) {
      openBrackets.push(elem[0])
      closeBrackets.push(elem[1])
  }

  for (let bracket of str) {
      if (closeBrackets.includes(bracket) && line.length > 0 && closeBrackets.indexOf(bracket) === openBrackets.indexOf(line[line.length -1])) {
          line.pop()
      } else if (openBrackets.includes(bracket)) {
          line.push(bracket)
      } else {
          return false
      }
  }
  return line.length === 0
}
