window.onload = init;

function init() {

    generateDOM(sizeOfGrid());
    ListeningEvent();
}

function sizeOfGrid(gridSize = 30) {
    return gridSize;
}

function resetGrid() {
    document.querySelector('.freeDrawGrid').remove();

    const pageContainer = document.querySelector('.pageContainer');
    const grid = document.createElement('div');
    grid.classList.add('freeDrawGrid')
    pageContainer.appendChild(grid)
}

function generateDOM(sizeOfGrid) {
    resetGrid()

    const grid = document.querySelector('.freeDrawGrid');
    for (let i = 0; i < sizeOfGrid; i++) {
        const rows = document.createElement('div');
        rows.classList.add('gridRow');
        grid.appendChild(rows);
        for (let j = 0; j < sizeOfGrid; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell')
            cell.style.width = `${600 / sizeOfGrid}px`;
            cell.style.height = `${600 / sizeOfGrid}px`;
            rows.appendChild(cell);
        }
    }
}

function changeSize() {
    let newSize = parseInt(prompt("Input a number!"));
    if (newSize > 50) newSize = 50;
    generateDOM(sizeOfGrid(newSize));
    ListeningEvent();
}

function ListeningEvent() {
    const sizeBtn = document.querySelector('.sizeBtn')
    sizeBtn.onclick = changeSize;

    const cells = document.querySelectorAll('.gridCell')
    console.log(cells)
    for (let cell of cells) {
        cell.onmouseover = changeColor;
    }
}

function changeColor(eventObj) {
    console.log("hello")
    let cell = eventObj.target;
    cell.style.visibility = 'hidden';
}