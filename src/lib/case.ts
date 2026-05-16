/** Invert the case of every alphabetic ASCII character. */
export function invertCase(input: string): string {
  const chars: string[] = [];
  for (const char of input) {
    if (char >= "a" && char <= "z") {
      chars.push(char.toUpperCase());
    } else if (char >= "A" && char <= "Z") {
      chars.push(char.toLowerCase());
    } else {
      chars.push(char);
    }
  }
  return chars.join("");
}

/** Randomize the case of every alphabetic ASCII character. */
export function scrambleCase(input: string): string {
  const chars: string[] = [];
  for (const char of input) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      chars.push(Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase());
    } else {
      chars.push(char);
    }
  }
  return chars.join("");
}
