interface circleConfig
{
    radius:number;
    color:string;
}
class Circle
{
    CircleRadius:number;
    CircleColor:string;

    constructor(obj: circleConfig)
    {
        this. CircleRadius = obj.radius;
        this.CircleColor=obj.color;
    }


    Circle(){console.log(this.CircleRadius,this.CircleColor)};

    Circle1(radius:number){console.log(radius)};

    Circle2(radius:number,color:string)
    {console.log(this.CircleRadius,this.CircleColor)};

    getRadius():number{
       let radius = this.CircleRadius;
       return radius;
    };

    setRadius(radius:number):void {
    this. getRadius();
      
    };


    getColor():string{ let color= this.CircleColor;
        return color};

    setColor(color:string):void{ this.getColor()};

    toString():string{
        return this.CircleColor;
    };

    getArea():number{
        let radius = this.CircleRadius;
        return (3.14*radius*radius);
    };

    getCircumference():number{
        let radius = this.CircleRadius;
       return(2*3.14*radius)
    };

   

}
 let mycircle = new Circle({
     "radius": 20,
     "color":"red",
 });
 
console.log(mycircle.CircleColor);

console.log(mycircle.CircleRadius);

console.log(mycircle.getArea());
console.log(mycircle.toString())