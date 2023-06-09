import React from 'react'
import "../../style/main.scss";
const Button = ({className,text,onClick}) =>{
  return <button onClick={onClick} className={className}>{text}</button>
}

export default Button;