`use strict`

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


const block = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function render() {
    const cells = blockForMouse.querySelectorAll('[data-x][data-y]');

    console.log(111, cells);

    for (const cell of cells) {
        const x = +cell.dataset['x']; // 0
        const y = +cell.dataset['y']; // 0
        const value = block[x][y]; // block[0][0] 

        cell.innerHTML = value;
    }
}

render();


// for (let i = 0; i < block.length, i++) {
//     let blockIn = block[i] 
//     for (let k = 0; k < blockIn.length; i++)
//     console.log(blockIn[blockIn])
// }



let prevValue = 'o';

blockForMouse.addEventListener('click', (e) => {
    const x = +e.target.dataset['x'];
    const y = +e.target.dataset['y'];

    if (block[x][y] !== null) return;

    if (prevValue === 'o') {
        prevValue = 'x';
    } else {
        prevValue = 'o';
    }

    block[x][y] = prevValue;

    render();
})




// const myClick = document.querySelector('.square_1');
// myClick.onclick = function() {
//     prompt('X или 0 ?');
//   };
