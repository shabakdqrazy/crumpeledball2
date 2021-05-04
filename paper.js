class Paper{
    constructor(x,y,radius){
        var options={
           
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.image=loadImage("paper.png")
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius)
        pop();

    }
}