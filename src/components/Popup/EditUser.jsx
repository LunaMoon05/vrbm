import React, { useEffect, useState } from 'react'
import s from './Popup.module.scss'
import { MainBtn } from './../common/MainBtn/MainBtn';
import { Popup } from './Popup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { InputPopup } from './InputPopup';
import axios from 'axios';
import { baseURL } from './../../helpers/baseURL';
import DatePicker, {setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ru} from 'date-fns/locale';
setDefaultLocale(ru)

export const EditUser = props => {
  const {setCurrentPopup, currentItem, setList, token} = props
  const schema = yup.object({               
    name: yup.string().required('Обязательное поле'),
    lastname: yup.string().required('Обязательное поле'),                  
    email: yup.string().email('Неправильный e-mail').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').matches( 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/,
      "Пароль должен включать 1 прописную и заглавную букву латинского алфавита, цифру, а также 1 спец. символ"
    ),
    role: yup.string().required('Обязательное поле'),
    birthDate: yup.string().matches(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, 'Неправильный формат даты').nullable().required('Обязательное поле')
  })
  const { register, handleSubmit, setValue, getValues, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = () => {
    const data = {
      birth_date: getValues().birthDate,
      company_title: "arSoft",
      decodeEmail: getValues().email,
      decodePassword: getValues().password,
      email: getValues().email,
      last_name: getValues().lastname,
      name: getValues().name,
      password: getValues().password
    }
    axios.post(`${baseURL}/auth/reg${getValues().role === 'Организатор' ? '/admin' : ''}`, data, {headers: {Authorization: token}}).then(resp => {
      console.log('resp', resp)
      axios.get(`${baseURL}/account`, {headers: {Authorization: token}}).then(accountResp => {
        setList(accountResp?.data?.data)
        setCurrentPopup(null)
      })
    })
  }
  const onError = () => {
    console.log('getVluas', getValues())
    console.log('errors:', errors)
  }
  const userFields = [
    {
      name: 'name',
      label: 'Имя:',
      value: currentItem?.name
    },
    {
      name: 'lastname',
      label: 'Фамилия:',
      value: currentItem?.last_name
    },
    {
      name: 'email',
      label: 'E-mail:',
      value: currentItem?.email
    },
    {
      name: 'password',
      label: 'Пароль:',
      value: currentItem?.password
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
  const [selectValue, setSelectValue] = useState('Участник')
  useEffect(() => {
    setValue('role', selectValue?.value)
  }, [selectValue])
  const [startDate, setStartDate] = useState(new Date(currentItem?.birth_date))
  const onChange = value => {
    setStartDate(value);
  }
  useEffect(() => {
    setValue('birthDate', startDate?.toISOString())
  }, [startDate])
  return (
    <Popup>
      <div className={s.titleBorder}>Редактирование пользователя</div>
      <div className={s.formWrapper}>
        {userFields.map(item => {
          return <InputPopup value={item.value} onSelect={setSelectValue} options={item.options} key={item.name} error={errors[item.name]} register={register} name={item.name} label={item.label} />
        })}
        <label>Дата рождения: <span className={s.error}>{errors?.['birthDate']?.message}</span></label>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          className={s.date}
          calendarClassName={s.dateCalendar}
          startDate={startDate}
          disabledKeyboardNavigation
        />
        <div className={s.btnWrapper}>
          <MainBtn onClick={() => setCurrentPopup(null)} style={{marginRight: 10}} text='Закрыть' />
          <MainBtn onClick={handleSubmit(onSubmit, onError)} text='Создать пользователя' />
        </div>
      </div>
    </Popup>
  )
}