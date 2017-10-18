function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var newStr = '=' + str + '=';


  for (var i = 0; i < newStr.length; i++) {
    
    if (newStr[i].match(/[a-z]/i) !== null) {      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (newStr[i-1] !== '+' || newStr[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
  
}
   
// keep this function call here 
SimpleSymbols(readline());