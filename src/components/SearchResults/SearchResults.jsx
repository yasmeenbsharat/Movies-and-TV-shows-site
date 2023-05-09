import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './SearchResults.module.css'
import Loader from '../Loader/Loader';
export default function SearchResults() {
    let [results,setResults] = useState([]);
    


    let {key}= useParams();
    console.log(key);
    const getList = async()=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=a774571dbc6dfe2d08f3cc491d1925c6&query=${key}&language=en-US&page=1&include_adult=false`);
    console.log(data);
    setResults(data.results);
    console.log(results);
    }
    useEffect(()=>{
      getList();
    },[])
    
  return (

    results.length===0?<Loader />:<div className='mt-5 pt-4 container '>


  {  results.map((movie)=>
       <div className={`mb-4 ${style.card}`}>
       <div className="row">
         <div className="col-sm-3">
           <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt =" "/>
          
         </div>
         <div className="col-sm-9">
           <div className="item-desc mt-3">
            {movie.media_type==='tv'?<>
            <h2>{movie.name}</h2>
            <span>{movie.first_air_date}</span>
            </> :<>
            <h2>{movie.title}</h2>
            <span>{movie.release_date}</span>
            </>
           
 }
            
  
             <p>{movie.overview}
             </p>
           </div>
         </div>
       </div>
     </div>
  )

  }
    </div>
  )
}
