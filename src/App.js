import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import MovieDescription from './Component/MovieDescription';
import PopularPeople from './Component/PopularPeople';
import Popular from './Component/Popular';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/moviedescription/:id" element={<MovieDescription />} />
        <Route path="/popularpeople" element={<PopularPeople />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Popular />} />
        <Route path="/nowplaying" element={<Popular />} />
        <Route path="/toprated" element={<Popular />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
