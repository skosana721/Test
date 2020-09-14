const palindrome =(str)=>{
    // let regex = /[^A-Za-z]/gi;
    let regex = /\W\s/ig;
    let newStr = str.replace(regex, '')
    let strlength = newStr.length;
    for(let i = 0; i< strlength; i++){
        if(str[i] !== str[strlength-1-i]){
            return "Nope, try another";
        }
    }
    return "Yay Palindrome";
}
console.log(palindrome('RaCeCar'))
