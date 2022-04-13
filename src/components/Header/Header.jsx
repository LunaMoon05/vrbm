import React from 'react'
import { MainBtn } from '../common/MainBtn/MainBtn'
import s from './Header.module.scss'
import logo from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.wrapper}`}>
        <img className={s.logo} src={logo} alt="Логотип" />
        <MainBtn text='Выход' />
      </div>
    </header>
  )
}
