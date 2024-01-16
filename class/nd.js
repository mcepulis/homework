// https://docs.google.com/document/d/1uMdvm9bWLTL97cQzetY8obexgFnXdkG3ZLS6qogsi6U/edit
console.log("-------------------------1 UZD---------------")
//_1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus 
//   (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const firstName = "Lily";
const lastName = "Sullivan";

if (firstName.length < lastName.length){
    console.log(firstName);
} else {
    console.log(lastName);
}

console.log("--------------------------2 UZD--------------")
/*_2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus 
 (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas 
 vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
 "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)". */

 const myFirstName = "Marius";
 const myLastName = "Cepulis";
 const myBirthYear = 1980;
 const currentYear = 2023;

 const myAge = currentYear - myBirthYear;

 console.log("Aš esu " + myFirstName + " " + myLastName + ". Man yra " + myAge + " metai(ų)");

 console.log("---------------------------3 UZD-------------")
 /*_3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
 Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo 
 ir pavardės kintamųjų raidžių. Jį atspausdinti. */

 const actorFirstName = "Lily";
 const actorLastName = "Sullivan";

 let firstNameResult = "";
 let lastNameResult = "";

 for (i = actorFirstName.length - 3; i < actorFirstName.length; i++) {
    firstNameResult += actorFirstName[i];
 }

 for (i = actorLastName.length - 3; i < actorLastName.length; i++) {
    lastNameResult += actorLastName[i];
 }

 console.log(firstNameResult + " " + lastNameResult);

 console.log("--------------------------4 UZD--------------")
 /*_4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” 
 (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti. */

 const text = "Once upon a time in hollywood";

 let convertedText = text
  .replaceAll("o", "*")
  .replaceAll("O", "*");

 console.log(convertedText);

 console.log("--------------------------5 UZD--------------")
/* Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. */


// const rand = Math.floor(Math.random() * 3);

// let one = Math.floor(Math.random() * 3);
// let two = Math.floor(Math.random() * 3);
// let three = Math.floor(Math.random() * 3);
// let zero = Math.floor(Math.random() * 3);


// console.log(one,two,three,zero);

// let zeros = 0;
// let ones = 0;
// let twos = 0;

// if (one===1) {
//     ones++
// }
// else if (one === 0) {
//     zeros++
// }

// else if (two === 0) {
//     zeros++
// }
// console.log(zeros,ones);


let number = [];
function randomNumbers(times) {

   
    for (i = 1; i <= times; i++) {
        const rand = Math.floor(Math.random() * 3);
        number.push(rand);
    }
return number;
}
randomNumbers(3)




console.log(number)

let zero = 0;
let one = 0;
let two = 0;
for (let i = 0; i < number.length; i++) {


    if (number[i]===0) {
        zero++
    }
    else if (number[i]===1) {
      one++
    }
    else {
     two++
    }
    
}
console.log(zero, one,two);

/*Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite 
atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.*/

console.log("--------------------------6 UZD--------------")



function randNumbers() {
    let one = Math.floor(Math.random() * 5);
    console.log(one);
    let two = Math.floor(Math.random() * 5);
    console.log(two);
        if (one > two) {

            return (one / two).toFixed(2);
        } else if (one < two) {

            return (two / one).toFixed(2);
        } else {
            return "Reiksmes lygios";
        }
}

console.log(randNumbers());

/*  Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes
 nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
 */

console.log("--------------------------7 UZD--------------")

function midValue (a, b, c) {
const mid = (a + b + c) / arguments.length;

    return mid.toFixed(1);
}

console.log(midValue(10,14,19));

/*  Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti.
  */

console.log("--------------------------8 UZD--------------")

const name1 = "Will";
const surName1 = "Smith";
const initials = `${name1[0].toUpperCase()}. ${surName1[0].toUpperCase()}.`;
typeof initials;
console.log(initials);
// console.log(typeof initials);

/*  Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. 
Stringo ilgis 3 simboliai.
  */

console.log("---------------------9 UZD--------------");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randLetters = "";

for(i = 0; i < 3; i++) {
    randLetters += String.fromCharCode(rand(97, 123))
}

console.log(randLetters);
// console.log(typeof randNumbers1);

