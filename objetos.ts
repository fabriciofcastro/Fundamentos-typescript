type Point = {
    x: number
    y: number
}

function printCoord( points: Point) {
    console.log(`O eixo x ${points.x}`)
    console.log(`O eixo y ${points.y}`)
}

printCoord( {x: 50, y: 80 })