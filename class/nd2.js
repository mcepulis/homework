// Patobulinti įgūdžius su masyvo metodais

    //Sukurti masyvą: Sukurkite masyvą, kuriame būtų penki skirtingi skaičiai.

    const arrayNumber = [3, 1, 5, 4, 2];
   

    //Pridėti elementą: Pridėkite naują skaičių prie sukurtos masyvo. 

    arrayNumber.push(11);
    console.log(arrayNumber);

    //Išimti elementą: Pašalinkite vieną iš masyvo elementų. 

    arrayNumber.splice(2,1);

   console.log(arrayNumber);

   //Surasti indeksą: Suraskite indeksą, kuriame yra tam tikras skaičius iš jūsų masyvo. 

   console.log("the index of number 4 is: " + arrayNumber.indexOf(4));

   /*Masyvo ilgis: Panaudokite masyvo ilgio metodą ir išspausdinkite masyvo ilgį. 
    Sukurti naują masyvą: Sukurkite naują masyvą, kuriame būtų elementai iš jūsų pirmojo masyvo, 
    bet atvirkščia tvarka.*/
    
    console.log(`array length is ${arrayNumber.length}`);
   
   
    let reverseArray = [];
    for (let i = arrayNumber.length - 1; i >= 0; i--) {
    reverseArray.push(arrayNumber[i]);
    }

    console.log("1 (for loop) metodas --> " + reverseArray);
    console.log("2 metodas --> " + arrayNumber.reverse());
    arrayNumber.reverse();

    //Rikiavimas: Surikiuokite savo masyvą didėjančia tvarka. 

    arrayNumber.sort((a, b) => a - b);
    console.log(arrayNumber);
   
    //Filtravimas: Sukurkite naują masyvą, kuriame būtų tik lyginiai skaičiai iš jūsų pradinio masyvo. 

    function evenNumber(x) {
        if (x % 2 === 0) {
            return x;
        }
    }

    const evenNumbers = arrayNumber.filter(evenNumber);
    console.log(evenNumbers);


    const evenNumbers2 = arrayNumber.filter(x => x % 2 === 0);
    console.log(evenNumbers2);


   // Apjungimas: Apjunkite du masyvus į vieną.

   const array1 = [1,2,3,4,5];
   const array2 = [6,7,8,9,10];

   const arraySum = array1.concat(array2);
   console.log(arraySum);

   /* Elemento pakartojimas: Pakartokite kiekvieną masyvo elementą tris kartus ir saugokite 
   rezultatą naujame masyve. */

   const trippleArray = Array(3).fill(arrayNumber).flat();
   console.log(trippleArray);

   //Maksimalus skaičius: Raskite didžiausią skaičių savo masyve

    // const maxNumber = arrayNumber.map(x) => Math.max(x);
    const maxNumber = Math.max(...arrayNumber);
    console.log(`array ${[arrayNumber]} maxNumber is ${maxNumber}`);

    //Minimalus skaičius: Raskite mažiausią skaičių savo masyve. 
    const minNumber = Math.min(...arrayNumber);
    console.log(`array ${[arrayNumber]} maxNumber is ${minNumber}`);

    //Unikalūs elementai: Sukurkite masyvą su unikaliais elementais (pašalinkite dublikatus). 

    const duplicateNumbers = [8, 8, 4, 2, 1, 1, 1, 1, 8, 4, 9, 3, 7, 8, 7];

    const uniqueNumbers = duplicateNumbers.filter((data, index) => duplicateNumbers.indexOf(data) === index);
    console.log(uniqueNumbers);

    //Skaičių suma: Susumuokite visus skaičius savo masyve. 
console.log(arrayNumber);
    const sum = arrayNumber.reduce((a, b) => a + b);
    console.log(sum);

    //Vidurkis: Apskaičiuokite vidurkį iš savo masyvo skaičių. 
    
    console.log(arrayNumber.length);
    const mid = arrayNumber.reduce((a, b) => (a + b));
    console.log(mid/arrayNumber.length);

    /*Skaičių kvadratai: Sukurkite naują masyvą, kuriame būtų visi jūsų pradinio masyvo 
    skaičių kvadratai. */

    const doubleNumbers = arrayNumber.map((x) => x*x);
    console.log(doubleNumbers);

    //Elemento paieška: Patikrinkite, ar tam tikras skaičius yra jūsų masyve. 
    function findElement(x) {
        if (arrayNumber.filter(element => element) === x) {
            return x;
        } 
    }

    console.log(findElement(1));
    console.log(arrayNumber.filter(element => element === 6));


    // const findEl = arrayNumber.filter(element => element === );
    // console.log(findEl);