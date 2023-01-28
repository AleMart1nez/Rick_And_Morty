import React from "react";
import estilo from "../Detail/Detail.module.css"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";

const Detail = () => {
  const {detailId} = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
    }, [detailId]);

  return(
      <div>
          <h2 className={estilo.title}>Detail</h2>
          <section className={estilo.img}>
          <img src={character?.image} alt={character.name}/>
          </section>
          <h1 className={estilo.about}>{character?.name}</h1>
          <p className={estilo.about}>{character?.status}</p>
          <p className={estilo.about}>{character?.specie}</p>
          <p className={estilo.about}>{character?.gender}</p>
          <p className={estilo.about}>{character?.origin?.name}</p>
      </div>
  )
}

export default Detail;