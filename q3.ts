//3. Write a function that takes a string as input and returns the length of the longest palindromic substring.

//method 1:----------------------------------------------------------------------------------------------------------
function isPalindrome(str : string): boolean{
    let start=0;
    let end=str.length-1;
    while(start<end){
        if(str.charAt(start)!=str.charAt(end)){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

function lengthOfLongestPalindromic(str : string){
    let length=0;

    for(let i=0;i<str.length;i++)
    {
        for(let j=i+1;j<str.length;j++){
          let s=str.substring(i,j);
          if(isPalindrome(s)){//checking each substring palindrome or not 
            length=Math.max(length,s.length);
          }
        }
    }
    return length;

}

console.log(lengthOfLongestPalindromic("abacdcaberg"));//7
console.log(lengthOfLongestPalindromic("abccbc"));//4
console.log(lengthOfLongestPalindromic("abacdcaberg"))//7





//method : 2----------------------------------------------------------------------------------------------------------

// function longestPSubstring(str : string): number{
//     const rows = str.length;
//     const cols = str.length;
    
//     const memo = Array.from({ length: rows }, () => 
//       Array.from({ length: cols }, () => false)
//     );

// //making a boolean table  like this 
// /*
//  [
//   [ false, false, false, false, false, false ],
//   [ false, false, false, false, false, false ],
//   [ false, false, false, false, false, false ],
//   [ false, false, false, false, false, false ],
//   [ false, false, false, false, false, false ],
//   [ false, false, false, false, false, false ]
// ]



// [
//   [ a=true, ab, abc, abcc, abccb, abccbc ],
//   [ false, b=true, bc, bcc, bccb=true, bccbc ],
//   [ false, false, c=true, cc=true, ccb, ccbc ],
//   [ false, false, false, c=true, cb, cbc=true ],
//   [ false, false, false, false, b=true, bc ],
//   [ false, false, false, false, false, c=true]
// ]
 
// */


 
//     let count=0;
//     for(let g=0;g<str.length;g++){ //for diagonal fill 
//         for(let i=0,j=g;j<str.length;i++,j++){
//            if(g==0){
//             memo[i][j]=true;
//            }
//            else if(g==1){
//             if(str.charAt(i)==str.charAt(j)){
//                 memo[i][j]=true;
//             }
//             else{
//                 memo[i][j]=false;
//             }
//            }
//            else{
//             if(str.charAt(i) == str.charAt(j) && memo[i+1][j-1]==true){
//                 memo[i][j]=true;
//             }
//             else{
//                 memo[i][j]=false;
//             }
//            }
//            if(memo[i][j]){
//             count=g+1;
//            }
//         }
//     }
//     return count;
    
// }
// console.log(longestPSubstring("abccbc"));//4
// console.log(longestPSubstring("abacdcaberg"));//7


