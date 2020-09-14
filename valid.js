const validSouthAfricanCellNum =(string)=>{
    let regex= /^[+]*[(]{0}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    
    if(string.match(regex)){
        return true;
    }else{
        return false;
    }

}
 console.log(validSouthAfricanCellNum('(011) 282-1111'))