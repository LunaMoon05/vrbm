import React from 'react'
import { TopBar } from '../TopBar/TopBar'
import s from './Main.module.scss'

export const Main = () => {
  return (
    <section>
      <div className={s.container}>
        <TopBar />
      </div>
    </section>
  )
}
