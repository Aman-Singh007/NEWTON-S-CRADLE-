class Chain{
    constructor(BodyA, BodyB){
        var option = {
            bodyA:BodyA,
            bodyB:BodyB,
            stiffness:1,
            length:10 
        }
        this.chain = Constraint.create(option);
        World.add(world, this.chain)

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}