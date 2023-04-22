import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
export default function Post(props){

    return(
        <section className="travel-post">
            <img className="travel-img" src={props.post.imageUrl} alt=""/>
            <div className="post-container">
                <span className="marker">{mapMarker} <span className="country">{props.post.location}</span> <a href={props.post.googleMapsUrl} className="location">View on Google Maps</a> </span>
                <h1 className="title">{props.post.title}</h1>
                <p className="date">{props.post.startDate} - {props.post.endDate}</p>
                <p className="description">{props.post.description}</p>
            </div>
        </section>
    )
}