import estilo from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={estilo.head__search}> 
         <input type='search' className={estilo.head__contentInput} value={character} onChange={handleChange}/>
         <button onClick={() => onSearch(character)} className={estilo.head__contentButton}>Agregar</button>
      </div>
   );
}

export default SearchBar;