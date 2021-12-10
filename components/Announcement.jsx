import Link from "next/Link";
const Announcement = (props) => {

  return (
    <div className="new_announce">
      <a href="#">
        <div className="announce_image">
          <img src={props.announcement.img} alt={props.announcement.header} />
        </div>
      </a>
      <div className="announce_text">
        <div className="a_text_start">
          <div className="a_text_start_head">
            <svg className="icon">
              <use xlinkHref="./assets/images/icons.svg#date"></use>
            </svg>
            <p className="date">{props.announcement.date}</p>
          </div>
          <div className="a_text_start_content">
            {/*<!-- LINK 2 -->*/}
            <a className="a_start_content_head" href="#">{props.announcement.header}</a>
            <p className="a_start_content_body">{props.announcement.body}</p>
          </div>
        </div>
        <div className="a_text_end">
          {/*<!-- LINK 3 -->*/}
          <Link href={`../announcements/${props.announcement.id}`}>
          <a className="a_button" href="#">
            Read more
            <svg className="icon">
              <use
                xlinkHref="./assets/images/icons.svg#more"
              ></use></svg>
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Announcement;