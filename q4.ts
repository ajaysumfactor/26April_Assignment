//Write a function that takes a sorted array of integers and a target integer as input and returns the index of the target integer in the array, or -1 if it does not exist. You cannot use the built-in indexOf or findIndex methods.



function indexOfTarget(arr : number[],target: number): number{
    let start=0;
    let end=arr.length-1;
    while(start<=end){
       let mid=Math.floor((start+end)/2);
       if(target==arr[mid]){
           return mid;
       }
       else if(target < arr[mid]){
           end=mid-1;
       }
       else{
           start = mid+1;
       }
    }
    return -1;
   }
   
   console.log(indexOfTarget([11,23,34,45,67,190],150));
   
   