import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
