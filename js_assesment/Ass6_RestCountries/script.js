let country1=document.getElementById('country1')
let country2=document.getElementById('country2')
let key=" 9b780e7e6281faafac737d70";
let exchange=document.getElementById('exchange');
let info=document.getElementById('info');
let amount=document.getElementById('amount');

function fetchCountry(){
    fetch("https://restcountries.com/v3.1/all?fields=name,currencies").then(res=> res.json())
    .then(data => {
        let html='';
        data.forEach(element => {
            html+=`<option value="${Object.keys(element.currencies)[0]}">${element.name.common}-${Object.keys(element.currencies)[0]} </option>`
        });
        country1.innerHTML=html
        country2.innerHTML=html
    })
}
fetchCountry();


function exchangeRate(){

    fetch(`https://v6.exchangerate-api.com/v6/9b780e7e6281faafac737d70/latest/${country1.value}`).then(res=> res.json())
    .then(data => {
        let contries=Object.keys(data.conversion_rates);
        console.log(data.conversion_rates)
        let c2=country2.value;
        console.log(c2)
        if(contries.includes(`${country2.value}`)){
            let rate=data.conversion_rates[`${country2.value}`];
            let total=rate* Number(amount.value);
            info.innerText=`${amount.value} ${country1.value} = ${total} ${country2.value}`;
        }
    });
}

exchange.addEventListener('click',exchangeRate); 
