import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import PlaceToStay from './components/PlaceToStay';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/place-to-stay' element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
