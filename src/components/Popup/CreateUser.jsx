import React from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';

export const CreateUser = props => {
  const {setCurrentPopup} = props
  return (
    <Popup>
      <div className={s.titleBorder}>Создание пользователя</div>
      <div className={s.formWrapper}>
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn text='Создать пользователя' />
        </div>
      </div>
    </Popup>
  )
}
