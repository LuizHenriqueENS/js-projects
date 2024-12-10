import Pokemon from "./pokemon.js"

let pokemonArray = []
const pokemonContainer = document.getElementById('pokemon-container')
const pokemonQuantity = 18
const rightButton = document.getElementById('right-button')
const leftButton = document.getElementById('left-button')
const pokemonPageInput = document.getElementById('pokemon-page')
let pokemonShowLimit = 1010
let offset = 1010
let minOffset = pokemonQuantity
// rightButton.addEventListener('click', () => {
//     ChangePokemonPage(true)
// })
// leftButton.addEventListener('click', () => {
//     ChangePokemonPage(false)
// })

pokemonPageInput.addEventListener('change', () => {
    if (pokemonPageInput.value <= 0) {
        pokemonPageInput.value = 1

    }

    if (pokemonPageInput.value >= 57) {
        pokemonPageInput.value = 57
    }
    offset = pokemonPageInput.value * minOffset

    ChangePokemonPage()
})

async function ChangePokemonPage(nextPage) {
    if (nextPage) {
        if (pokemonPageInput.value === 57) return
        offset = offset + minOffset
    } else {
        if (offset === 0) return
        offset = offset - minOffset
    }

    while (pokemonContainer.firstChild) {
        pokemonContainer.firstChild.remove()
    }
    pokemonArray = []
    createAndListPokemon()
}

window.onload = async function () {
    pokemonPageInput.value = 1
    await populateArrayWithPokemonInfo().then(async (data) => {
        for (let i = 0; i < pokemonShowLimit; i++) {
            const newPokemon = await Pokemon.create(data.results[i].name, (pokemonArray.length + 1))
            pokemonArray.push(newPokemon)
        }
    })
    console.log(pokemonShowLimit[0])
}

async function createAndListPokemon() {
    await getAllPokemon().then(async (d) => {
        for (let i = 0; i < pokemonQuantity; i++) {
            const newPokemon = await Pokemon.create(d.results[i].name, (pokemonArray.length + 1 + offset))
            pokemonArray.push(newPokemon)
        }
    })

    for (let i = 0; i < pokemonQuantity; i++) {
        createCard(pokemonArray[i].sprite, pokemonArray[i].name, pokemonArray[i].id)
    }
}

async function populateArrayWithPokemonInfo() {
    let endPoint = '' 
    if (pokemonArray.length >= 14) {
        endPoint = `https://pokeapi.co/api/v2/pokemon?limit=1010?offset=15`
    } else {
        endPoint = `https://pokeapi.co/api/v2/pokemon?limit=15`
    }

    try {
        const response = await fetch(endPoint)
        if (!response.ok) {
            throw new Error('Erro na rede: ' + response.statusText)
        }
        return await response.json()


    } catch (error) {
        console.error('Error ', error)
    }

}

async function getAllPokemon() {
    const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=${minOffset}&offset=${offset}`

    try {
        const response = await fetch(endPoint)
        if (!response.ok) {
            throw new Error('Erro na rede: ' + response.statusText)
        }
        return await response.json()


    } catch (error) {
        console.error('Error ', error)
    }
}

function createCard(sprite, pokemonName, pokemonId) {

    if (sprite === '') return

    const divElement = document.createElement('div')
    divElement.setAttribute('class', 'card')
    pokemonContainer.appendChild(divElement)

    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', sprite)
    divElement.appendChild(imgElement)

    const divContainerElement = document.createElement('div')
    divContainerElement.setAttribute('class', 'container')
    divElement.appendChild(divContainerElement)

    const h4Element = document.createElement('h4')
    divContainerElement.appendChild(h4Element)

    const bElement = document.createElement('b')
    h4Element.appendChild(bElement)
    bElement.innerHTML = `#${pokemonId} ${pokemonName}`

    const pElement = document.createElement('p')
    divContainerElement.appendChild(pElement)
    pElement.innerHTML = ''
}
