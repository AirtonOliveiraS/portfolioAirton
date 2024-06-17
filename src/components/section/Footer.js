import React from 'react'
import style from   './Footer.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa"

function Footer() {
  return (
    <div className={style.footer}>

<ul>
        <li> <a target="_blanck" href="https://api.whatsapp.com/send?phone=5511975219737"><FaWhatsapp size={30}/></a></li>
        <li> <a  target="_blanck"href="https://www.linkedin.com/in/airton-dos-santos-/"><FaLinkedin size={30}/></a></li>
        <li> <a target="_blanck" href="https://github.com/AirtonOliveiraS"><FaGithub size={30}/></a></li>
      </ul>
      <p>airton.saoliveira@gmail.com</p>
      <p>Airton Santos © 2024</p>
    </div>
  )
}

export default Footer