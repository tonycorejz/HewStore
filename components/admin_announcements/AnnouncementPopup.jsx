import { useState, useRef } from 'react';
import UploadFile from '../UI/UploadFile';
import FormInput from '../UI/FormInput';
import CreateCouponBtn from '../UI/CreateCouponBtn';

const emptyAnnounce = {id: "", img: "", date: "", header: "", headerRU: "", body: "", bodyRU: ""};

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
    setSelectedAnnouncement(emptyAnnounce);
    setActive(false);
  }

  const editAnnouncement = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      ...selectedAnnouncement
    }
    edit(newAnnouncement);
    setSelectedAnnouncement(emptyAnnounce);
    setActive(false);
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
          <FormInput
          value={selectedAnnouncement.headerRU}
          onChange={e => setSelectedAnnouncement({...selectedAnnouncement, headerRU: e.target.value})}
          type="text" 
          placeholder="Заголовок Ru"
          />
         <textarea className="edit-description"
          value={selectedAnnouncement.body}
          onChange={e => setSelectedAnnouncement({...selectedAnnouncement, body: e.target.value})}
          placeholder="Описание"
          />
          <textarea className="edit-description"
          value={selectedAnnouncement.bodyRU}
          onChange={e => setSelectedAnnouncement({...selectedAnnouncement, bodyRU: e.target.value})}
          placeholder="Описание Ru"
          />
          <CreateCouponBtn onClick={active == "create" ? addNewAnnouncement : editAnnouncement}>{active == "create" ? "Создать" : "Редактировать"}</CreateCouponBtn>
          <h2 onClick={() => setActive(false)}>Отмена</h2>
        </div>
    </div>
  )
}

export default AnnouncementPopup;