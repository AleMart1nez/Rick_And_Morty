import './App.css';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';

import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from "./components/Favorites/Favorites.jsx";
// eslint-disable-next-line
import SearchBar from './components/SearchBar/SearchBar';

function App () {
  const [access, setAccess] = useState(true);
  const [error, setError] = useState(false);

  const [buscador, setBuscador] = useState("");
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
  ]);
 
  const username = "admin";
  const password = "1234";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      setError('Error al ingresar contraseña o usuario.')
    }
  }
  
  function onSearch(character) {
    const dup = characters.some((char) => char.id == buscador);

    if (dup) return window.alert("Ya existe éste personaje");

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {

          setCharacters((oldChars) => [...oldChars, data]);
          console.log(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }


  useEffect(() => {
    !access && navigate("/");
  }, );


  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  const handleRandomPersonaje = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const random = Math.floor(Math.random() * data.results.length);
      setCharacters((oldChars) => [...oldChars, data.results[random]]);
    });
  }


  const location = useLocation();

  return (
    <div>
      <header className="head" path="/">
        <div className='container'>
          {location.pathname !== "/" && (
          <Nav onSearch={onSearch} handleRandomPersonaje={handleRandomPersonaje} buscador={buscador} setBuscador={setBuscador}/>
          )}
        </div>
      </header>
      
      <Routes>
           <Route path="/" element={<Form login={login} error={error} />} />
           <Route path='/detail/:detailId' element={<Detail/>}/>
           <Route path='/home' element={<Cards characters={characters} onClose={onClose} setBuscador={setBuscador} onSearch={onSearch} buscador={buscador} />} />
           <Route path='/about' element={<About/>}/>
           <Route path="/favorites" element={<Favorites characters={characters} />} />
      </Routes>
    </div>
  )
}

export default App
