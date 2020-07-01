class Rope{
    constructor(bodyA, pointB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.0
        }
        this.Rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.Rope);
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}