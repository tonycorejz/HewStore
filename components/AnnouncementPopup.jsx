import { useState, useRef } from 'react';
import UploadFile from './UI/UploadFile';
import FormInput from './UI/FormInput';
import CreateCouponBtn from './UI/CreateCouponBtn';

const AnnouncementPopup = ({active, setActive, create, edit, selectedAnnouncement, setSelectedAnnouncement}) => {
 
  const setFile = (elementKey, base64) => {
    setSelectedAnnouncement({...selectedAnnouncement, [elementKey] : base64});
  }

  const addNewAnnouncement = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      ...selectedAnnouncement, id: Date.now()
    }
    create(newAnnouncement);
    setSelectedAnnouncement({id: "", img: "", date: "", header: "", body: ""});
  }

  const editAnnouncement = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      ...selectedAnnouncement
    }
    edit(newAnnouncement);
    setSelectedAnnouncement({id: "", img: "", date: "", header: "", body: ""});
  }

  return (
    <div className={active ? "create-coupon" : "create-coupon d_none"} onClick={() => setActive(false)}>
        <div className="ellements-create" onClick={e => e.stopPropagation()}>
          <h1>{active == "create" ? "Создать" : "Редактировать"} анонс</h1>
          <UploadFile name="img" setFile={setFile} >Загрузить фоновое изображение</UploadFile>
          <FormInput
          value={selectedAnnouncement.header}
          onChange={e => setSelectedAnnouncement({...selectedAnnouncement, header: e.target.value})}
          type="text" 
          placeholder="Заголовок"
          />
         <textarea className="edit-description"
          value={selectedAnnouncement.body}
          onChange={e => setSelectedAnnouncement({...selectedAnnouncement, body: e.target.value})}
          placeholder="Описание"
          />
          <CreateCouponBtn onClick={active == "create" ? addNewAnnouncement : editAnnouncement}>{active == "create" ? "Создать" : "Редактировать"}</CreateCouponBtn>
          <h2 onClick={() => setActive(false)}>Отмена</h2>
        </div>
    </div>
  )
}

export default AnnouncementPopup;