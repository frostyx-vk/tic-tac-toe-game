`use strict`

const elem = document.querySelector('ul');
elem.insertAdjacentHTML(
    `beforeend`,
    `<li>Текст</li>`
);

console.log(elem)

