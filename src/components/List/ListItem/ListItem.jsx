import React from 'react'
import s from '../List.module.scss'
import deleteIcon from '../../../assets/images/delete.svg'
import { MainBtn } from '../../common/MainBtn/MainBtn'
import editIcon from '../../../assets/images/edit.svg'

export const ListItem = props => {
  const {setCurrentPopup, setCurrentItem, pos, currentCat, userStatus, licenses, data} = props
  const isManagerUsers = currentCat === 'Пользователи' && userStatus === 'manager'
  const onDelete = deleteType => {
    if(deleteType === 'deleteUser') {
      setCurrentItem(data?.thirdCol)
    } else if(deleteType === 'deleteLicense') {
      setCurrentItem(data?.id)
    }
    setCurrentPopup(deleteType)
  }
  return (
    <div className={s.item}>
      <div className={s.position}>{pos ?? '0'}</div>
      <div className={s.itemWrapper}>
        <div className={s.grow}>{data?.firstCol ?? 'Имя'}</div>
        <div className={s.grow}>{data?.secondCol ?? 'Фамилия'}</div>
        <div className={`${s.grow} ${s.growThird}`}>{data?.thirdCol ?? 'E-mail'}</div>
        {isManagerUsers ? null : <div className={s.grow}>{data?.fourthCol}</div>}
        <div style={licenses === 'blocked' ? {width: '10%'} : null} className={s.grow}>{data?.fifthCol ?? 'Роль'}</div>
        {licenses === 'active' ? 
        <button onClick={() => onDelete('deleteLicense')} className={s.btn}>
          <img src={deleteIcon} alt="" />
        </button> : licenses === 'blocked' ? <MainBtn onClick={() => setCurrentPopup('returnLicense')} text='Восстановить' /> : null}
        {currentCat === 'Пользователи' && userStatus === 'manager' ? 
        <div>
          <button className={s.icon}>
            <img src={editIcon} alt='Редактировать пользователя' />
          </button>
          <button onClick={() => onDelete('deleteUser')} className={s.icon}>
            <img src={deleteIcon} alt='Удалить пользователя' />
          </button>
        </div> : null}
      </div>
    </div>
  )
}
