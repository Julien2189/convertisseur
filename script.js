const euro = document.getElementById('inputEuro');
const usd = document.getElementById('inputUsd');
euro.addEventListener('input', async() => {
    let taux =  await geteurotoDollar();
    let montantValeur = parseFloat(euro.value);
    let tauxUsd = montantValeur * taux ;
    if(!isNaN(montantValeur)){
        usd.value = tauxUsd.toFixed(2);
    }
    else{
        usd.value = "";
    }
  });
usd.addEventListener('input' , async() => {
    let taux = await geteurotoDollar();
    let montantValeur = parseFloat(usd.value);
    let tauxEuro  = montantValeur / taux ;
    if(!isNaN(montantValeur)){
        euro.value = tauxEuro.toFixed(2);
    }
    else{
        euro.value = "";
    }
   
});

  async function geteurotoDollar() {
    try {
        const reponse = await fetch('https://open.er-api.com/v6/latest/EUR');
        const data = await reponse.json();
        return data.rates.USD;
    } catch (error) {
        console.error('Erreur lors de la récupération du taux :', error);
        return 0; // valeur par défaut si erreur
    }
}

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

