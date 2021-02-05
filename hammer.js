class Hammer {
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body = Bodies.rectangle(x, y, 100, 50, options);
        this.width = 100;
        this.height = 50;
        World.add(world, this.body);
    }


    display(){
        this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}
