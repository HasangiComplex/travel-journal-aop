
import './App.css';
import TravelCard from "./Components/TravelCard"
import Header from "./Components/Header"
import TravelPlaces from "./Data/travel-places"

function App() {

  const travelDetails = TravelPlaces;
  const mappedTravelDetails = travelDetails.map((item) =>  {
    return(
      <TravelCard 
      img = {item.img}
      country = {item.country}
      title = {item.title}
      date= {item.date}
      description = {item.description}
      googleMapLink = {item.link}
      imagAltText ={item.alt}
      
      />
    )
  }) 
  return (
    <div className="App">
     <Header />
    {mappedTravelDetails}
    </div>
  );
}

export default App;
