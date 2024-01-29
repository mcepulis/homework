
    function correctPolishLetters (string) {

        const replacements = {
                    'ą': 'a',
                    'ć': 'c',
                    'ę': 'e',
                    'ł': 'l',
                    'ń': 'n',
                    'ó': 'o',
                    'ś':'s',
                    'ź': 'z',
                    'ż': 'z'
          }
          return string.replace(/[ąćęłńóśźż]/g, (match) => replacements[match] || match);
          }
          

          //DAR PASIGILINTI:
// const string = "acełńó";
// const polish = "ąćęłńóśźż";
// const normal = "acelnoszz";

// let newString = "";
// for (let i = 0; i < string.length; i++) {
//     newString += string[i]   
   
//     for (let j = 0; j < polish.length; j++) {
//         if (string[i] === polish[j]) {
//             newString += string[i].replace(polish[j], normal[j]);    
//          }

   
         
//     }

// }

// console.log(newString);
