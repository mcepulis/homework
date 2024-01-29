function getDrinkByProfession(param) {
    
    switch (param.toLowerCase()) {
        case "jabroni":
            return "Patron Tequila";
            break;
        case "school counselor":
            return "Anything with Alcohol";
            break;
        case "programmer":
            return "Hipster Craft Beer";
            break;
        case "bike gang member":
            return "Moonshine";
            break;
        case "politician":
            return "Your tax dollars";
            break;
        case "rapper":
            return "Cristal";
            break;
        default:
            return "Beer";
      }

}
console.log(getDrinkByProfession("jaBroni"));


function getDrinkByProfession(param){
    const test = param.split(" ").map(word => word.toLowerCase()).map(word => word[0].toUpperCase() + word.split('').slice(1).join('')).join(' ')
   
       switch (test) {
           case "Jabroni":
               console.log("Patron Tequila");
               break;
           case "School Counselor":
               console.log("Anything with Alcohol");3
               break;
           case "Programmer":
               console.log("Hipster Craft Beer");
               break;
           case "Bike Gang Member":
               console.log("Moonshine");
               break;
           case "Politician":
               console.log("Your tax dollars");
               break;
           case "Rapper":
               console.log("Cristal");
               break;
           default:
               console.log("Beer");
         }
   }
   
   getDrinkByProfession("Bike GAng Member");

//TESTING:
   const tekstas = "aS eiNU i lAuKA";
   const tekstas2 = tekstas.split(" ").map(text => text.toLowerCase()).map(word => word[0] + word.split("").slice(1).join("")).join(" " );

   console.log(tekstas2);


