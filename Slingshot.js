class Slingshot{
    constructor(bodyA, ptB){
        var options = {
            bodyA: bodyA,
            pointB: ptB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = ptB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(arnav){

        this.sling.bodyA = arnav
     
         }


    fly(){

        this.sling.bodyA = null;
         }
    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }  
    }
    }
    