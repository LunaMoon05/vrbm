import React, {useState} from 'react'
import s from './TopBar.module.scss'
import Select from 'react-select';

export const TopBar = () => {
  const initCats = true ? [
    {
      id: 1,
      text: 'Пользователи',
      isActive: true,
    },
    {
      id: 2,
      text: 'Лицензии',
      isActive: false,
    }
  ] : [
    {
      id: 1,
      text: 'Сцены',
      isActive: false,
    },
    {
      id: 2,
      text: 'Фото 360',
      isActive: false,
    },
    {
      id: 3,
      text: '3D Модели',
      isActive: false,
    },
    {
      id: 4,
      text: 'Пользователи',
      isActive: true,
    },
  ]
  const [categories, setCategories] = useState(initCats)
  const categoryHandler = id => {
    const newCategories = categories.map(item => {
      if(item.id === id) {
        return {...item, isActive: true}
      }
      return {...item, isActive: false}
    })
    setCategories(newCategories)
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
                <button onClick={() => categoryHandler(item.id)} className={`${s.btn} ${item.isActive ? s.btnActive : null}`}>{item.text}</button>
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
