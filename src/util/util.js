export const formatText = (text, length = null) => {
  if (text == null) {
    return "";
  }
  if (length) {
    if (text.length <= length) {
      return text;
    }
    text = text.substring(0, length);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last).concat('...');
  }
  return text.replace(/<\/?[^>]+(>|$)/g, " ");
}