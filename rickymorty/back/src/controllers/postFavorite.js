const  favs  = require('../utils/favs');

const postFavorite = (req, res) => {
    const { id, image, name, gender, species } = req.body

    if (id && image && name && gender && species) {
        const check = favs.filter((item) => item.id === Number(id))
        if (check.length > 0) {
            return res.status(400).send('This id dont exists')
        }
        let personaje = {
            id: id,
            image: image,
            name: name,
            gender: gender,
            species: species
        }
        favs.push(personaje)
        return res.status(200).send(favs)
    }
    return res.status(400).send('Problem with character')
}

module.exports = postFavorite

