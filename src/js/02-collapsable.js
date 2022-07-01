'use strict';

const handleClick = (ev) => {
  const elementClick = ev.currentTarget;
  if (elementClick.classList.contains('js__design')){
    sectionDesign.classList.toggle('hidden');
    arrowDesign.classList.toggle('arrow-translate');
    sectionFill.classList.add('hidden');
    contentShareOne.classList.add('hidden');
  }
 else if (elementClick.classList.contains ('js__fill')){sectionFill.classList.toggle('hidden');
  arrowFill.classList.toggle('arrow-translate');
  sectionDesign.classList.add('hidden');
  contentShareOne.classList.add('hidden');
}

else if (elementClick.classList.contains ('js__share')){ contentShareOne.classList.toggle('hidden');
  arrowShare.classList.toggle('arrow-translate');
  sectionFill.classList.add('hidden');
  sectionDesign.classList.add('hidden');
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