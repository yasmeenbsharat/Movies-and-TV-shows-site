import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TVShow() {
  let [results,setResults] = useState([]);
  let {type}= useParams();
  console.log(type);
   const getMoviesList = async()=>{
    setResults([]);
    let {data}= await axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=a774571dbc6dfe2d08f3cc491d1925c6&language=en-US&page=1`);
    console.log(data);
    setResults(data.results);
    console.log(results);
    }
    useEffect(()=>{
      getMoviesList();
    },[])
    useEffect(()=>{
      getMoviesList();
    },[type])
  return (
    results.length===0?<Loader />:<div className='container mt-5 pt-4'>
      <div className="row">
      { results.map((movie,index )=>
      <div className="col-md-2">
           < MovieCard key={index} movie={movie}/>
                
           </div> )
          
}
      </div>
    </div>
  )
}

