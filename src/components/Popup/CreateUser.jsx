import React, { useEffect, useState } from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { InputPopup } from './InputPopup';

export const CreateUser = props => {
  const {setCurrentPopup} = props
  const schema = yup.object({               
    name: yup.string().required('Обязательное поле'),
    lastname: yup.string().required('Обязательное поле'),                  
    email: yup.string().email('Неправильный e-mail').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').matches( 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/,
      "Пароль должен включать 1 прописную и заглавную букву латинского алфавита, цифру, а также 1 спец. символ"
    ),
    role: yup.string().required('Обязательное поле')
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
    {
      name: 'role',
      label: 'Роль:',
      options: [
        {
        value: 'Организатор',
        label: 'Организатор'
        }, 
        {
          value: 'Участник',
          label: 'Участник'
        }
      ]
    }
  ]
  const [selectValue, setSelectValue] = useState(null)
  useEffect(() => {
    setValue('role', selectValue?.value)
  }, [selectValue])
  return (
    <Popup>
      <div className={s.titleBorder}>Создание пользователя</div>
      <div className={s.formWrapper}>
        {userFields.map(item => {
          return <InputPopup onSelect={setSelectValue} options={item.options} key={item.name} error={errors[item.name]} register={register} name={item.name} label={item.label} />
        })}
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn onClick={handleSubmit(onSubmit, onError)} text='Создать пользователя' />
        </div>
      </div>
    </Popup>
  )
}
