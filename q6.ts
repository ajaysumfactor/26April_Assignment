//Write a function that takes a string as input and returns true if the string is a valid palindrome after removing exactly one character, and false otherwise.
export function canBePalindromeAfterRemove(str : string){
    if(str.length===0){
        return false;
    }
    let countEach : object = {};
    for(let i=0; i <str.length ; i++){
        let ch = str.charAt(i);
        if(countEach[ch]){
            countEach[ch]++;
        }
        else
        {
            countEach[ch]=1;
        }
    }
    //first i have calculate the count of each character

    let odd : number =0;

     for(const key in countEach){
      if(countEach[key]%2==1){
        odd++;
      }
    }
    if(odd>2){
        return false;
    }
    else{
        return true;
    }
   //console.log(countEach);
}


console.log(canBePalindromeAfterRemove("aabbbb"));
console.log(canBePalindromeAfterRemove("aabbbbnnnnnn"));
console.log(canBePalindromeAfterRemove("aabbbbvvvz"));
console.log(canBePalindromeAfterRemove("aabbbbwwweeerrr"));
console.log(canBePalindromeAfterRemove(""));
console.log(canBePalindromeAfterRemove("a"));
console.log(canBePalindromeAfterRemove("zz"));

