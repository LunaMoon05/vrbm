import React, {useEffect, useState} from 'react'
import s from './TopBar.module.scss'
import Select from 'react-select';

export const TopBar = props => {
  const {categories, setCategories, currentCat, setCurrentCat} = props
  const initCats = true ? [
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
      <div className={s.widgets}>
        <Select defaultValue={selectValue} options={options} className={s.select} />
      </div>
    </div>
  )
}
