'use strict';

const data = {
    palette: 1, /*revisar*/
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
};

const linkPhone = document.querySelector('.js_link_phone');
const linkEmail = document.querySelector('.js_link_email');
const linkLinkedin= document.querySelector('.js_link_linkedin');
const linkGithub = document.querySelector('.js_link_github');

//esta es la de arreglar las url
function previewCard(data) {
    
    if (data.name === '') { namePreview.innerHTML='Nombre Apellido'}
    else {namePreview.innerHTML=data.name};

    positionPreview.innerHTML = data.job;
    if (data.job === '') { positionPreview.innerHTML='Front-end developer'}
    else {positionPreview.innerHTML=data.job};

    linkPhone.href = data.phone;
    linkLinkedin.href = `https://www.${data.linkedin}`;
    
    linkGithub.href = `https://github.com/${data.github.slice(1)}`;
   

};


const handleInput = (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    data[nameInput] = valueInput;
    
    previewCard(data);
}






allInputs.addEventListener('keyup', handleInput);




const paintPalette = (palette) =>{
    cardContainer.classList.remove('palette1', 'palette2', 'palette3');
    cardContainer.classList.add(`palette${palette}`);
};




const handleRadio = (ev) => {
    const palette = parseInt(ev.currentTarget.value); 
    data.palette = palette;
    paintPalette(palette);
};




for( const oneRadio of allRadio){
    oneRadio.addEventListener('click', handleRadio);
};






// boton de reset

const clearPreview= ()=>{

    data.palette= 1;
   data.name= '';
   data.job= '';
   data.phone= '';
   data.email= '';
   data.linkedin= '';
   data.github= '';
   data.photo= '';

   cardContainer.classList.add('palette1');
   cardContainer.classList.remove('palette2');
   cardContainer.classList.remove('palette3');
   
};

const clearInput = () => {
    inputName.value = "";
 inputPosition.value = "";
 inputEmail.value = "";
 inputPhone.value = "";
 inputLinkedin.value = "";
 inputGithub.value = "";
 profileImage.style.backgroundImage = `url()`;
 profilePreview.style.backgroundImage = `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTil9_c3PpcUTAx2vmHH6srdREmI1X8474m3Q&usqp=CAU")`;


};


const handleReset = (event)=>{
    event.preventDefault();
    clearPreview();
    clearInput();
     previewCard(data);
};

btnPreview.addEventListener('click', handleReset);


console.log(data);

//Publicar en twitter

