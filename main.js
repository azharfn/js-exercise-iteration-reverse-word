function reverseUnique(word) {
  //looping sebuah string

  let reversedResult = ""; //variable untuk menyimpan word yang direverse

  for (let i= word.length - 1; i>=0; i--){ 
    // pengecekan apakah karakkter berulang
    
    if(word[i] !== word[i-1]){
      reversedResult += word[i];
      //atau bisa ditulis : "reversedResult = reversedResult + word[i];"
    }
    
  }return reversedResult;
  
  
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
