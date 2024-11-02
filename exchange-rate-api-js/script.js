const api = 'https://v6.exchangerate-api.com/v6/6b6e750ad7e1c72265e23581/pair/USD/BRL'

getExchangeRate()

function getExchangeRate(){
    fetch(api)
    .then(response =>{
        if(!response.ok){
            throw new Error ('Erro na rede: ' + response.statusText)
        }
        return response.json()
    })
    .then(data =>{
        console.log(data.conversion_rate)

    })
    .catch(error =>{
        console.error('Error ', error)
    })
}