class Pokemon {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
        this.sprite = ''
    }



    async getPokemonSprite() {
        try {
            const response = await fetch(this.baseUrl)
            if (!response.ok) {
                throw new Error('Erro na rede ', response.statusText)
            }
            const data = await response.json()
            this.sprite = data.sprites.front_default
        } catch (error) {
            console.error('Error ', error)
        }
    }

    static async create(name, id){
        const pokemon = new Pokemon(name, id)
        await pokemon.getPokemonSprite()
        return pokemon
    }
}

export default Pokemon