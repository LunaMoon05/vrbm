import React from 'react'
import { MainBtn } from '../common/MainBtn/MainBtn'
import { Popup } from './Popup'
import s from './Popup.module.scss'

export const CreateLicense = props => {
  const {setCurrentPopup} = props
  return (
    <Popup>
      <div className={s.titleBorder}>Создание новой лицензии</div>
      <div className={s.formWrapper}>
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn text='Создать лицензию' />
        </div>
      </div>
    </Popup>
  )
}
