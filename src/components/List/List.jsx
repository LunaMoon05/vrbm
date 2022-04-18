import React from 'react'
import s from './List.module.scss'
import { ListItem } from './ListItem/ListItem'
import arrowSort from '../../assets/images/arrowSort.svg'

export const List = props => {
  const {listTypes, setCurrentPopup, licenses} = props
  // const sorting = (field, isReversed) => {
  //   const copyUsers = [...initialUsers];
  //   const sortedUsers = isReversed ? copyUsers.sort(sortArray(field)).reverse() : copyUsers.sort(sortArray(field));
  //   setUsers(sortedUsers);
  // };
  return (
    <section className={s.section}>
      <div className={s.categories}>
        {listTypes.map((item, index) => {
          return (
            <div key={item.text} className={`${s.grow} ${(index + 1) === 3 && s.growThird}`}>
              <button className={s.sortBtn}>
                {item.text}
                <div className={s.sort}>
                  <img style={{transform: 'rotate(180deg)'}} src={arrowSort} alt='Сортировка' />
                  <img src={arrowSort} alt='Сортировка' />
                </div>
              </button>
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
