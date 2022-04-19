import React from 'react'
import s from './List.module.scss'
import { ListItem } from './ListItem/ListItem'
import arrowSort from '../../assets/images/arrowSort.svg'

export const List = props => {
  const {listTypes, currentCat, list, setCurrentPopup, licenses} = props
  // const sorting = (field, isReversed) => {
  //   const copyUsers = [...initialUsers];
  //   const sortedUsers = isReversed ? copyUsers.sort(sortArray(field)).reverse() : copyUsers.sort(sortArray(field));
  //   setUsers(sortedUsers);
  // };
  const firstCol = currentCat === 'Пользователи' ? 'name' : currentCat === 'Лицензии' ? 'companyTitle' : null
  const secondCol = currentCat === 'Пользователи' ? 'last_name' : currentCat === 'Лицензии' ? 'location' : null
  const thirdCol = currentCat === 'Пользователи' ? 'email' : currentCat === 'Лицензии' ? 'numberOfAccounts' : null
  const fourthCol = currentCat === 'Пользователи' ? 'company_title' : currentCat === 'Лицензии' ? 'publicationDate' : null
  const fifthCol = currentCat === 'Пользователи' ? 'role' : currentCat === 'Лицензии' ? 'endLicenseDate' : null
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
        {list.map((item, index) => {
          const data = {
            firstCol: item[firstCol], 
            secondCol: item[secondCol], 
            thirdCol: item[thirdCol], 
            fourthCol: currentCat === 'Лицензии' ? item[fourthCol]?.slice(0, 10) : item[fourthCol], 
            fifthCol: currentCat === 'Лицензии' ? item[fifthCol]?.slice(0, 10) : item[fifthCol]
          }
          return <ListItem key={index} setCurrentPopup={setCurrentPopup} data={data} licenses={licenses} />
        })}
      </div>
    </section>
  )
}
