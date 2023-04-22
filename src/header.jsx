import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

const world = <FontAwesomeIcon icon ={faEarthAmericas}/>

export default function Header(){
    return(
        <div className="header">
            <h3>{world}</h3>
            <p>my travel journal.</p>
        </div>
    )
}