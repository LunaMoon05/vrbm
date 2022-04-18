import React from "react"
import { MainBtn } from "../common/MainBtn/MainBtn"
import s from "./Scene.module.scss"
import Select from 'react-select';

export const Scene = () => {
  return (
    <section>
      <div className={s.header}>
        <div className={s.title}>Название сцены</div>
        <Select className={s.select} />
      </div>
      <div className={s.scene}>
        <div className={s.btns}>
          <MainBtn style={{ marginBottom: 10 }} text="Модели" />
          <MainBtn style={{ marginBottom: 10 }} text="Фото 360" />
          <MainBtn style={{ marginBottom: 10 }} text="Камеры" />
          <MainBtn style={{ marginBottom: 10 }} text="Просмотр КСГ" />
          <MainBtn text="Комментарии" />
        </div>
        <div className={s.info}>Рабочая область</div>
      </div>
    </section>
  );
};
