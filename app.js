//Create the chessbouard 8x8 grid, also working on bigger sizes
let size = 10
let board = ""

for(let row = 1; row <= size; row++) {
    for(let column = 1; column <= size; column++) {
        if((row + column) % 2 == 0) {
            board += " "
        } else {
            board += "#"
        }
        
    }
    board += "\n"
}
console.log(board)

