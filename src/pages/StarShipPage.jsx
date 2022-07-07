import { Link, useLocation } from "react-router-dom";

function StarshipPage() {
	const location = useLocation()
	return (
    <>
      <div className="details-container">
        <div className="details-card">
          <h3>NAME: {location.state.starship.name}</h3>
          <h3>MODEL: {location.state.starship.model}</h3>
          <Link to='/'>RETURN</Link>
        </div>
      </div>
  </>
	);
}

export default StarshipPage