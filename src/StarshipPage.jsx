import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const StarshipPage = () => {
  const location = useLocation()
  console.log(location, "location")
  
  return (  
    <>
    <h1>Starship Details</h1>
    <div className="shipContainer">
    <div className="shipDetailCard">
      <p>Name: {location.state.ship.name}</p> 
      <p>Model: {location.state.ship.model}</p>
      <Link to='/'>RETURN</Link>
    </div>
    </div>
    </>
    
  )
}

export default StarshipPage;
