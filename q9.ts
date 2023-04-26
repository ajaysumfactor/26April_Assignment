//Write a function that takes an array of integers as input and returns the maximum subarray sum, where a subarray is defined as a contiguous subsequence of the original array.

//Method 1--

function maximumSubarraySum(arr : number[]){
    let len : number = arr.length;
    let resultMax=Number.MIN_VALUE;
    for(let i=0;i<len ; i++){
        let sum=0;
        for(let j=i;j<len;j++){
            sum+=arr[j];
            resultMax=Math.max(resultMax,sum);
        }
    }
    return resultMax;
}

console.log(maximumSubarraySum([2,-3,6,-5,4,2]));





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