//10. Write a function that takes a string as input and returns true if it is a valid IPv4 address in dot-decimal notation, and false otherwise.

function isIPv4(str : string):boolean{
    if(/(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/.test(str)){
        return true;
    }
    else{
        return false;
    }  
  
}

console.log(isIPv4("192.300.255.255."))
console.log(isIPv4("192.123.255.255."))