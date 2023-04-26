//Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.

//Method 1--

// function maximumSubarraySum(arr : number[]){
//     let len : number = arr.length;
//     let resultMax=Number.MIN_VALUE;
//     for(let i=0;i<len ; i++){
//         let sum=0;
//         for(let j=i;j<len;j++){
//             sum+=arr[j];
//             resultMax=Math.max(resultMax,sum);
//         }
//     }
//     return resultMax;
// }

// console.log(maximumSubarraySum([2,-3,6,-5,4,2]));





//method 2---
function maximumSubarraySum(arr : number[]): number{
    let result : number = arr[0];
    let maxres : number = arr[0];

    for(let i=1;i<arr.length ; i++){
        maxres=Math.max(maxres+arr[i],arr[i]);
        result=Math.max(result,maxres);
    }
    return result;
}

console.log(maximumSubarraySum([2,-3,6,-5,4,2]));
/*
result=2
maxres=2
i=1
    maxres=max((2+(-3)),-3)=-1
    result=max(2,-1)=2
i=2
    maxres=max((-1+6),6)=6
    result=max(2,6)=6
i=3
    maxres=max((6+(-5)),-5)=1
    result=max(6,1)=6
i=4
    maxres=max((1+4),4)=5
    result=max(6,5)=6
i=5
    maxres=max((5+2),2)=7
    result=max(6,7)=7

    return 7;
*/