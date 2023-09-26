let country1 = document.getElementById("country1");
let country2 = document.getElementById("country2");
let key = " 9b780e7e6281faafac737d70";
let exchange = document.getElementById("exchange");
let info = document.getElementById("info");
let amount = document.getElementById("amount");

function fetchCountry() {
  fetch("https://restcountries.com/v3.1/all?fields=name,currencies")
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      //   console.log(res.ok);
      return res.json();
    })
    .then((data) => {
      let html = "";
      data.forEach((element) => {
        if (Object.keys(element.currencies)[0]) {
          html += `<option value="${Object.keys(element.currencies)[0]}">${
            element.name.common
          }-${Object.keys(element.currencies)[0]} </option>`;
        }
      });
      country1.innerHTML = html;
      country2.innerHTML = html;
    })
    .catch((err) => console.log(err.message));
}
fetchCountry();

let currency = [];

function store(key) {
  if (currency.length < 10) {
    currency.push(key);
  } else {
    sessionStorage.removeItem(currency[0]);
    currency.shift();
    currency.push(key);
  }
}

function exchangeRate() {
  if (amount.value == "") {
    info.innerText = "Enter Amount First!";
    info.style.color = "red";
    exchange.disabled = true;
    return;
  } else if (amount.value) {
    info.style.color = "black";
    exchange.disabled = false;
  }

  if (currency.includes(`${country1.value}`)) {
    let obj = JSON.parse(sessionStorage.getItem(`${country1.value}`));
    let CVal1 = country2.value;
    let cov1 = obj[CVal1];
  } else {
    fetch(
      `https://v6.exchangerate-api.com/v6/9b780e7e6281faafac737d70/latest/${country1.value}`
    )
      .then((res) => {
        if (!res.ok) {
          exchange.disabled = true;
          throw new Error(`Error Fetching Currency: ${res.status}`);
        } else if (res.ok) {
          exchange.disabled = true;
        }
        return res.json();
      })
      .then((data) => {
        console.log("4");
        let contries = Object.keys(data.conversion_rates);
        if (contries.includes(`${country2.value}`)) {
          let rate = data.conversion_rates[`${country2.value}`];
          let total = rate * Number(amount.value);
          info.innerText = `${amount.value} ${country1.value} = ${total} ${country2.value}`;
        }
      })
      .catch((err) => {
        info.innerText = err.message;
        info.style.color = "red";
      });
  }
}

exchange.addEventListener("click", exchangeRate);

function disable() {
  if (amount.value == "") {
    exchange.disabled = true;
  }
  exchange.disabled = false;
}
country1.addEventListener("click", disable);
country2.addEventListener("click", disable);
amount.addEventListener("click", disable);
