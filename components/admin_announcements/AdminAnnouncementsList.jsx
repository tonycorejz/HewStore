import AdminAnnouncement from './AdminAnnouncement';

const AdminAnnouncementsList = ({items, loading, setSelectedAnnouncement}) => {

  if(loading) { //Пока сделал так, если надо будет - можно стилей добавить
    return(
      <div className="ann_content">
        <div className="new_announce empty_announce"></div>
        <div className="new_announce empty_announce"></div>
        <div className="new_announce empty_announce"></div>
        <div className="new_announce empty_announce"></div>
        <div className="new_announce empty_announce"></div>
        <div className="new_announce empty_announce"></div>
      </div>
    )
  }

  return (
    <div className="ann_content">
      {
        items.map((item) =>
          <AdminAnnouncement announcement={item} key={item.id} setSelectedAnnouncement={setSelectedAnnouncement} />
        )
      }
    </div>
  )

}

export default AdminAnnouncementsList;