import Announcement from './Announcement';

const AnnouncementsList = ({items, loading}) => {

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
          <Announcement announcement={item} key={item.id} />
        )
      }
    </div>
  )

}

export default AnnouncementsList;