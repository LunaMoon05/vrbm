import React from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { InputPopup } from './InputPopup';

export const ReturnLicense = props => {
  const {setCurrentPopup} = props
  const schema = yup.object({               
    accountsCount: yup.number().required('Обязательное поле').typeError('Введите число'),
    endDate: yup.string().required('Обязательное поле'),
  })
  const { register, handleSubmit, setValue, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = () => {
    console.log('success')
  }
  const onError = () => {
    console.log('errors:', errors)
  }
  const licenseFields = [
    {
      name: 'accountsCount',
      label: 'Количество аккаунтов:'
    },
    {
      name: 'endDate',
      label: 'Дата окончания:'
    },
  ]
  return (
    <Popup>
      <div className={s.titleBorder}>Восстановление организации</div>
      <div className={s.formWrapper}>
        {licenseFields.map(item => {
          return <InputPopup key={item.name} error={errors[item.name]} register={register} name={item.name} label={item.label} />
        })}
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn onClick={handleSubmit(onSubmit, onError)} text='Сохранить' />
        </div>
      </div>
    </Popup>
  )
}