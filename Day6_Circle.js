class Circle {

     constructor(radius,color)
     {
        this.radius = radius;
        this.color  = color;
     }

     getRadius()
     {
        return this.radius;
     }
      
     getColor()
     {
        return this.color;
     } 
     
     getArea()    //area of a circle = pi*r**2
     {
         return Math.PI*this.radius*this.radius;
     }
     getCircumference()  // circumC = 2* pi * r
     {
         return 2*Math.PI*this.radius;
     } 
}

let circle = new Circle(5,"Red");

console.log("Radius of the circle.......:", circle.getRadius());
console.log("Area of the Circle.........:", circle.getArea());
console.log("Circumference of the circle:", circle.getCircumference());
console.log("Color of the circle........:", circle.getColor());

