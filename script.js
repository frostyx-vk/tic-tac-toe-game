`use strict`

// сделана закраска блоков
const blockForMouse = document.querySelector('.square'); 
blockForMouse.addEventListener(`mouseover`, function (event) {
    let target = event.target.closest(".square_1, .square_2, .square_3, .square_4, .square_5, .square_6, .square_7, .square_8, .square_9");
    if (!target) return;
    target.style.cssText = `background-color: #6348cf;`;
});
blockForMouse.addEventListener(`mouseout`, function (event) {
    let target = event.target.closest(".square_1, .square_2, .square_3, .square_4, .square_5, .square_6, .square_7, .square_8, .square_9");
    if (!target) return;
    target.style.cssText = ``;
});

const defaultGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

// создан массив по аналогии поля 3 на 3
let gameState = deepCopyArray(defaultGameState);

// преведен массив к строке и из строки получен новый массив без ссылок
function deepCopyArray(array) {
    return JSON.parse(JSON.stringify(array))
}

// сделана синхронизация массива и дивов
function render() {    
    const cells = blockForMouse.querySelectorAll('[data-x][data-y]');

    console.log(111, cells);

    for (const cell of cells) {
        const x = +cell.dataset['x']; // 0
        const y = +cell.dataset['y']; // 0
        const value = gameState[x][y]; // block[0][0] 

        cell.innerHTML = value;
    }
}

render();

// условие проставления данных
let prevValue = 'o';     

blockForMouse.addEventListener('click', (e) => {
    const x = +e.target.dataset['x'];
    const y = +e.target.dataset['y'];

    if (gameState[x][y] !== null) return;

    if (prevValue === 'o') {
        prevValue = 'x';
    } else {
        prevValue = 'o';
    }

    gameState[x][y] = prevValue;

    render();
})

// на кнопку рестарт навешанo действие приведения в дефоолтному состоянию поля игры
function refreshPage() {
    gameState = deepCopyArray(defaultGameState);
    render();
}

//кнопка выбора игрока
function select(){
    let player1 = prompt("Enter player name 1:")
    let player2 = prompt("Enter player name 2:")
    let text1 = document.querySelector(`.nameplayers__1`);
    let text2 = document.querySelector(`.nameplayers__2`);
    text1.innerHTML = player1;
    text2.innerHTML = player2;
  }

