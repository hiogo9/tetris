export default class Figure {
    context;
    color;
    shape;
    x;
    y;
    maxX;
    maxY;

    constructor(context, maxX, maxY) {
        this.context = context
        this.color = 'red'
        this.shape = [[1,0,0],
                      [1,1,1],
                      [0,0,0]]
        this.x = 0
        this.y = 0
        this.maxX = maxX
        this.maxY = maxY
    }

    draw(){
        this.context.fillStyle = this.color
        for (let i = 0; i < this.shape.length ; i++) {
            for (let j = 0; j < this.shape[i].length; j++) {
                let pixel = this.shape[i][j]
                if (pixel>0){
                    this.context.fillRect(this.x + j , this.y + i , 1, 1)
                }

            }
        }
    }

    move(x,y){
        // if (this.y+y>0 && this.y+y<this.maxY-1){
         this.y = this.y+y
        // }
        // if (this.x+x>0 && this.x+x<this.maxX){
           this.x = this.x+x
        // }
    }




}