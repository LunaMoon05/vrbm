import React from 'react'
import s from './MainBtn.module.scss'

export const MainBtn = props => {
  const {text, onClick} = props
  return (
    <button className={s.btn} onClick={onClick}>{text}</button>
  )
}
