function LetterChanges(str) { 


    var newStr = str.replace(/[a-z]/gi,function(e){
        return (e==='z'||e==='Z')?'a':String.fromCharCode(e.charCodeAt()+1);
    });
    
    var str2=newStr.replace(/a|e|i|o|u/gi,function(e){
        return e.toUpperCase();
    })
    
    return str2;
         
}
   
// keep this function call here 
LetterChanges(readline());