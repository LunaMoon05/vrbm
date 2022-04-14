import React from 'react'
import s from './Popup.module.scss'
import Select from 'react-select';

export const InputPopup = props => {
  const {register, name, options, onSelect, error, label} = props
  return (
    <div className={s.inputWrapper}>
      <label htmlFor={name}>{label} <span className={s.error}>{error?.message}</span></label>
      {options ? <Select onChange={val => onSelect(val)} placeholder='Выбрать...' options={options} className={s.select} />  : <input type="text" id={name} {...register(name)} />}
    </div>
  )
}
