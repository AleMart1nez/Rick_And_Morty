const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const getCharFromApi = await axios(`${url}${id}`)
        const detailCharFromApi = getCharFromApi.data
            let character = {
                id: detailCharFromApi.id,
                image: detailCharFromApi.image,
                status: detailCharFromApi.status,
                name: detailCharFromApi.name,
                gender: detailCharFromApi.gender,
                species: detailCharFromApi.species,
                origin: detailCharFromApi.origin
            }
            res.status(200).json(character);
        }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = getCharDetail;