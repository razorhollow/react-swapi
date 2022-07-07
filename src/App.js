import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StarShips from './components/StarShips';
import StarShipPage from './pages/StarShipPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarShips/>}/>
        <Route path='/starship-page' element={<StarShipPage />} />
      </Routes>
    </>
  )
}

export default App;
