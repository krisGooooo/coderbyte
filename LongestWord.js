function LongestWord(sen) { 

  // code goes here  

    var arr = sen.match(/[a-zA-Z0-9]+/gi);			
    var a = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > a.length) {
            a = arr[i];
        }
    }
  return a; 
         
}
   
// keep this function call here 
LongestWord(readline());