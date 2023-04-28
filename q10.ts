//10. Write a function that takes a string as input and returns true if it is a valid IPv4 address in dot-decimal notation, and false otherwise.


// function isIPv4(str : string):boolean{
//     if(/^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(str)){
//         return true;
//     }
//     else{
//         return false;
//     }  
  
// }



function isIPv4(str : string): boolean{
    let s=str.split('.');
    if(s.length==4){
        for(let i=0;i<s.length;i++){
            if(s[i][0]=='0' && s[i].length>1){
                return false;
            }
            let x=parseInt(s[i],10);
            // console.log(x);
            if( isNaN(x) || (x<0 || x>255)){
                return false;
            }
        }
        return true;
    }
    return false;
    
}

console.log(isIPv4("192.300.255.255"))
console.log(isIPv4("192.123.255.255"))
console.log(isIPv4("123.123.123.123.123"));
console.log(isIPv4("1213.232.231.2"));
console.log(isIPv4("125.123.124.129"));
console.log(isIPv4("05.123.124.129"))
console.log(isIPv4("123.0.34.234"));
