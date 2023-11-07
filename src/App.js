import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
import LogoIcon from './logo.svg'

//6b940168

const API_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey=6b940168';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      searchMovies("action", "all");
    }, []);
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setMovies(data.Search);
    };
       
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
     
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
          
    return (
      <div className="app">
        <div className="header">
            <h1>
               <img
               src={LogoIcon}
               /> 
                Wat<span className="spann">
                v</span>hM<span>e</span></h1>
            <div className="menu" onClick={openNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z"/></g></svg>
            </div>
        </div>

        <div id="mySidenav" className="sidenav">
				
                <div className="sidede">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                </div>
                
                <a href="mixtul.html">HOME</a>
                <a href="#">Movies</a>
                <a href="#">Series</a>
                <a href="#">Anime</a>
                <a href="#">Aventure</a>
                <a href="#">Comedy</a>
                <a href="#">Historical</a>
                <a href="#">Horror</a>
                <p>Privacy Policy</p>
                <div className="downde">
                    <p>Copyright @Wavthme</p>
                </div>
          </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        <div className="privacypolicy">
            <h4>Wavthme is a webpage that fully runs on API, Kindly not
                that the movies on the website are movies fetched by API from other web services.
                Kindly read the <p>Privacy policy</p>
            </h4>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      <footer>
      <h1>
         <img
         src={LogoIcon}
         /> 
         Wat<span className="spann">
         v</span>hM<span>e</span></h1>
         <p>AfricTech | Copyright 2023</p>
     </footer>
      </div>
   

    );
  };
  

export default App