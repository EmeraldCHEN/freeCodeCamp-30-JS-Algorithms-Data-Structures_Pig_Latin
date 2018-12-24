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

console.log(translatePigLatin("gl"));
