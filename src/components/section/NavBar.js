import React from "react";
import style from "./NavBar.module.css";
import { FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'


function NavBar() {
  return (
    <div className={style.navbar}>
      <ul>
        
        <li><Nav.Link href="#apresentacao" >Apresentação</Nav.Link></li>
        <li><Nav.Link href="#skills">Habilidades</Nav.Link></li>
        <li><Nav.Link href="#projetos">Projetos</Nav.Link></li>
      </ul>

      <ul>
        <li> <a target="_blanck" href="https://api.whatsapp.com/send?phone=5511975219737"><FaWhatsapp size={30}/></a></li>
        <li> <a  target="_blanck"href="https://www.linkedin.com/in/airton-dos-santos-/"><FaLinkedin size={30}/></a></li>
        <li> <a target="_blanck" href="https://github.com/AirtonOliveiraS"><FaGithub size={30}/></a></li>
      </ul>

    </div>
  );
}

export default NavBar;
