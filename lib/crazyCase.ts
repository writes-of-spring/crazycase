const isLower = (char: string) => RegExp("[a-z]").test(char);

export const convertCase = (value: string) => {
  let result = "";
  value.split("").map((char) => {
    if (isLower(char)) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  });
  return result;
};
