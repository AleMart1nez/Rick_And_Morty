import React from "react";
import estilo from "../About/About.module.css";

export default function About(){
    return (
        <div>
          <h1 className={estilo.title}>Acerca</h1>
          <h2 className={estilo.about}>Mi nombre es Alejandro Martinez</h2>
          <p className={estilo.about}>Ésta es mi primera aplicación con React</p>
        </div>
    )
}