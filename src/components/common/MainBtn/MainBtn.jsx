import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, style, isActive, onClick} = props
  return (
    <button style={style} className={`${s.btn} ${isActive ? s.btnActive : null}`} onClick={onClick}>{text}</button>
  )
}
