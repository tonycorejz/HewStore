import Link from "next/Link";
const AdminAnnouncement = (props) => {

  return (
    <div className="new_announce if-select" tabIndex="0" onClick={() => props.setSelectedAnnouncement({...props.announcement})}>
      <a href="#">
        <div className="announce_image">
          <img src={props.announcement.img} alt={props.announcement.header} />
        </div>
      </a>
      <div className="announce_text">
        <div className="a_text_start">
          <div className="a_text_start_head">
            <svg className="icon">
              <use xlinkHref="/assets/images/icons.svg#date"></use>
            </svg>
            <p className="date">{props.announcement.date}</p>
          </div>
          <div className="a_text_start_content">
            <a className="a_start_content_head" href="#">{props.announcement.header}</a>
            <p className="a_start_content_body">{props.announcement.body}</p>
          </div>
        </div>
        <div className="a_text_end">
          <Link href={`../announcements/${props.announcement.id}`}>
          <a className="a_button" href="#">
            Read more
            <svg className="icon">
              <use
                xlinkHref="/assets/images/icons.svg#more"
              ></use></svg>
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminAnnouncement;