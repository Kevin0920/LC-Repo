var outerFunction  = function(){
 
    if(true){
       var x = 5;
       //console.log(y); //line 1, ReferenceError: y not defined
    }
  
    var nestedFunction = function() {
  
       if(true){
          var y = 7;
          console.log(x); //line 2, x will still be known prints 5
       }
  
       if(true){
          console.log(y); //line 3, prints 7
        }
    }
    return nestedFunction;
 }
  
 var myFunction = outerFunction();
 myFunction();