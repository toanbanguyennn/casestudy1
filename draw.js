const ORIENTATION_LEFT = "Left";
const ORIENTATION_RIGHT = "Right";
const ORIENTATION_UP = "Up";
const ORIENTATION_DOWN = "Down";

const CURRENT_DIRECTION_LEFT = "left";
const CURRENT_DIRECTION_RIGHT = "right";
const CURRENT_DIRECTION_UP = "up";
const CURRENT_DIRECTION_DOWN = "down";

const SNAKE_SIZE = 30;
const FRUIT_SIZE = 30;

const DEFAULT_SNAKE_X_POSITION = 0;
const DEFAULT_SNAKE_Y_POSITION = 0;
const DEFAULT_SNAKE_SPEED = 5;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let snake = new Snake();
let fruit = new Fruit();
let isStop = false;
fruit.pickLocation();

let stopId;

function start() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();
    if (snake.eat(fruit)) {
        fruit.pickLocation();
    }
    snake.death();
    document.getElementById('Score').innerText = snake.total;
    if (isStop === true) {
        cancelAnimationFrame(stopId);
        gameOver()
    } else {
        stopId = requestAnimationFrame(start);
    }
}

function play() {
    requestAnimationFrame(start);
    document.getElementById('start_button').style.display = 'none';
}

window.addEventListener('keydown', ((evt) => {
    const keyDirection = evt.key.replace('Arrow', '');
    snake.changeDirection(keyDirection);
}))
