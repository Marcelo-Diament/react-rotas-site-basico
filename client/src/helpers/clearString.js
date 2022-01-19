const clearString = (string, spaceToHyphen = false, keepHyphen = true) => {
  let cleanString = string
    .replace(/á|ä|â|à|ã/gi, "a")
    .replace(/é|ë|ê|è/gi, "e")
    .replace(/í|ï|î|ì/gi, "i")
    .replace(/ó|ö|ô|ò|õ/gi, "o")
    .replace(/ú|ü|û|ù/gi, "u")
    .replace(/ç/gi, "c")
    .toLowerCase();
  cleanString = !keepHyphen ? cleanString.replace(/-/gi, "") : cleanString;
  cleanString = spaceToHyphen
    ? cleanString.replace(/\s/gi, "-")
    : cleanString.replace(/\s/gi, "");
  return cleanString;
};

export default clearString;
