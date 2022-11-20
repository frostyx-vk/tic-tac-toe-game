`use strict`

const blockForMouse = document.querySelector('.square');
blockForMouse.addEventListener (`mouseover`, function (event) {
    let target = event.target.closest(".square_1, .square_2, .square_3, .square_4, .square_5, .square_6, .square_7, .square_8, .square_9");
    if (!target) return;
    target.style.cssText = `background-color: #6348cf;`;
});
blockForMouse.addEventListener (`mouseout`, function (event) {
    let target = event.target.closest(".square_1, .square_2, .square_3, .square_4, .square_5, .square_6, .square_7, .square_8, .square_9");
    if (!target) return;
    target.style.cssText = ``;
});

const myClick = document.querySelector('.square_1');
myClick.onclick = function() {
    prompt('X или 0 ?');
  };

// let a = prompt('X или 0 ?');
// myClick = a;

// function myClick() {
//     prompt('X или 0 ?')
// };

// prompt('X или 0 ?');