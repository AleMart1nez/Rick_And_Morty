const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        const getCharFromApi = await axios(`${url}${id}`)
        const dataCharFromApi = getCharFromApi.data
            let character = {
                id: dataCharFromApi.id,
                image: dataCharFromApi.image,
                name: dataCharFromApi.name,
                gender: dataCharFromApi.gender,
                species: dataCharFromApi.species
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById;