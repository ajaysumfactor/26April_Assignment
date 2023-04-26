//Write a function that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.

function canBePalindrome(str : string){
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
    for(const key in countEach){ //iterating through countEach Object 
      if(countEach[key]%2==1){ //if character has come in odd time 
        odd++;
      }
    }
    if(odd>1){ //if more than one character has comes in odd times return false 
        return false;
    }
    else{
        return true;
    }
  //console.log(countEach);
}


console.log(canBePalindrome("asdfghjk"));