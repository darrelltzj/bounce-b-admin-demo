// capitalizes a string
function capitalizeString (string) {
  if (!string.length) return
  return string.toLowerCase().split(' ').map(str => { return str[0].toUpperCase().concat(str.slice(1)) }).join(' ')
}

export {
  capitalizeString
}
