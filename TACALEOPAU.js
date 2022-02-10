class TACALEOPAU {
    constructor(bodya, pointb) {
      var options = {
          bodyA:bodya,
          pointB:pointb,
          stiffness:0.04,
          length:10
      }
      this.chain = Matter.Constraint.create(options);
      this.pointB = pointb;
      World.add(world, this.chain);
    }
    display(){
      if (this.chain.bodyA){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
    }
    fly() {
      this.chain.bodyA = null;
    }
  };
  