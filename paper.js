    class paper
    {
        construtor(x,y,r)
        {
            var options={
                isStatic:false
            }
            this.x = x
            this.y = y
            this.r = r
            this.body=Bodies.circle(this.x = x ,this.y, this.r/2,options);
            World.add(world,this.body);
    
        
        }
        display()
        {
            var paperPos=this.body.position;
            
            push()
            translate(paperPos.x,paperPos.y);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            rect(0,0,this.r,this.r);
            pop()
        }
    }