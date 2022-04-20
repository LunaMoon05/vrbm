import React, { useEffect, useState } from 'react'
import { TopBar } from '../TopBar/TopBar'
import s from './Main.module.scss'
import { List } from './../List/List';
import { userSuperTypes, userTypes, licensesTypes, fileTypes, sceneTypes } from './listTypes';
import { BottomBar } from '../BottomBar/BottomBar';
import { CreateLicense } from '../Popup/CreateLicense';
import { DeleteLicense } from '../Popup/DeleteLicense';
import { ReturnLicense } from './../Popup/ReturnLicense';
import { CreateUser } from './../Popup/CreateUser';
import { Scene } from '../Scene/Scene';
import axios from 'axios';
import { baseURL } from './../../helpers/baseURL';
import { DeleteUser } from './../Popup/DeleteUser';

export const Main = () => {
  const [categories, setCategories] = useState([])
  const [currentCat, setCurrentCat] = useState('Пользователи')
  const [listTypes, setListTypes] = useState([])
  const [userStatus, setUserStatus] = useState('manager')
  const [licenses, setLicenses] = useState(null)
  const [currentPopup, setCurrentPopup] = useState(null)
  const [scene, setScene] = useState(null)
  const [token, setToken] = useState(null)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [currentItem, setCurrentItem] = useState(null)
  useEffect(() => {
    axios.post(`${baseURL}/auth/login`, {
      "email": "superuser",
      "password": "superuser"
    }).then(resp => {
      setToken('Bearer_' + resp.data.token)
    })
  }, [])
  useEffect(() => {
    if(token) {
      if(currentCat === 'Пользователи') {
        axios.get(`${baseURL}/account`, {headers: {Authorization: token}}).then(resp => {
          setList(resp?.data?.data)
        })
      } else if(currentCat === 'Лицензии') {
        axios.get(`${baseURL}/organization`, {headers: {Authorization: token}}).then(resp => {
          setList(resp?.data?.data)
        })
      }
    }
  }, [token, currentCat])
  useEffect(() => {
    if(currentCat === 'Пользователи') {
      const currentUserList = userStatus === 'super' ? userSuperTypes : userTypes
      // const newList = currentUserList.map(item => {
      //   return {...item, sortType: 0, sorting: () => sortArray(item)}
      // })
      setListTypes(userStatus === 'super' ? userSuperTypes : userTypes)
      setLicenses(null)
    } else if(currentCat === 'Лицензии') {
      setListTypes(licensesTypes)
      setLicenses('active')
    } else if(currentCat === '3D Модели' || currentCat === 'Фото 360') {
      setListTypes(fileTypes)
    } else if(currentCat === 'Сцены') {
      setListTypes(sceneTypes)
    }
  }, [currentCat])
  return (
    <section className={s.main}>
      {currentPopup === 'createLicense' && <CreateLicense setList={setList} token={token} setCurrentPopup={setCurrentPopup} />}
      {currentPopup === 'deleteLicense' && <DeleteLicense currentItem={currentItem} token={token} setCurrentPopup={setCurrentPopup} />}
      {currentPopup === 'deleteUser' && <DeleteUser setList={setList} currentItem={currentItem} token={token} setCurrentPopup={setCurrentPopup} />}
      {currentPopup === 'returnLicense' && <ReturnLicense token={token} setCurrentPopup={setCurrentPopup} />}
      {currentPopup === 'createUser' && <CreateUser setList={setList} token={token} setCurrentPopup={setCurrentPopup} />}
      <div className={s.container}>
        {scene ?? 
        <div>
          <TopBar 
          setCurrentPopup={setCurrentPopup} 
          setLicenses={setLicenses} 
          licenses={licenses} 
          userStatus={userStatus} categories={categories} 
          setCategories={setCategories} 
          currentCat={currentCat} 
          setCurrentCat={setCurrentCat} />
          <List
          page={page}
          userStatus={userStatus} 
          currentCat={currentCat} 
          list={list} 
          setCurrentPopup={setCurrentPopup} 
          licenses={licenses} listTypes={listTypes} 
          setListTypes={setListTypes}
          setCurrentItem={setCurrentItem} />
          <BottomBar />
        </div>}
        {scene && <Scene />}
      </div>
    </section>
  )
}
