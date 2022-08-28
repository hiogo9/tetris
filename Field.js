export default class Field {
    grid = null
    rows
    cols
    figure = null


    //при иницииализации объекта этого класса заполянет два поля и
    //вызывает функцию, которая заполянет его же грид
    constructor(ROWS,COLS) {
        this.rows = ROWS
        this.cols = COLS
        this.reset()
    }

    //вызывает функциб создающую пустой массив и сует этот пустой массив в грид
    reset() {
        this.grid = this.getEmptyField()
    }

    //создает пустой массиви из 0 и возвращает его
    getEmptyField() {
        let arr = []
        for (let i = 0; i < this.rows; i++) {
            arr.push([])
            for (let j = 0; j < this.cols; j++) {
                arr[i].push(0)
            }
        }
        return arr
    }
}

