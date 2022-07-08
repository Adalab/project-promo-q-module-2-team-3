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

//Palettes

/*const paletteArray = [
    ['#114e4e', '#438792', '#a2deaf'],
    ['#420101', '#BD1010', '#E95626'],
    ['#3E5B65', '#EAB052', '#A0C0CF'],
];*/

function handlePalette (event) {
    const palette1 = palette1.target;
    if(event.target === palette1){
        iconPreview.classList.add(p1_adalab-dark);
        //add 3 y remove 6 para 3 paletas :(
    };

}


palette.addEventListener('click', handlePalette);



