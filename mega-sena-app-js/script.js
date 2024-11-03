const betNumbers = document.getElementById('bet-numbers')
const listOfPlayersBet = document.getElementById('player-bets')
const number = document.getElementById('numbers-to-add')
const prizeDraw = document.getElementById('mega-sena-results')



window.onload = function(){
    number.value = getRandomBet()
    comparePrizeDraw()
}

betNumbers.addEventListener('submit', (e) => {
    e.preventDefault()
    /** @type {HTMLInputElement} */
    let arrayBet = number.value.split(',')
    if (arrayBet.length < 6) return

    arrayBet.sort()
    createNewBet(arrayBet)
    number.value = getRandomBet()
})


function createNewBet(arrayBet) {
    let trElement = document.createElement('tr')
    listOfPlayersBet.appendChild(trElement)
    for (let i = 0; i < arrayBet.length; i++) {
        let tdElement = document.createElement('td')
        let spanElement = document.createElement('span')
       
        if(comparePrizeDraw(arrayBet[i])){
            spanElement.setAttribute('class', 'circle')
        }else{
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

function getRandomInt(){
    const minCeiled = Math.ceil(1)
    const maxFloored = Math.floor(61)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomBet(){
    return `${getRandomInt()},${getRandomInt()},${getRandomInt()},${getRandomInt()},${getRandomInt()},${getRandomInt()}`
}

function comparePrizeDraw(betNumber){
    let numberOfPrizeDraw = prizeDraw.firstElementChild.getElementsByTagName('span')
    let sameNumber = false
    for (let i = 0; i < numberOfPrizeDraw.length; i++) {
        if(numberOfPrizeDraw[i].innerHTML === betNumber){
            sameNumber = true
            break
        }
    }
    return sameNumber
}