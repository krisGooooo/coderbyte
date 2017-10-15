function LetterCapitalize(str) { 

  // code goes here  
  var newStr = str.split(' ');
  for(var i=0;i<newStr.length;i++)
  {
      newStr[i]=newStr[i].substring(0,1).toUpperCase()+newStr[i].substring(1);
      
  }
  return newStr.join(' '); 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            


