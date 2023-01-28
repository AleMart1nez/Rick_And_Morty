/* eslint-disable no-unused-vars */
import estilo from './Card.module.css';
import { Link  } from "react-router-dom";
import { addCharacter, deleteCharacter } from "../../redux/actions.js";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card({
  agregar,
  eliminar,
  allCharacters,
  onClose,
  id,
  image,
  nombre,
  name,
  species,
  gender,
  characters,
}) {
const [isFav, setIsFav] = useState(false);
   const location = useLocation()


const handleFavorite = (e) => {
 const objFiltrado = characters.find((char) => char.id == e.target.value);

   if (isFav) {
    setIsFav(false);
  
      eliminar(objFiltrado);
   } else if (!isFav) {
      setIsFav(true);
      agregar(objFiltrado);
   }
};

useEffect(() => {
   allCharacters.forEach((fav) => {
      if (fav.id == id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line
  }, [allCharacters]);

   return (
      <div className={estilo.card}>
         <section className={estilo.card__head}>
          <Link to={`/detail/${id}`}><p className={estilo.card__headName}>{name}</p></Link>
          {isFav ? (
          <button
            className={estilo.card__headBoton}
            value={id}
            onClick={handleFavorite}
          >
            ❤️
          </button>
        ) : (
          <button
            className={estilo.card__headBoton}
            value={id}
            onClick={handleFavorite}
          >
            🤍
          </button>
        )}
          {location.pathname === '/home' ? (<button onClick={onClose} value={id} className={estilo.card__headBoton}>
          <FontAwesomeIcon icon= {faX}  />

        </button>) : null }
         </section>

         <section>
            <img  src={image} alt={name} className={estilo.card__peopleIMG}/>
         </section>

         <section className={estilo.card__info}>
            <p className={estilo.card__infoSpecies}>Species: {species}</p>
            <p className={estilo.card__infoGender}>Gender: {gender}</p>
         </section>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
     agregar: (id) => {
       dispatch(addCharacter(id));
     },
     eliminar: (id) => {
       dispatch(deleteCharacter(id));
     },
   };
 }
 
 export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
