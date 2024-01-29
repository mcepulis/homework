function findDuplicateCharacters(str, letter) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
                count++;
            }   
		}
    return count; 
}

console.log(findDuplicateCharacters('aaabbbabaa', 'c'));


function strCount(str, letter){  
    return str.split(letter).length-1
  }

  console.log(strCount('aaabbbabaa', 'a'));