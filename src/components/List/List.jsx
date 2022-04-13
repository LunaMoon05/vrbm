import React from 'react'
import s from './List.module.scss'
import { ListItem } from './ListItem/ListItem'

export const List = props => {
  const {listTypes, setCurrentPopup, licenses} = props
  return (
    <section className={s.section}>
      <div className={s.categories}>
        {listTypes.map((item, index) => {
          return (
            <div key={item} className={`${s.grow} ${(index + 1) === 3 && s.growThird}`}>
              <button>{item}</button>
            </div>
          )
        })}
      </div>
      <div>
        <ListItem setCurrentPopup={setCurrentPopup} data={{fourthCol: 's'}} licenses={licenses} />
      </div>
    </section>
  )
}
