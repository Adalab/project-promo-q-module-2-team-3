'use strict';


const handleClick = (ev) => {
  const elementClick = ev.currentTarget;
  if (elementClick.classList.contains('js__design')){
    sectionDesign.classList.toggle('hidden');
    arrowDesign.classList.toggle('arrow-translate');
    sectionFill.classList.add('hidden');
    contentShareOne.classList.add('hidden');
    arrowFill.classList.add('arrow-translate');
    arrowShare.classList.add('arrow-translate');
  }
 else if (elementClick.classList.contains ('js__fill')){sectionFill.classList.toggle('hidden');
  arrowFill.classList.toggle('arrow-translate');
  sectionDesign.classList.add('hidden');
  contentShareOne.classList.add('hidden');
  arrowDesign.classList.add('arrow-translate');
  arrowShare.classList.add('arrow-translate');
}

else if (elementClick.classList.contains ('js__share')){ contentShareOne.classList.toggle('hidden');
  arrowShare.classList.toggle('arrow-translate');
  sectionFill.classList.add('hidden');
  sectionDesign.classList.add('hidden');
  arrowFill.classList.add('arrow-translate');
  arrowDesign.classList.add('arrow-translate');
}
};

titleDesign.addEventListener ('click',handleClick);
titleFill.addEventListener ('click',handleClick);
titleShare.addEventListener ('click',handleClick);


//lo de twitter y comparte

const handleClickBtn = (ev) => {
 ev.preventDefault();
 contentShareTwo.classList.remove('hidden')
 btnShare.classList.add('btn-share-grey');
};

btnShare.addEventListener ('click',handleClickBtn);