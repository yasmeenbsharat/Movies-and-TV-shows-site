
import axios from 'axios';
import Loader from '../Loader/Loader'
import React, { useEffect, useState } from 'react';
export default function People() {

    let [results,setResults] = useState([]);
     
     const getPeopleList = async()=>{
      setResults([]);
      let {data}= await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=a774571dbc6dfe2d08f3cc491d1925c6&language&language=en-US&page=1`);
      console.log(data);
      setResults(data.results);
      console.log(results);
      }
      useEffect(()=>{
        getPeopleList ();
      },[])
    
    return (
      results.length===0?<Loader />:<div className='container mt-5 pt-4'>
        <div className="row">
        { results.map((person,index )=>
        <div className="col-md-3">
             <div className="person-card  my-3 me-5 ms-4" key={index}>
     <div className="person-poster position-relative">
        <div className="img-div position-relative">
        <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt =" "/>
        </div>
    </div>
    <div className="person-info my-2 ms-2">
                <h6 className=''>{person.name}</h6>
                <span>{person.known_for_department}</span>
        </div>
    </div>
             </div> )
            
  }
        </div>
      </div>
    )
  }
  
  