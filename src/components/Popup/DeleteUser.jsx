import React from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';
import axios from 'axios';
import { baseURL } from './../../helpers/baseURL';

export const DeleteUser = props => {
  const {setCurrentPopup, setList, currentItem, token} = props
  const deleteHandler = () => {
    axios.delete(`${baseURL}/account/${currentItem?.email}`, {headers: {Authorization: token}}).then(resp => {
      console.log('delete resp:', resp)
      axios.get(`${baseURL}/account`, {headers: {Authorization: token}}).then(accountResp => {
        setList(accountResp?.data?.data)
        setCurrentPopup(null)
      })
    })
  }
  return (
    <Popup>
      <div className={s.title}>Удалить пользователя?</div>
      <div className={s.formWrapper}>
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Нет' />
          <MainBtn onClick={deleteHandler} text='Да' />
        </div>
      </div>
    </Popup>
  )
}
