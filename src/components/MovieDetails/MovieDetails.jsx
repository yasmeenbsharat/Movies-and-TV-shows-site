import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function MovieDetails() {
    let {type,id}= useParams();
    let [result,setResult] = useState({ }); 
    const getDetails = async()=>{
        let {data}= await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=a774571dbc6dfe2d08f3cc491d1925c6&language=en-US`);
        console.log(data);
        setResult(data);
        console.log(result);
        }
        useEffect(()=>{
            getDetails();
        },[])
        // 
 return (                                                            
          Object.keys(result).length ===0?  
            <Loader />
             : <div className='mt-5 pt-1 position-relative '>
                
            <div className="poster py-5 position-relative " style={{ 
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${result.backdrop_path})`,
                backgroundSize: "cover"
            
          
              }}>
                <div className="overlay ">
                        <div className="container " >
                            <div className="row ">
                                <div className="col-md-3 ">
                                    <div className="posterImg">
                                <img className='w-100 h-100 mt-5' src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt =" "/>
                                </div>
                                </div>
                                <div className="col-md-9 mt-5 text-white">
                                {result.media_type==='tv'||result.name ? <>
                                    <h2 className='mt-5'>{result.name}</h2>
                                    <span>{result.first_air_date} </span> 
                                    <span className='ms-3'> .
                                    { result.genres.map((type)=>
                                        <span className='me-2 ms-1'>{type.name}</span> )}
                                    </span>
                                    <span>.  {result.episode_run_time}m </span>                       
                                    </>:<>
                                    <h2 className='mt-5 mb-1 mb-0'>{result.title}</h2>
                                    <span>{result.release_date}</span>
                                    <span className='ms-3'> .
                                    { result.genres.map((type)=>
                                        <span className='me-2 ms-1'>{type.name}</span> )}
                                    </span>
                                    <span>. {parseInt(result.runtime/60)}h {result.runtime-(parseInt(result.runtime/60)*60)}m </span>   </> }
            
                                     <div className="">
                                      <div className="info mt-4 d-flex g-3">
                                        <div className="d-flex">
                                        <span className="circle ">{parseInt(result.vote_average*10)}%</span>
                                        <span className='mt-2 ms-2 user'>User <br/> score</span> 
                                        </div>
                                        <div className="icons d-flex mt-1 ms-5 gap-5">
                                        <div className=" icon">
                                        <i class="fa-solid fa-list"></i>
                                        </div>
                                        <div className="icon m-0">
                                        <i class="fa-solid fa-heart"></i>
                                        </div>
                                        <div className="icon m-0">
                                        <i class="fa-solid fa-bookmark"></i>
                                        </div>
                                        <div className="icon">
                                        <i class="fa-solid fa-star"></i>
                                        </div>

                                      </div>
                                      </div>
                                      </div>

                                      <div className="desc text-white">
                                        <p className='mt-4'>{result.tagline}</p>
                                        <h4 className='mt-2 overview text-capitalize'>overview</h4>
                                        <p className='mt-2 '>{result.overview}</p>
                                      </div>
 
                                 
                                
                                </div>
                            </div>
                
                        </div> 
                        
                        </div> 
                        </div>
              </div>
        
         
  )
}
