class TACALEOPAU {
    constructor(bodya, pointb) {
      var options = {
          bodyA:bodya,
          pointB:pointb,
          stiffness:0.04,
          length:10
      }
      this.aeg1 = loadImage("alcool em gel.png");
      this.aeg2 = loadImage("alcool em gel2.png");
      this.aeg3 = loadImage("alcool em gel3.png");
      this.chain = Matter.Constraint.create(options);
      this.pointB = pointb;
      World.add(world, this.chain);
    } 
    display(){
      image(this.aeg1,104,184)
      image(this.aeg2,133,191)
      if (this.chain.bodyA){
        strokeWeight(5);
        stroke(48,22,8);
        line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
        line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.pointB.x+42,this.pointB.y);
        image(this.aeg3,this.chain.bodyA.position.x-30,this.chain.bodyA.position.y,15,25);
    }
    }
    fly() {
      this.chain.bodyA = null;
    }
  };
  