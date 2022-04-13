import React from 'react'
import s from '../List.module.scss'
import deleteIcon from '../../../assets/images/delete.svg'
import { MainBtn } from '../../common/MainBtn/MainBtn'

export const ListItem = props => {
  const {pos, licenses, data} = props
  return (
    <div className={s.item}>
      <div className={s.position}>{pos ?? '0'}</div>
      <div className={s.itemWrapper}>
        <div className={s.grow}>{data?.firstCol ?? 'Имя'}</div>
        <div className={s.grow}>{data?.secondCol ?? 'Фамилия'}</div>
        <div className={s.grow}>{data?.thirdCol ?? 'E-mail'}</div>
        {data?.fourthCol && <div className={s.grow}>{data?.fourthCol}</div>}
        <div className={s.grow}>{data?.fifthCol ?? 'Роль'}</div>
          {licenses === 'active' ? 
          <button className={s.btn}>
            <img src={deleteIcon} alt="" />
          </button> : licenses === 'blocked' ? <MainBtn text='Восстановить' /> : null}
      </div>
    </div>
  )
}
