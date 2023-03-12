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
      fetch(`http://localhost:3001/detail/${detailId}`)
        .then((response) => response.json())
        .then((character) => {
          if (character.name) {
            setCharacter(character);
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
          <h2 className={estilo.about}>{character?.status}</h2>
          <h2 className={estilo.about}>{character?.species}</h2>
          <h2 className={estilo.about}>{character?.gender}</h2>
          <h2 className={estilo.about}>{character?.origin?.name}</h2>
      </div>
  )
}

export default Detail;