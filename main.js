import Field from './Field.js'
import Figure from "./Figure.js";

const COLS = 6;
const ROWS = 10;
const BLOCK_SIZE = 30;

//хватаем эелемент канваса
const canvas = document.getElementById('myCanvas')
const context = canvas.getContext('2d')

//выставляем размер игрового поля
context.canvas.width = COLS * BLOCK_SIZE
context.canvas.height = ROWS * BLOCK_SIZE

//говорим канвасу, чтоб ходил не по 1 а по 30 пикселей
context.scale(BLOCK_SIZE, BLOCK_SIZE)


let field = new Field(ROWS, COLS)
field.figure = new Figure(context,COLS,ROWS)

field.figure.draw()


function play() {
}


// Direction = {
//   Up: ArrowUp,
//   Down:ArrowDown,
//   Left:ArrowLeft,
//   Right:ArrowRight
// }

console.table(field.grid)


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        field.figure.move(0, 1)
        context.clearRect(0, 0, canvas.width, canvas.height);
        field.figure.draw()
    }
}, false);








