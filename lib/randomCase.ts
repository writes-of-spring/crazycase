export function randomCase(str: string) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += randomCaseCharacter(str[i]);
  }
  return newString;
}

function randomCaseCharacter(char: string) {
  if (Math.random() > 0.5) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}
