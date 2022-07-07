import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarShips } from "../services/sw-api";
import StarShipPage from "../pages/StarShipPage";
import { useLocation } from "react-router-dom";

const StarShips = () => {
  const [starShips, setStarShips] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchStarShips = async () => {
      const shipData = await getAllStarShips();
      setStarShips(shipData.results)
    }
    fetchStarShips()
  }, [])

  return (
    <>
      {starShips.length ?
      <div className="starships-container">
        {starShips.map(starship => 
          <Link key={starship.name} to='/starship-page' state={{starship}} className="starship-card">
            {starship.name}
          </Link>
          )}
      </div>
      :
      <>
        <h4>Starships loading...</h4>
      </>
      }
    </>
  );
}

export default StarShips;