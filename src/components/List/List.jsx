import React from 'react'
import s from './List.module.scss'
import { ListItem } from './ListItem/ListItem'

export const List = props => {
  const {listTypes, licenses, setListTypes} = props
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
        <ListItem data={{fourthCol: 's'}} licenses={licenses} />
      </div>
    </section>
  )
}
