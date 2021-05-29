class Box {
    constructor(x,y,width,height)  {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var xPosition = this.body.position.x;
        var yPosition = this.body.position.y;
        fill("red");
        rectMode(CENTER);
        rect(xPosition,yPosition,this.width,this.height)

    }
}