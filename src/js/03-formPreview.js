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
    namePreview.innerHTML=data.name;
    positionPreview.innerHTML = data.job;
    linkPhone.href = data.phone;
    linkLinkedin.href = data.linkedin;
    linkGithub.href = data.github;

};


const handleInput = (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    data[nameInput] = valueInput;
    
    previewCard();
   

};



allInputs.addEventListener('keyup', handleInput);


/*function handleInput(){
namePreview.innerHTML=data.name;
let valueName = inputName.value;
data.name= valueName;
};

inputName.addEventListener('keyup', handleInput);

function handleInput(){
    namePreview.innerHTML=data.name;
    let valueName = inputName.value;
    data.name= valueName;
    };
    
    inputName.addEventListener('keyup', handleInput);



function handleInput(){
    positionPreview.innerHTML=data.job;
    let valuePosition = inputPosition.value;
    data.job= valuePosition;
        };
        
    inputPosition.addEventListener('keyup', handleInput);
        
        
function handleInput(){
    namePreview.innerHTML=data.name;
    let valueName = inputName.value;
    data.name= valueName;
    };
            
    inputName.addEventListener('keyup', handleInput);
            
            
            
function handleInput(){
    namePreview.innerHTML=data.name;
     let valueName = inputName.value;
    data.name= valueName;
                };
                
     inputName.addEventListener('keyup', handleInput);


function handleInput(){
    namePreview.innerHTML=data.name;
    let valueName = inputName.value;
     data.name= valueName;
                    };
                    
    inputName.addEventListener('keyup', handleInput);
                    
    
    
function handleInput(){
    namePreview.innerHTML=data.name;
    let valueName = inputName.value;
 data.name= valueName;
                        };
                        
 inputName.addEventListener('keyup', handleInput);*/
                                                                                    





