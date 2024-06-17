import React from "react";
import style from "./Presentation.module.css";
import ButtonA from "../elements/ButtonA";
import imag from '../../image/image.png'


function Presentation() {
  return (
    <div id="apresentacao" className={style.presentation}>
      <h4>
        
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1> Olá, eu sou o Airton </h1>

      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras.<br />
        Como desenvolvedor FullStack  eu tenho o compromisso de<br /> resolver 
        problemas complexos e trazer resultados excepcionais para <br />
        os negócios.        
        estou sempre em busca de novos desafios para superar.
        
      </p>
      <ButtonA text='Conecte-se Comigo!' link='https://api.whatsapp.com/send?phone=5511975219737'/> <br/>
      
    </div>
  );
}

export default Presentation;
