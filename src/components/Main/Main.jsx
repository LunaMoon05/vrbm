import React, { useEffect, useState } from 'react'
import { TopBar } from '../TopBar/TopBar'
import s from './Main.module.scss'
import { List } from './../List/List';
import { userSuperTypes, userTypes, licensesTypes } from './listTypes';
import { BottomBar } from '../BottomBar/BottomBar';

export const Main = () => {
  const [categories, setCategories] = useState([])
  const [currentCat, setCurrentCat] = useState('Пользователи')
  const [listTypes, setListTypes] = useState([])
  const [userStatus, setUserStatus] = useState('super')
  const [licenses, setLicenses] = useState(null)
  useEffect(() => {
    if(currentCat === 'Пользователи') {
      setListTypes(userStatus === 'super' ? userSuperTypes : userTypes)
      setLicenses(null)
    } else if(currentCat === 'Лицензии') {
      setListTypes(licensesTypes)
      setLicenses('active')
    }
  }, [currentCat])
  return (
    <section>
      <div className={s.container}>
        <TopBar setLicenses={setLicenses} licenses={licenses} userStatus={userStatus} categories={categories} setCategories={setCategories} currentCat={currentCat} setCurrentCat={setCurrentCat} />
        <List licenses={licenses} listTypes={listTypes} setListTypes={setListTypes} />
        <BottomBar />
      </div>
    </section>
  )
}
