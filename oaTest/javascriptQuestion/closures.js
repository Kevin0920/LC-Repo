var cat = {
 
    name: "Gus",
    color: "gray",
    age: 15,
  
    printInfo: function() {
        // let that = this;
       console.log("Hello", "Name:", this.name, "Color:", this.color, "Age:", this.age); //line 1, prints correctly
  
       nestedFunction = function() {
           console.log("1111", "Name:", this.name, "Color:", this.color, "Age:", this.age); //line 2, loses cat scope
       }
  
    nestedFunction.call(this);
    }
 }
 cat.printInfo(); //prints Name: window Color: undefined Age: undefined

