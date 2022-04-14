import React from 'react'
import s from './Popup.module.scss'

export const InputPopup = props => {
  const {register, name, error, label} = props
  return (
    <div className={s.inputWrapper}>
      <label htmlFor={name}>{label} <span className={s.error}>{error?.message}</span></label>
      <input type="text" id={name} {...register(name)} />
    </div>
  )
}
