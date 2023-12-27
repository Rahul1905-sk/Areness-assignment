import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Movies from './component/Movies';
import Navbar from './component/Navbar';
import "./App.css";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [search, setsearch]= useState('')

  // for get api impliment 
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    // console.log(movies);
    setPopular(movies.results);
  };
const getdata=(value)=>{
  setsearch(value)
}

  return (
    <div className="App">
      <Navbar sandsata={getdata}/>
      <div className="row gy-3">
        {popular
        .filter((movie)=>{
          const searchin= search.toLowerCase()
          const searchout=movie.title.toLowerCase()
          return searchout && searchout.startsWith(searchin)
        })
        .map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;
