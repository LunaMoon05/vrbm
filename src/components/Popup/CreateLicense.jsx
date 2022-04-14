import React from 'react'
import { useForm } from 'react-hook-form'
import { MainBtn } from '../common/MainBtn/MainBtn'
import { Popup } from './Popup'
import s from './Popup.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { InputPopup } from './InputPopup'

export const CreateLicense = props => {
  const {setCurrentPopup} = props
  const schema = yup.object({
    company: yup.string().required('Обязательное поле'),
    url: yup.string().required('Обязательное поле'),
    location: yup.string().required('Обязательное поле'),                  
    endDate: yup.string().required('Обязательное поле'),
    accountsCount: yup.number().required('Обязательное поле').typeError('Введите число'),
    name: yup.string().required('Обязательное поле'),
    lastname: yup.string().required('Обязательное поле'),                  
    email: yup.string().email('Неправильный e-mail').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').matches( 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/,
      "Пароль должен включать 1 прописную и заглавную букву латинского алфавита, цифру, а также 1 спец. символ"
    ),
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
      name: 'company',
      label: 'Название компании:'
    },
    {
      name: 'url',
      label: 'URL компании:'
    },
    {
      name: 'location',
      label: 'Локация:'
    },
    {
      name: 'endDate',
      label: 'Дата окончания лицензии:'
    },
    {
      name: 'accountsCount',
      label: 'Количество аккаунтов:'
    },
  ]
  const userFields = [
    {
      name: 'name',
      label: 'Имя:'
    },
    {
      name: 'lastname',
      label: 'Фамилия:'
    },
    {
      name: 'email',
      label: 'E-mail:'
    },
    {
      name: 'password',
      label: 'Пароль:'
    },
  ]
  return (
    <Popup>
      <div className={s.titleBorder}>Создание новой лицензии</div>
      <div className={s.formWrapper}>
        {licenseFields.map(item => {
          return <InputPopup key={item.name} error={errors[item.name]} register={register} name={item.name} label={item.label} />
        })}
      </div>
      <div className={s.titleBorder}>Создание пользователя</div>
      <div className={s.formWrapper}>
        {userFields.map(item => {
          return <InputPopup key={item.name} error={errors[item.name]} register={register} name={item.name} label={item.label} />
        })}
          <div className={s.btnWrapper}>
            <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
            <MainBtn onClick={handleSubmit(onSubmit, onError)} text='Создать лицензию' />
        </div>
      </div>
    </Popup>
  )
}
