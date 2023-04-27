//Write a function that takes two arrays of integers as input and returns a new array containing the common elements of both arrays, sorted in ascending order.

 


export function commonOfBothArray(arr1 : number[],arr2 : number[]){
    let s=new Set();
    for(const element of arr1){
       if(arr2.includes(element)){
        s.add(element);
       }
    }
  let finalArray =Array.from(s);
   finalArray.sort((a :any,b:any)=>a-b);
    return finalArray 
}


console.log(commonOfBothArray([4,3,2,5,6,1,8,9],[5,4,2,6,1]));








// function commonOfBothArray(arr1 : number[],arr2 : number[]) : number[]{

//     let ptr1 : number=0;
//     let ptr2 : number=0;
 
//     let lengthArray1 : number =arr1.length;
//     let lengthArray2 : number =arr2.length;
 
//     let resultArray: number[]=[];
 
//     while(ptr1<lengthArray1 && ptr2<lengthArray2){
 
//      if(arr1[ptr1] < arr2[ptr2]){
//          ptr1++
//      }
//      else if(arr1[ptr1] > arr2[ptr2]){
//          ptr2++;
//      }
//      else{
//          resultArray.push(arr1[ptr1]);
//          ptr1++;
//          ptr2++
 
//      }
//     }
 
//     return resultArray;
//  }
 
 
//  console.log(commonOfBothArray([1,2,3,4,5,6,7],[2,3,4,4,5]));
 

