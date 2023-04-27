//2. Write a function that takes an array of integers as input and returns the length of the longest increasing subsequence.


//step 1 --Finding ceil of a target value in the sorted array 

export function findCeil(arr : number[],start : number ,end : number,target: number ): number{
    let ceil=0;
  
    while(start<=end){
       let mid =Math.floor((start+end)/2);
       if(arr[mid]==target){
        return mid;
       }
       else if(arr[mid]<target){
        start=mid+1;
       }
       else{
        ceil=mid;
        end=mid-1;
       }
       
    }
    return ceil;
  }
  
  
  
  function LIS(arr: number[]){
    let arr1=new Array(arr.length);
    let len=1;
    arr1[0]=arr[0];
     for(let i=1;i<arr.length;i++){
      if(arr[i]>arr1[len-1]){
        arr1[len]=arr[i];
        len++;
      }
      else{
        let ceilIndex=findCeil(arr1,0,len-1,arr[i]);
         arr1[ceilIndex]=arr[i];
      }
     }
   return len; 
  } 
  
  
  console.log(LIS([3,10,20,4,40,6,100,7])) //5
  console.log(LIS([3,2,10,1,20,5,40,4,50]));//5
  console.log(LIS([40,30,20,10]));//1
  console.log(LIS([10,20,30]));//3
  console.log(LIS([10,9,2,5,3,7,101,18]));//4
  console.log(LIS([0,1,0,3,2,3]))//4