import { Link } from "react-router-dom";

const ShipCard = ({ ship }) => {
  return (  
    <Link to={'/ship'} className="shipCard" state={{ship}}>{ship.name}</Link>
  )
}

export default ShipCard;
