'use strict';

const titleDesign = document.querySelector ('.js__design');
const sectionDesign = ('.js-sectionDesign');
const sectionFill = document.querySelector('.js-sectionFill');
const contentShareOne = document.querySelector('.js__content_shareOne');



const handleClick = (ev) => {
  const elementClick = ev.currentTarget;
  if (elementClick.classList.contains('js__design')){
    sectionDesign.classList.toggle('hidden');}
  else if (elementClick.classList.contains ('js__fill')){
    sectionFill.classList.toggle('hidden');}
  else if (elementClick.classList.contains ('js__share')){
    contentShareOne.classList.toggle('hidden');}
};
titleDesign.addEventListener ('click',handleClick);
console.log("hola");


