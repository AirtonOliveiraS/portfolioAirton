import React from "react";
import style from "./Projects.module.css";
import ButtonB from "./../elements/ButtonB";
import Card from "./../elements/Card";
import ls from "./../../image/project/lp.svg";
import ls2 from "./../../image/project/lp2.png";
import portfoliopessoal from "./../../image/project/portfoliopessoal.png";
import previsaotempo from "./../../image/project/previsaotempo.png";


function Projects() {
  return (
    <div className={style.projects} id="projetos">
      <h1>Projetos</h1>

      <Card
        img={ls}
        title=" LP - DNC"
        tech=" HTML, CSS e JS"
        description=" Desenvolvimento de uma Landing Page para o lançamento de formação em tecnnologia"
        repo="https://github.com/AirtonOliveiraS/Desafio1LandingPage?tab=readme-ov-file"
        site="https://landingpagedesafio-1.netlify.app/"
      />

      <Card
        img={ls2}
        title=" Landing Page -  Empresa de Arquitetura"
        tech=" HTML, CSS e JS"
        description=" Desenvolvimento de uma Landing Page de exibição de uma empresa de Arquitetura "
        repo="https://github.com/AirtonOliveiraS/Desafio1LandingPage?tab=readme-ov-file"
        site="https://landingpagedesafio-1.netlify.app/"
      />

<Card
        img={portfoliopessoal}
        title=" Potfolio Pessoal"
        tech=" HTML, CSS , JS e REACT"
        description=" Desenvolvimento do portfolio pessoal com apresentação, skills, projetos e contatos. "
        repo="https://github.com/AirtonOliveiraS/portfolioAirton"
        site="https://portfolio-airton-pearl.vercel.app/"
      />
      
<Card
        img={previsaotempo}
        title=" Pagina com Consumo de Api"
        tech=" HTML, CSS , JS e BOOTSTRAP"
        description=" Desenvolvimento de uma pagina com consumo de API para consulta de informações via CEP, LATITUDE e lONGITUDE "
        repo="https://github.com/AirtonOliveiraS/PaginadeBuscaCEPePrevisaodoTempo"
        site="https://desafio-02-dnc.netlify.app/"
      />
      <ButtonB
        link="https://github.com/AirtonOliveiraS?tab=repositories"
        text="Acesse meu repositório"
      />
    </div>
  );
}

export default Projects;
