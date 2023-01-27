import { Routes, Route } from 'react-router-dom'
import './App.css'
import StarShipsIndex from './StarShipsIndex'
import StarshipPage from './StarshipPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<StarShipsIndex />}/>
      <Route path='/ship' element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;
