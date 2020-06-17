class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.5,
            density:0.2,
        }
        this.body = Bodies.circle(x,y,20,options);
        this.diameter = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        //ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,40,40);
        pop();
    }
};