import React from 'react'
import s from './BottomBar.module.scss'
import arrow from '../../assets/images/arrow.svg'

export const BottomBar = () => {
  return (
    <div className={s.pages}>
      <div className={s.titleWrapper}>
        <span className={s.title}>Страницы</span>
      </div>
      <div className={s.widget}>
        <button style={{ borderLeft: "none" }} className={s.btn}>
          <img
            style={{ width: 14, height: 11, transform: "rotate(180deg)" }}
            src={arrow}
            alt="prev page"
          />
        </button>
        <button className={s.page}>1</button>
        <button
          style={{
            borderLeft: "1px solid #808080",
            borderRight: "1px solid #808080",
          }}
          className={s.page}
        >
          2
        </button>

        <button className={s.page}>3</button>

        <button className={s.btn}>
          <img
            style={{ width: 14, height: 11 }}
            src={arrow}
            alt="next page"
          />
        </button>
      </div>
    </div>
  )
        }

