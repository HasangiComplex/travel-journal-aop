export default function TravelCard(props){
    return(
        <card className="card-details">
         <img src = {`../images/${props.img}`} alt={props.imagAltText} className="destination-img"/>
         <div className = "about">
         <div>
        <p><span><img src="../images/location.svg" alt="location-icon"/></span><span>{props.country}</span> <span><a href={props.googleMapLink}  className="google-map">View on Google Maps</a></span></p>
        </div>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <p>{props.description}</p>
         </div>
        </card>
  
    )
}
