const axios = require('axios');

module.exports = {
    async pokeInformations(pokemon) {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

            const response = await axios.get(url)
            let data = (response.data);
            return this.pokemonBigData(data);
        }
        catch (err) {

            return err.response.data
        }
    },


    pokemonBigData(poke) {

        const pokeNumber = poke.id;
        const pokeWeight = (poke.weight / 10);
        const pokeHeight = (poke.height / 10);
        const pokeImage = poke.sprites.other.dream_world.front_default;

        let pokeTypes = '';
        const listOfTypes = poke.types.forEach(item => {
            pokeTypes += " " + item.type.name;
        });
        pokeTypes = pokeTypes.trim();

        let pokeAbilities = '';
        const listOfAbilities = poke.abilities.forEach(item => {
            pokeAbilities += " " + item.ability.name;
        });
        pokeAbilities = pokeAbilities.trim();

        informations = {
            "pokeNumber": pokeNumber,
            "pokeWeight": pokeWeight,
            "pokeHeight": pokeHeight,
            "pokeImage": pokeImage,
            "pokeTypes": pokeTypes,
            "pokeAbilities": pokeAbilities
        }

        return informations;
    }
};