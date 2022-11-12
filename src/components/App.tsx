import React from 'react';
import Movies_in_theatre from './Individual Pages/Movies_in_theatre/movies_in_theatre'
import ComingSoon from './Individual Pages/Comingsoon/comingsoon';
import Favourites from './Individual Pages/Favourites/favourites';
import Indian_Movies from './Individual Pages/IndianMovies/indianMovies';
import Movies from './Individual Pages/Movies/movies';
import Menu from './Menu/menu'
import { Route, Routes } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  

import MovDetails from "./Individual Pages/MovieDetails"

// import './App.css';

function App() {
  return (
    <>
      <Menu />
     
        <Routes>
          <Route path="/:group/:title/:year" element={<MovDetails/>} />
          <Route path="/:group/:id" element={<MovDetails/>} />
          <Route path="/movies-in-theaters" element={<Movies_in_theatre/>} />
          <Route path="/movies-coming" element={<ComingSoon/>} />
          <Route path="/top-rated-india" element={<Indian_Movies/>} />
          <Route path="/top-rated-movies" element={<Movies/>} />
          <Route path="/favourites" element={<Favourites></Favourites>} />         
          <Route path="/" element={<Movies_in_theatre/>} />

        </Routes>
      

    </>
  
    
  );
}

export default App;
