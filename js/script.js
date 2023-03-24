
const btnUP = document.querySelector('.up');
const btnDW = document.querySelector('.down');

const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];

const imgWrapper = document.querySelector('.img-wrapper');


for (let i = 0; i < images.length; i++) {

  const image = images[i];
  
  imgWrapper.innerHTML += `
  <img class="item hide" src="${image}">
  `;
  
}
let counter = 0;

const items = document.getElementsByClassName('item');
items[counter].classList.remove('hide');
console.log(items);
btnUP.addEventListener('click', function(){

  items[counter].classList.add('hide');
  console.log(items);
  counter++;

  items[counter].classList.remove('hide');

});

btnDW.addEventListener('click', function(){

  items[counter].classList.add('hide');

  counter--;

  items[counter].classList.remove('hide');

});