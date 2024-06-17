import React from "react";
import style from "./ButtonA.module.css";

function ButtonA({text, link}) {
  return (
    <div className={style.btn}>
      <a target="_blank" href={link}>
      <button>{text} </button></a>
    </div>
  );
}

export default ButtonA;
