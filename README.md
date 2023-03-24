js-array-carousel
===

## **Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

![carosello](/img/carosello_mono_array.png)

## **MILESTONE 1**
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

**passaggi**
- creare la parte grafica con css mettendo i vari elementi su HTML 
.


## **MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

  - creare un array contenente le img
  ```
  const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];
  ```
  .

-  creo un ciclo e stampo le immagini con classe hide   
```
for (let i = 0; i < images.length; i++) {

  const image = images[i];
  
  imgWrapper.innerHTML += `
  <img class="item hide" src="${image}">
  `;
  
}
```
.
## **MILESTONE 3**
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
- attraverso l'eventlistener al click aggiungeremo la classe hide al primo elemento  img  per poi aumentare il counter e rimuovere la classe hide all'img successiva 
```
const items = document.getElementsByClassName('item');
items[counter].classList.remove('hide');
console.log(items);

btnUP.addEventListener('click', function(){

  items[counter].classList.add('hide');
  console.log(items);
  counter++;

  items[counter].classList.remove('hide');

});
```
.
