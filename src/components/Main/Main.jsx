import React, { useEffect, useState } from 'react'
import { TopBar } from '../TopBar/TopBar'
import s from './Main.module.scss'
import { List } from './../List/List';
import { userSuperTypes, userTypes } from './listTypes';

export const Main = () => {
  const [categories, setCategories] = useState([])
  const [currentCat, setCurrentCat] = useState('Пользователи')
  const [listTypes, setListTypes] = useState([])
  const [userStatus, setUserStatus] = useState('super')
  useEffect(() => {
    if(currentCat === 'Пользователи') {
      setListTypes(userStatus === 'super' ? userSuperTypes : userTypes)
    }
  }, [currentCat])
  return (
    <section>
      <div className={s.container}>
        <TopBar categories={categories} setCategories={setCategories} currentCat={currentCat} setCurrentCat={setCurrentCat} />
        <List listTypes={listTypes} setListTypes={setListTypes} />
      </div>
    </section>
  )
}
