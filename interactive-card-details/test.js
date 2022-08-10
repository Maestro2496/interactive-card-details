const number = "EddyAgossou";

function parser(text) {
  text = text.slice(0, 4) + " " + text.slice(4);

  text = text.slice(0, 9) + " " + text.slice(9);

  text = text.slice(0, 14) + " " + text.slice(13);

  text = text.slice(0, 19) + " " + text.slice(19);
  return text;
}
console.log(parser("123453344444343"));
