//Write a function that takes a string as input and returns true if the string is a valid palindrome after removing exactly one character, and false otherwise.


function isPalindrome(str : string,start : number,end : number): boolean{
    while(start<end){
        if(str.charAt(start)!=str.charAt(end)){
            return false
        }
        start++;
        end--;
    }
    return true;
}



function canBePalindrome(str : string) : boolean{
    let start : number =0 ;
    let end : number =str.length - 1;
    while(start<end){
        if(str.charAt(start)==str.charAt(end)){
            start++;
            end--;
        }
        else{
            /*if character at start is not equal to character at end . Then two case arises.
            1.skip start index check palindrome in (start+1---to -----end)
            2.skip end index check palindrome in (start--to---end-1)
            */
            

            return isPalindrome(str,start+1,end) || isPalindrome(str,start,end-1);
        }
    }
    return false;
}


console.log(canBePalindrome("asfgfdsa"));
console.log(canBePalindrome("asdddddfghlkj"))

 
 

