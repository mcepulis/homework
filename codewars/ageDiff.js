function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
    }

console.log(differenceInAges([82, 15, 6, 38, 35]))


