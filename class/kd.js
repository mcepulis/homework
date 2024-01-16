/*
Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/


const num1 = 5;
const num2 = -3.5;
const num3 = Infinity;
console.log(num1);
console.log(num2);
console.log(num3);

const str1 = "Mano";
const str2 = '"password"';
const str3 = "'qwerty123'";
console.log(str1);
console.log(str2);
console.log(str3);

const array1= [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [11, 12, 13 ,14 ,15];
console.log(array1);
console.log(array2);
console.log(array3);

const city = ['Kaunas', 'Vilnius', 'Klaipeda', 'Siauliai', 'Panevezys'];
const country =  ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Vokietija'];
const countrySigns =  ['LT', 'LV', 'EE', 'PL', 'DE'];
console.log(city);
console.log(country);
console.log(countrySigns);


/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console

Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console

Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/


const sumNum = num1 + num2 + num3;
console.log(sumNum);

const strAll1 = `${str1}      ${str2}        ${str3}`
const strAll2 = str1 + ' ' + str2 + ' ' + str3;
console.log(strAll1);
console.log(strAll2);

const sk1 = 1;
const sk2 = 2;
const sk3 = 3;
const sk4 = 4;
const sk5 = 5;
const sum = sk1 - sk2 + sk3 - sk4 + sk5;
console.log(sk1 + '-' + sk2 + '+' + sk3 + '-' + sk4 + '+' + sk5 + '=' + sum);

const strAll3 = str3 + ', ' + str2 + ', ' + str1;
console.log(strAll3);



/*
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), 
tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, 
išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/

const didesnis = 18;
const mazesnis = 18;


if(didesnis > mazesnis) {
    console.log('pomidoras(didesnis)');
} else {
    console.log('Bandykite kitą kartą.(mazesnis)');
}

if (didesnis == mazesnis) {
    console.log('pomidoras (lygus)');
} else {
    console.log('Bandykite kitą kartą.(nelygus)');
}

if (didesnis >= mazesnis) {
    console.log('pomidoras.(didesnis arba lygus)');
}

if (didesnis <= mazesnis)  {
    console.log('Bandykite kitą kartą.(mazesnis arba lygus)');
}

const tekstas1 = "arbata";
const tekstas2 = "kava";


if(tekstas1.length > tekstas2.length ) {
    console.log('pomidoras(didesnis)');
} else {
    console.log('Bandykite kitą kartą.(mazesnis)');
}

if (tekstas1.length  == tekstas2.length ) {
    console.log('pomidoras (lygus)');
} else {
    console.log('Bandykite kitą kartą.(nelygus)');
}

if (tekstas1.length  >= tekstas2.length ) {
    console.log('pomidoras.(didesnis arba lygus)');
}

if (tekstas1.length  <= tekstas2.length )  {
    console.log('Bandykite kitą kartą.(mazesnis arba lygus)');
}


const numberArray1 = [1, 5, 8, 9, 4];
const numberArray2 = [1, 5, 8, 9];

if(numberArray1.length > numberArray2.length ) {
    console.log('pomidoras(didesnis)');
} else {
    console.log('Bandykite kitą kartą.(mazesnis)');
}

if (numberArray1.length  == numberArray2.length ) {
    console.log('pomidoras (lygus)');
} else {
    console.log('Bandykite kitą kartą.(nelygus)');
}

if (numberArray1.length  >= numberArray2.length ) {
    console.log('pomidoras.(didesnis arba lygus)');
}

if (numberArray1.length  <= numberArray2.length )  {
    console.log('Bandykite kitą kartą.(mazesnis arba lygus)');
}


// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos
// gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

function tusciaFunkcija () {

    return false;
}

const result = tusciaFunkcija ();


// priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę
// gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

function daugyba (skaicius1, skaicius2) {

    // const skaicius3 = 10;
    const sum = skaicius1 * skaicius2;

return sum;

}

console.log( daugyba( 5, 6 ) );
console.log( daugyba( 10, 6 ) );
console.log( daugyba( 5, 10 ) );




// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
// priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
// gražina skaitmenų kiekį

function skaitmenuKiekisSkaiciuje (sk) {

if (isNaN(sk) || typeof sk === 'boolean') {

        return "Pateikta netinkamo tipo reikšmė."

    } else {

        const numbersLenght = sk.toString().length;
        return numbersLenght;
  
    }

}

const results = skaitmenuKiekisSkaiciuje(true);
console.log(results);


// priima vieną kintamąjį
// jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
// jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
// priešingu atveju, funkcija tęsia darbą
// pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
// gražina didžiausią surastą skaičių


 function didziausiasSkaiciusSarase (max) {

    if (!Array.isArray(max)) {

        console.log("Pateikta netinkamo tipo reikšmė.");

    } else if (Array.isArray(max) && max.length == 0) {

        console.log("Pateiktas sąrašas negali būti tuščias.");
    } else {

        console.log("Pateiktas tinkamas sarasas")
        var m = 0;
        for(i = 0; i < max.length; i++) {
        if (max[i] > m) {
        var m = max[i];

        }
    }
        
    }
    return m;
 }


 const arrResults = didziausiasSkaiciusSarase([100, 6, 8 ,90 ,20 ,1 ,80 ,5 ,700]);
 console.log(arrResults);

var o = 50;

var o = 10;

console.log(o);


// priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti
// patikrinti, ar pirmasis kintamasis yra teksto tipo:
// jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą
// patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
// jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
// priešingu atveju tęsiame darbą
// patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
// jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
// išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
// gražina rezultatą
// TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) );
// rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
// rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) );
// rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) );
// rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) );
// rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”


console.clear();

function isrinktiRaides(text, number) {

if(typeof text !== 'string') {
    return "Pirmasis kintamasis yra netinkamo tipo."
} else if (text.length !==0 && text.length >= 100) {
    return "Pirmojo kintamojo reikšmė yra netinkamo dydžio."
} else if(typeof number !== 'number') {
    return "Antrasis kintamasis yra netinkamo tipo."
} else if(number <= 0) {
    return "Antrasis kintamasis turi būti didesnis už nulį."
} else if(number > text.length) {
    return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
} else {

let output = "";
for (i = number-1; i <= text.length; i+=number) {
   output += text[i];
}
return output;
}
}
console.log(isrinktiRaides("labasVakaras", 2));

console.clear();

// turi priimti du kintamuosius
// reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
// esant blogoms sąlygoms, išvesti atitinkamą pranešimą
// esant geroms - tęsti darbą
// į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
// daliname pirmąjį skaičių iš antrojo
// grąžinti suskaičiuotą reikšmę
// TESTAI:
// sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą

function dalyba(a,b) {

    if(isNaN (a) || isNaN(b) || typeof a === 'boolean' || typeof b === 'boolean') {
        return "Ivestas ne skaicius arba nepakanka duomenu";
    } else {
    

    let sum = a / b;
    return sum;
    }


}

console.log(dalyba(10,5));


// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30
// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”
// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18
// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


console.clear();

let n1 = 0;
for (i = 0; i <= 0; i++) {
    n1+=i;
}
console.log(n1);

let n2 = 0;
for (i = 0; i <= 4; i++) {
    n2+=i;
}
console.log(n2);

let n3 = 0;
for (i = 0; i <= 100; i++) {
    n3+=i;
}
console.log(n3);

let n4 = 0;
for (i = 574; i <= 815; i++) {
    n4+=i;
}
console.log(n4);

let n5 = 0;
for (i = -50; i <= 50; i++) {
    n5+=i;
}
console.log(n5);

let n6 = 0;
for (i = -70; i <= 30; i++) {
    n6+=i;
}
console.log(n6);


const word = "abcdef";
let reversedWord = "";

for (i = word.length - 1; i > 0; i--) {
reversedWord+=word[i];
    
}
console.log(reversedWord);  

const numb1 = 3
const numb2 = 5
const numb3 = 7
let interval1 = 0;
let interval2 = 0;
let interval3 = 0;

for (i = 0; i <= 11; i++) {
    const liekana1 = i % numb1;
    const liekana2 = i % numb2;
    const liekana3 = i % numb3;

    if (liekana1 === 0) {
        interval1++
    }  
    if (liekana2 === 0) {
        interval2++
    }  
    if (liekana3 === 0) {
        interval3++
    }  
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${interval1} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${interval2} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${interval3} vienetai.`);


for (i = 8; i <= 31; i++) {
    const liekana1 = i % numb1;
    const liekana2 = i % numb2;
    const liekana3 = i % numb3;

    if (liekana1 === 0) {
        interval1++
    }  
    if (liekana2 === 0) {
        interval2++
    }  
    if (liekana3 === 0) {
        interval3++
    }  
}
console.log(`Skaičių intervale tarp 8 ir 30, besidalijančiooooų be liekanos iš 3 yra ${interval1} vienetai.`);
console.log(`Skaičių intervale tarpp 8 ir 30, besidalijančių be liekanos iš 5 yra ${interval2} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 30, besidalijančių be liekanos iš 7 yra ${interval3} vienetai.`);


for (i = -18; i <= 18; i++) {
    const liekana1 = i % numb1;
    const liekana2 = i % numb2;
    const liekana3 = i % numb3;

    if (liekana1 === 0) {
        interval1++
    }  
    if (liekana2 === 0) {
        interval2++
    }  
    if (liekana3 === 0) {
        interval3++
    }  
}
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ${interval1} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ${interval2} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${interval3} vienetai.`);
