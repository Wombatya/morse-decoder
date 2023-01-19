const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// function decode(expr) {
//     // write your solution here
// }
// function morseDecoder (string) {
//     const morse = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//     1: ".----",
//     2: "..---",
//     3: "...--",
//     4: "....-",
//     5: ".....",
//     6: "-....",
//     7: "--...",
//     8: "---..",
//     9: "----.",
//     0: "-----"
//   };
function decode(string) {
  let arr = []
   for (let i = 0; i<string.length; i+=9) {
     arr.push(string.substring(i, i+10));
     i++;
   }
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
      let newEl = "";
      if (arr[i] === "**********") {
        newEl = newEl+arr[i].replaceAll('**', '');
        arr2.push(newEl);
      }
      else {
      newEl = newEl + arr[i].replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-');
      arr2.push(newEl);
      }
    }
  let result = "";
    for (let i of arr2) {
      if (i === "") {
        result = result + " ";
      }
      else {
      for (let o in MORSE_TABLE) {
     if (i === o) {
       result = result + MORSE_TABLE[o];
     }
      }
      }
    }
    return result;
  }
  
module.exports = {
    decode
}