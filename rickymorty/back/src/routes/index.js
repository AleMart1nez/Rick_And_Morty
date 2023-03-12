const { Router } = require("express");

const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFavorite = require('../controllers/getFavorite');
const postFavorite = require('../controllers/postFavorite');
const deleteFavorite = require('../controllers/deleteFavorite');

const getAllChars = require('../controllers/getAllCharacters');

const router = Router();

router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/rickandmorty/fav", getFavorite);
router.post("/rickandmorty/fav", postFavorite);
router.delete("/rickandmorty/fav/:id", deleteFavorite);

router.get("/allCharacters", getAllCharacters);


module.exports = { router };