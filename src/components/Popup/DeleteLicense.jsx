import React from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';
import axios from 'axios';
import { baseURL } from './../../helpers/baseURL';

export const DeleteLicense = props => {
  const {setCurrentPopup, currentItem, token} = props
  const deleteHandler = () => {
    axios.delete(`${baseURL}/organization/${currentItem}`, {headers: {Authorization: token}}).then(resp => {
      console.log('delete resp:', resp)
      setCurrentPopup(null)
    })
  }
  return (
    <Popup>
      <div className={s.title}>Удалить организацию?</div>
      <div className={s.formWrapper}>
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Нет' />
          <MainBtn onClick={deleteHandler} text='Да' />
        </div>
      </div>
    </Popup>
  )
}
