const betNumbers = document.getElementById('bet-numbers')
const listOfPlayersBet = document.getElementById('player-bets')
const number = document.getElementById('numbers-to-add')
const prizeDraw = document.getElementById('mega-sena-results')



window.onload = function () {
    getMegaSenaLastPrizeDraw().then(result => {
        let megaSenaResult = result.listaDezenas
        document.getElementById('result-1').innerHTML = megaSenaResult[0] 
        document.getElementById('result-2').innerHTML = megaSenaResult[1]
        document.getElementById('result-3').innerHTML = megaSenaResult[2]
        document.getElementById('result-4').innerHTML = megaSenaResult[3]
        document.getElementById('result-5').innerHTML = megaSenaResult[4]
        document.getElementById('result-6').innerHTML = megaSenaResult[5]

        document.getElementById('apuracao').innerHTML = `Apuração: ${result.dataApuracao}` 
        document.getElementById('data-sorteio').innerHTML = `Próximo sorteio: ${result.dataProximoConcurso}` 
    })
}

betNumbers.addEventListener('submit', (e) => {
    e.preventDefault()
    /** @type {HTMLInputElement} */
    let arrayBet = number.value.split(',').sort((a, b) => {return a-b})
    if (arrayBet.length < 6) return

    createNewBet(arrayBet)
    number.value = getRandomBet()
})

function getMegaSenaLastPrizeDraw() {
    return fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede ' + response.statusText)
            }
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error', error)
        })
}


function createNewBet(arrayBet) {
    let trElement = document.createElement('tr')
    listOfPlayersBet.appendChild(trElement)
    for (let i = 0; i < arrayBet.length; i++) {
        let tdElement = document.createElement('td')
        let spanElement = document.createElement('span')

        if (comparePrizeDraw(arrayBet[i])) {
            spanElement.setAttribute('class', 'circle')
        } else {
            spanElement.setAttribute('class', 'bet-circle')
        }
        spanElement.innerHTML = arrayBet[i]
        tdElement.appendChild(spanElement)
        trElement.appendChild(tdElement)
    }
    createRemoveOption(trElement)
}

function createRemoveOption(trElement) {
    let tdElement = document.createElement('td')
    let spanElement = document.createElement('span')
    spanElement.setAttribute('class', 'icon-circle')
    spanElement.setAttribute('onClick', 'removeBet(this.parentNode.parentNode)')
    let iElement = document.createElement('i')
    iElement.setAttribute('class', "fa fa-solid fa-trash")
    spanElement.appendChild(iElement)
    tdElement.appendChild(spanElement)
    trElement.appendChild(tdElement)
}

function removeBet(trElement) {
    let removeElement = confirm('Deseja remover aposta?')
    if (removeElement) {
        trElement.remove()

    }
}

function getRandomInt() {
    const minCeiled = Math.ceil(1)
    const maxFloored = Math.floor(61)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomBet() {
    let arrayRandomNumber = []

    for (let i = 0; i < 6; i++) {
        let randomNumber = getRandomInt()
        let repeated = true

        while (repeated) {
            for (let j = 0; j < arrayRandomNumber.length; j++) {
                if (randomNumber === arrayRandomNumber[j]) {
                    randomNumber = getRandomInt()
                    break
                }
            }
            arrayRandomNumber.push(randomNumber)
            repeated  = false
        }
    }
    return arrayRandomNumber
}

function comparePrizeDraw(betNumber) {
    let numberOfPrizeDraw = prizeDraw.firstElementChild.getElementsByTagName('span')
    let sameNumber = false
    for (let i = 0; i < numberOfPrizeDraw.length; i++) {
        if (numberOfPrizeDraw[i].innerHTML === betNumber) {
            sameNumber = true
            break
        }
    }
    return sameNumber
}