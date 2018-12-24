/*********    Solution #1    *************************************************************************/

function translatePigLatin(str) {
   let vowel = ['a','e','i','o','u'];
   let arr = [...str];
   let count = 0;
   for(let j = 0; j < arr.length; j++){   
      if(vowel.includes(arr[j])){
         count++;
      }
   }
   if(count === 0){  // Handle words without vowels
      arr.push("ay");
      return arr.join('');
   }else if(vowel.includes(arr[0])){  // handle words begin with a vowel
      arr.push("way");
      return arr.join('');
   }else{  // Move the first consonant (or consonant cluster) to the end of the word and suffixes an "ay"
      let i = 0;
      do{
        arr.push(arr[i]);
        i++;
      }while(!vowel.includes(arr[i]));
    
      arr = arr.slice(i);
      return arr.join('').concat("ay");
   }
}
translatePigLatin("california"); //return "aliforniacay"
translatePigLatin("glove"); //return "oveglay"
translatePigLatin("eight"); //return "eightway"


/*********    Solution #2    *************************************************************************/

function translatePigLatin2(str) {
  let pigLatin = '';
    let regex = /[aeiou]/gi;
    if(str[0].match(regex) !== null){ // Check if the first character is a vowel
        pigLatin = str + 'way'; 
    }else if(str.match(regex) === null){ // Check if the string contains only consonants
        pigLatin = str + 'ay';
    }else{
        let vowelIndice = str.indexOf(str.match(regex)[0]); // Find how many consonants before the first vowel
        pigLatin = str.substring(vowelIndice) + str.substring(0, vowelIndice) + 'ay'; // Add the consonants that were previously omitted and add the ending
    }
    return pigLatin;
}




// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin/
