class Fruit {
    pickLocation(){
        this.x = Math.random()*(canvas.width - FRUIT_SIZE);
        this.y = Math.random()*(canvas.height - FRUIT_SIZE);
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,FRUIT_SIZE,FRUIT_SIZE)
    }
}