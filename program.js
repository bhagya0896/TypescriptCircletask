var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.CircleRadius = obj.radius;
        this.CircleColor = obj.color;
    }
    Circle.prototype.Circle = function () { console.log(this.CircleRadius, this.CircleColor); };
    ;
    Circle.prototype.Circle1 = function (radius) { console.log(radius); };
    ;
    Circle.prototype.Circle2 = function (radius, color) { console.log(this.CircleRadius, this.CircleColor); };
    ;
    Circle.prototype.getRadius = function () {
        var radius = this.CircleRadius;
        return radius;
    };
    ;
    Circle.prototype.setRadius = function (radius) {
        this.getRadius();
    };
    ;
    Circle.prototype.getColor = function () {
        var color = this.CircleColor;
        return color;
    };
    ;
    Circle.prototype.setColor = function (color) { this.getColor(); };
    ;
    Circle.prototype.toString = function () {
        return this.CircleColor;
    };
    ;
    Circle.prototype.getArea = function () {
        var radius = this.CircleRadius;
        return (3.14 * radius * radius);
    };
    ;
    Circle.prototype.getCircumference = function () {
        var radius = this.CircleRadius;
        return (2 * 3.14 * radius);
    };
    ;
    return Circle;
}());
var mycircle = new Circle({
    "radius": 20,
    "color": "red"
});
console.log(mycircle.CircleColor);
console.log(mycircle.CircleRadius);
console.log(mycircle.getArea());
console.log(mycircle.toString());
