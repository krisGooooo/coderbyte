function FirstReverse(str) { 

  // code goes here
    var res = "";
    var len = str.length - 1;
    for (var i = len; i >= 0; i--) {
        res += str[i];
    }
    return res;
         
}
   
// keep this function call here 
FirstReverse(readline());                            

