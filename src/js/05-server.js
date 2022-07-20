'use strict';

//lo de comparte

function shareCard () {
    data.github = data.github.slice(1);
    data.linkedin = data.linkedin.slice(16);
  

    fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
        'content-type': 'application/json'
      },
    body: JSON.stringify(data),
    })
    .then( response => response.json())
    .then((serverResp)=> {if (serverResp.success){
        sectionUrl.innerHTML = serverResp.cardURL;
        sectionUrl.href = serverResp.cardURL;
        console.log(serverResp);
        linkTwitter.href=`https://twitter.com/intent/tweet?text=%C2%A1I%20have%20done%20my%20contact%20card!&url=${sectionUrl.href}`;
        localStorage.setItem("cardStoraged", JSON.stringify(serverResp.cardURL));

    }else{
        messageCard.innerHTML = '';
        messageCard.innerHTML = 'Debe rellenar todos los campos';
        //función que resetee el botón
    }

})
};

//twitter



//funcion para localStorage: cuando vaya a compartir guardamos los datos





const handleClickBtn = (ev) => {
    ev.preventDefault();
    contentShareTwo.classList.remove('hidden')
    btnShare.classList.add('btn-share-grey');
    shareCard();
   };

   btnShare.addEventListener ('click',handleClickBtn);