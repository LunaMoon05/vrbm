import React from 'react'
import s from './Popup.module.scss'

export const Popup = props => {
  const {children, className} = props
  return (
    <div className={`${s.popupContainer}`}>
      <div className={`${s.popup} ${className}`}>
        {children}
      </div>
    </div>
  )
}
