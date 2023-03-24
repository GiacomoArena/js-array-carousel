
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
//console.log(items);

btnUP.addEventListener('click', function(){


  if(counter < (items.length - 1)){
    items[counter].classList.add('hide');
    counter++;
    items[counter].classList.remove('hide');
  }
  else{
    items[counter].classList.add('hide');
    counter = 0;
    items[counter].classList.remove('hide');
  }


});



btnDW.addEventListener('click', function(){

  if(counter > 0){
    items[counter].classList.add('hide');
    counter--;
    items[counter].classList.remove('hide');
  }
  else{
    items[counter].classList.add('hide');
    counter = 4;
    items[counter].classList.remove('hide');
  }

});