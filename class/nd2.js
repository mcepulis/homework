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



