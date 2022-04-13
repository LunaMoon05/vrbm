import React from 'react'
import s from './List.module.scss'

export const List = props => {
  const {listTypes, setListTypes} = props
  return (
    <section className={s.section}>
      <div className={s.categories}>
        {listTypes.map(item => {
          return (
            <div className={s.grow}>
              <button>{item}</button>
            </div>
          )
        })}
      </div>
      <div>
        <div className={s.item}>
          <div className={s.position}>1</div>
          <div className={s.itemWrapper}>
            <div className={s.grow}>Имя</div>
            <div className={s.grow}>Фамилия</div>
            <div className={s.grow}>E-mail</div>
            <div className={s.grow}>Организация</div>
            <div className={s.grow}>Роль</div>
          </div>
        </div>
      </div>
    </section>
  )
}
