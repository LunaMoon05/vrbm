import React from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';

export const ReturnLicense = props => {
  const {setCurrentPopup} = props
  return (
    <Popup>
      <div className={s.title}>Восстановление организации</div>
      <div className={s.formWrapper}>
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn text='Сохранить' />
        </div>
      </div>
    </Popup>
  )
}