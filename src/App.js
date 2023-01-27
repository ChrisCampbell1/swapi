import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import StarShipsIndex from './StarShipsIndex'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<StarShipsIndex />}/>
    </Routes>
    </>
  );
}

export default App;
