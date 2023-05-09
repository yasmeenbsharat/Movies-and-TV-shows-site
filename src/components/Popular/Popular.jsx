import Loader from '../Loader/Loader'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Carousel from '../Carousel/Carousel';
export default function Popular() {
    
        let [results,setResults] = useState([]);
        const onClick =  async(name) => {
            setResults([]);
            console.log(name);
        
            let {data}= await axios.get(`https://api.themoviedb.org/3/${name}/popular?api_key=a774571dbc6dfe2d08f3cc491d1925c6&language=en-US&page=1`);
            console.log(data);
             setResults(data.results);
             console.log(results);
           
          };
          useEffect(()=>{
            onClick('tv');
          },[])
  return (
    results.length===0?<Loader />:<div className='container my-5'>
    <div className="title ms-4 d-flex  list">
        <h2 className='me-4'> What's Popular </h2>
        <ul className="nav nav-tabs  rounded-pill " id="myTab" role="tablist">
            <li className= "nav-item rounded-pill">
            <a className= {`nav-link  rounded-pill`} onClick={(e)=>onClick(e.target.name)} name='tv'>On TV</a>
            </li>
            <li className="nav-item rounded-pill ">
            <a className= {`nav-link  rounded-pill`}  onClick={(e)=>onClick(e.target.name)} name='movie'> In Theaters</a>
            </li>
          
        </ul>
        </div>
        <Carousel results={results} />

            
</div>
  )
}
