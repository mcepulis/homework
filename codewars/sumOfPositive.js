
const array1 = [-5,2,6,10];

 function positiveSum(arr) {
    
      let sum = 0;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
        sum += arr[i]
   
        }
    
    }
    return sum;
  }

  console.log(positiveSum(array1));



  function positiveSum1(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0));
 }

 console.log(positiveSum1(array1));