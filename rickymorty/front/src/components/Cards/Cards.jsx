import Card from '../Card/Card';
import estilo from "./Cards.module.css";

export default function Cards(props) {
const { characters, onClose } = props;
   return <div className={estilo.cards}>
      {
         characters.map((e,i) => (
            <Card key={i} id={e.id} characters={characters} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={()=> onClose(e.id)} /> 
        )) 
     }
   </div>;
}
