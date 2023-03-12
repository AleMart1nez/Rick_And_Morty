import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.jsx";
import styles from "../Favorites/Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions.js";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export function Favorites({ allCharacters, characters }) {
  const options = ["Male", "Female", "Unknown", "Genderless"];
  const [all, setAll] = useState(true);
  // eslint-disable-next-line
  const [order, setOrder] = useState("asc");

  const dispatch = useDispatch();

  const favoritos = useSelector((state) => state.myFavorites);

  useEffect(() => {});

  const handleOrderchange = (e) => {
    setOrder(e.target.value);
    dispatch(orderCards(e.target.value));
  };

  const handleChange = (e) => {
    if (e.target.value === "mostrar") {
      setAll(true);
    } else {
      setAll(false);

      dispatch(filterCards(e.target.value));
    }
  };

  return (
    <div>
      <div className={styles.contenedorSelect}>
        <p>Filtrar y Ordenar Personajes</p>

        <div className={styles.select}>
          <FormControl className={styles.form} sx={{ m: 1, minWidth: 150 }}>
            <InputLabel>Ordenar</InputLabel>
            <Select
              onChange={handleOrderchange}
              color="primary"
              variant="outlined"
              name=""
              id=""
            >
              <MenuItem
                value="asc"
                focused
                sx={{ input: { color: "whitesmoke" } }}
              >
                Asendente
              </MenuItem>
              <MenuItem value="desc">Desendente</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={styles.form} sx={{ m: 1, minWidth: 150 }}>
            <InputLabel>Filtrar por</InputLabel>

            <Select onChange={handleChange} name="" id="">
              <MenuItem value="mostrar">Mostrar todos</MenuItem>
              {options.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={styles.favorites}>
        {all
          ? allCharacters.map((e, i) => (
              <Card
                characters={characters}
                key={i}
                id={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            ))
          : favoritos.map((e, i) => (
              <Card
                characters={characters}
                key={i}
                id={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
              />
            ))}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps)(Favorites);
