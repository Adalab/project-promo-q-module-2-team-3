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

function previewCard() {
    
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
    
    previewCard();
}





allInputs.addEventListener('keyup', handleInput);



