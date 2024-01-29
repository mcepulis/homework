// function tripleTrouble(one, two, three){
//    let str = "";
//  for(let i=0; i<one.length; i++) {
//     str += one[i]
//     str += two[i]
//     str += three[i]
//    }
//    return str;
// }

//b variantas
function tripleTrouble(one, two, three){
    return one.replace(/./g,(v,i)=>v+two[i]+three[i])
   }
   console.log(tripleTrouble("aaac", "zzza", "wwwb"));

