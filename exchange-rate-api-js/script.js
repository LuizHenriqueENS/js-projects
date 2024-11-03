const myKey = '6b6e750ad7e1c72265e23581'
const exchangeData = `https://v6.exchangerate-api.com/v6/${myKey}/latest/USD`
const currencyValue = document.getElementById('currencyValue')
const convertedValue = document.getElementById('convertedValue')
const dateSpan = document.getElementById('date')
todayDate()


let brlFormat = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

function getExchangeRate() {
    return fetch(exchangeData)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.statusText)
            }
            return response.json()
        })
        .then(data => {
            return data.conversion_rates.BRL
        })
        .catch(error => {
            console.error('Error ', error)
        })
}

currencyValue.addEventListener("keyup", () => {

    let limitedValue = currencyValue.value;
    if (currencyValue.value.length > 10) {
        currencyValue.value = limitedValue.substring(0, 10)
        return
    }
    // convertedValue.innerHTML = currencyValue.value
    getExchangeRate().then(exchangeValue => {
        convertedValue.innerHTML = brlFormat.format(currencyValue.value * exchangeValue)
    })

})

function todayDate() {
    let date = new Date()
    dateSpan.innerHTML = date.toLocaleTimeString('pt-BR')
}

setInterval(() => {
    todayDate()
}, 1000);