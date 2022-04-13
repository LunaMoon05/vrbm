import React, {useEffect, useState} from 'react'
import s from './TopBar.module.scss'
import Select from 'react-select';
import { MainBtn } from '../common/MainBtn/MainBtn';

export const TopBar = props => {
  const {categories, setCurrentPopup, setLicenses, licenses, userStatus, setCategories, currentCat, setCurrentCat} = props
  const initCats = userStatus === 'super' ? [
    {
      id: 1,
      text: 'Пользователи'
    },
    {
      id: 2,
      text: 'Лицензии'
    }
  ] : [
    {
      id: 1,
      text: 'Сцены'
    },
    {
      id: 2,
      text: 'Фото 360'
    },
    {
      id: 3,
      text: '3D Модели'
    },
    {
      id: 4,
      text: 'Пользователи'
    },
  ]
  useEffect(() => {
    setCategories(initCats)
  }, [])
  const categoryHandler = category => {
    setCurrentCat(category)
  }
  const options = [
    {
      value: 'Все',
      label: 'Все'
    },
    {
      value: 'АР СОФТ',
      label: 'АР СОФТ'
    },
    {
      value: 'Google',
      label: 'Google'
    },
  ]
  const [selectValue, setSelectValue] = useState({value: 'Все', label: 'Все'})
  return (
    <div className={s.topBar}>
      <div className={s.categories}>
        <ul className={s.list}>
          {categories.map((item, index) => {
            return (
              <li key={item.id} style={(index + 1) === categories.length ? null : {marginRight: 80}}>
                <button onClick={() => categoryHandler(item.text)} className={`${s.btn} ${currentCat === item.text ? s.btnActive : null}`}>{item.text}</button>
              </li>
            )
          })}
        </ul>
      </div>
      <div style={currentCat === 'Лицензии' ? {justifyContent: 'space-between'} : null} className={s.widgets}>
        {currentCat === 'Пользователи' && userStatus === 'super' ? <Select defaultValue={selectValue} options={options} className={s.select} /> : null}
        {currentCat === 'Лицензии' ? <div>
          <MainBtn onClick={() => setLicenses('active')} isActive={licenses === 'active'} style={{marginRight: 10}} text='Действующие' />
          <MainBtn onClick={() => setLicenses('blocked')} isActive={licenses === 'blocked'} text='Заблокированные' />
        </div> : null}
          {currentCat === 'Лицензии' ? <MainBtn onClick={() => setCurrentPopup('createLicense')} text='Новая лицензия' /> : null}
          {currentCat === 'Пользователи' && userStatus === 'manager' ? <MainBtn onClick={() => setCurrentPopup('createUser')} text='Новый пользователь' /> : null}
          {currentCat === '3D Модели' || currentCat === 'Фото 360' ? <MainBtn text='Загрузить' /> : null}
      </div>
    </div>
  )
}
