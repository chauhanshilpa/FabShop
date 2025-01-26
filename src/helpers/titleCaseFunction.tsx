export function titleCase(string: string) {
  var wordsList = string.split(" ");
  for (let i = 0; i < wordsList.length; i++) {
    let word = wordsList[i];
    if (word.charAt(0).toUpperCase() === word.charAt(0)) {
      wordsList[i] = word;
    } else {
      wordsList[i] =
        word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }
  }
  return wordsList.join(" ");
}
