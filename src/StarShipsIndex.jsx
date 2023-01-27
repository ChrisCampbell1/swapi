import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import ShipCard from "./ShipCard"
import { getAllStarships } from "./services/sw-api"


const StarShipsIndex = () => {
  const [shipList, setShipList] = useState([])

  useEffect(() => {
    async function getShipList() {
      let shipData = await getAllStarships()
      setShipList(shipData.results)
    }
    getShipList()
  }, [])
  
  
  return (  
    <>
      <h1>So Many Ships!</h1>
      {shipList.length ?
      <>
      <div className="shipContainer">
      {shipList.map((ship, idx) =>
        <ShipCard key={idx} ship={ship}/>
      )}
      </div>
      </>
      :
      <>
      <h4>Ships Loading</h4>
      </>
      }

    </>
  )
}

export default StarShipsIndex
