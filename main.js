const api = `https://api.covid19api.com/summary`;
function reload() {
    fetch(`${api}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    allInfo(data);
})
}

function allInfo(data) {
    document.getElementById('newConfirmed').innerText = data.Global.NewConfirmed;
    document.getElementById('newDeath').innerText = data.Global.NewDeaths;
    document.getElementById('newRecovered').innerText = data.Global.NewRecovered;
    document.getElementById('totalConfirmed').innerText = data.Global.TotalConfirmed;
    document.getElementById('totalDeath').innerText = data.Global.TotalDeaths;
    document.getElementById('totalRecovered').innerText = data.Global.TotalRecovered;

    document.getElementById('newConfirmedBd').innerText = data.Countries[13].NewConfirmed;
    document.getElementById('newDeathBd').innerText = data.Countries[13].NewDeaths;
    document.getElementById('newRecoveredBd').innerText = data.Countries[13].NewRecovered;
    document.getElementById('newConfirmedBd').innerText = data.Countries[13].NewConfirmed;
    document.getElementById('totalDeathBd').innerText = data.Countries[13].TotalDeaths;
    document.getElementById('totalRecoveredBd').innerText = data.Countries[13].TotalRecovered;
}

// fetch('https://api.covid19api.com/summary')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })