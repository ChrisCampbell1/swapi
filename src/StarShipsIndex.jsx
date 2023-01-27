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
      <h1>this is the starshipsindex</h1>
      {shipList.length ?
      <>
      {shipList.map((ship, idx) =>
      <Link to={'/ship'} key={idx}>{ship.name}</Link>
      )}
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
