//1. Write a function that takes a string as input and returns the longest substring that contains at most two distinct characters.


export function lengthOfLongestSubstringTwoDistinct(str: string) {
    let myMap = new Map<string, number>();

    let dist = 0;
    let start = 0;
    let ans = 0;
    let s='';

    for (let i = 0; i < str.length; i++) {
        let fre = (myMap.get(str.charAt(i)) || 0); //initially frequency should not be nan/undefined
        if (fre == 0) { //if frequency is zero means map has not that character in it 
            dist++;//here we have increased distinct element 
        }
        myMap.set(str.charAt(i), fre + 1);

        while (dist > 2) {
            fre = (myMap.get(str.charAt(start))) || 0;
            myMap.set(str.charAt(start), fre - 1);
            if (fre - 1 == 0) {
                dist--;
            }
            start++;
        }
        // ans = Math.max(ans, i - start + 1);
        if((i-start+1)>ans){
            ans=(i-start+1);
            s=str.substring(start,(i+1));
        }
    }
    return s;
}

console.log(lengthOfLongestSubstringTwoDistinct("awwwwwbcddddeeefghj"));//ddddeee
console.log(lengthOfLongestSubstringTwoDistinct("cbebebe"))//bebebe
console.log(lengthOfLongestSubstringTwoDistinct("misipisssi"));//isssi