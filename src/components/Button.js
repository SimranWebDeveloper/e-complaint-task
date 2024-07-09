import React from 'react'

export const Button = ({icon,text,style,onClick}) => {
  return (
    <button onClick={onClick} className={style}>
        {icon}
        <p>{text}</p>
    </button>
  )
}