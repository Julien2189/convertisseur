const euro = document.getElementById('inputEuro');
const usd = document.getElementById('inputUsd');

euro.addEventListener('input', async() => {
    let taux =  await  getExchange('EUR','USD');
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
    let taux = await getExchange('EUR','USD');
    let montantValeur = parseFloat(usd.value);
    let tauxEuro  = montantValeur / taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        euro.value = tauxEuro.toFixed(2);
    }
    else{
        euro.value = "";
    }
   
});
const gbp = document.getElementById('inputGbp');
const usdGbp = document.getElementById('inputUsdGbp');

gbp.addEventListener('input', async() => {
    let taux =  await  getExchange('GBP','USD');
    let montantValeur = parseFloat(gbp.value);
    let tauxUsd = montantValeur * taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        usdGbp.value = tauxUsd.toFixed(2);
    }
    else{
        usdGbp.value = "";
    }
  });
usdGbp.addEventListener('input' , async() => {
    let taux = await getExchange('GBP','USD');
    let montantValeur = parseFloat(usdGbp.value);
    let tauxgbp  = montantValeur / taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        gbp.value = tauxgbp.toFixed(2);
    }
    else{
        gbp.value = "";
    }
   
});
const jpy = document.getElementById('inputJPY');
const usdJpy = document.getElementById('inputUsdJpy');

jpy.addEventListener('input', async() => {
    let taux =  await  getExchange('JPY','USD');
    let montantValeur = parseFloat(jpy.value);
    let tauxUsd = montantValeur / taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        usdJpy.value = tauxUsd.toFixed(2);
    }
    else{
        usdJpy.value = "";
    }
  });
usdJpy.addEventListener('input', async() => {
    let taux =  await  getExchange('USD','JPY');
    let montantValeur = parseFloat(usdJpy.value);
    let tauxUsd = montantValeur * taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        jpy.value = tauxUsd.toFixed(2);
    }
    else{
        jpy.value = "";
    }
  });

const euroChf = document.getElementById('inputEuroChf');
const chf = document.getElementById('inputChf');

euroChf.addEventListener('input', async() => {
    let taux =  await  getExchange('EUR','CHF');
    let montantValeur = parseFloat(euroChf.value);
    let tauxChf = montantValeur * taux ;
    if(!isNaN(montantValeur)){
        chf.value = tauxChf.toFixed(2);
    }
    else{
        chf.value = "";
    }
  });

chf.addEventListener('input' , async() => {
    let taux = await getExchange('EUR','CHF');
    let montantValeur = parseFloat(chf.value);
    let tauxEuroChf  = montantValeur / taux ;
    console.log(taux);
    if(!isNaN(montantValeur)){
        euroChf.value = tauxEuroChf.toFixed(2);
    }
    else{
        euroChf.value = "";
    }
   
});


async function getExchange(from , to) {
    try {
        const reponse = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await reponse.json();
        return data.rates[to];
    } catch (error) {
        console.error(`Erreur lors de la récupération du taux ${from} -> ${to} :`, error);
        return 0; 
    }
}
async function updateExchange(from, to, elementId) {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await response.json();
        const rate = data.rates[to];
        document.getElementById(elementId).textContent = rate.toLocaleString();
    } catch (error) {
        console.error(`Erreur lors de la récupération du taux ${from} -> ${to} :`, error);
    }
}

function startExchangeUpdates() {
    updateExchange('EUR', 'USD', 'usd-price');
    updateExchange('GBP', 'USD', 'gbp-price');
  updateExchange('JPY', 'USD', 'jpy-price');
  updateExchange( 'EURO', 'CHF' ,'chf-price') ;
    setInterval(() => getExchange('EUR', 'USD', 'usd-price'), 1000);
    setInterval(() => getExchange('GBP', 'USD', 'gbp-price'), 1000);
    setInterval(() => updateExchange('USD', 'JPY', 'jpy-price'), 1000);
    setInterval(() => updateExchange('EURO' , 'CHF', 'chf-price'),1000 );

}

startExchangeUpdates();
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */function closeNav() {
  sidenav.classList.remove("active");
}
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('Lien cliqué :', link.href); 
    });
});
