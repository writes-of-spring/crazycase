export const convertCase = (value, setValue) => {
  let result = ''
  const regex = RegExp('[a-z]')
  value.split('').map(char => {
    if (regex.test(char)) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  })
  setValue(result)
}
