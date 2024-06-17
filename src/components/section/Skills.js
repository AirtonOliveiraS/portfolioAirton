import React from 'react'
import style from './Skills.module.css'
import js from '../../image/skill/js.svg'
import html from '../../image/skill/html.svg'
import css from '../../image/skill//css.svg'
import ts from '../../image/skill/ts.svg'
import react from '../../image/skill/react.svg'

function Skills() {
  return (
    <div  className={style.skill} id='skills'>
      <h1> Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
       <div>
        <img src={js}/>
        <img src={html}/>
        <img src={css}/>
        <img src={ts}/>
        <img src={react}/>
       </div>
    </div>
  )
}

export default Skills