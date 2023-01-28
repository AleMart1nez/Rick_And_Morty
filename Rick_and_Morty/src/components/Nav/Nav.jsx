import SearchBar from '../SearchBar/SearchBar.jsx'
import estilo from './Nav.module.css';
import bootstrap_logo from "../../bootstrap_logo.svg";
import icono from "../../icon/icon.png"
import { Link } from "react-router-dom";

const Nav = ({ onSearch, handleRandomPersonaje }) => {
    return (
        <nav className={estilo.head__content}>
            <img src={icono} alt="Rick_and_Morty" width="100" height="100"/>

            <div className={estilo.head__group}>
                <button className={estilo.head__contentButton} onClick={handleRandomPersonaje}>
                    <img src={bootstrap_logo} alt="Random_Icon"/><i>Random</i>
                </button>
                <SearchBar onSearch={onSearch} />
                <Link to="/favorites" className={estilo.link}>Favoritos</Link>
                <Link to='/about' className={estilo.link}>About</Link>
                <Link to='/home' className={estilo.link}>Home</Link>
            </div>
        </nav>
    );
}

export default Nav;