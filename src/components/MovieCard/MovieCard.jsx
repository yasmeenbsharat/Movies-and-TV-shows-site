import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function MovieCard( props) {
  let {key,movie}=props;
  let navigate = useNavigate();
  const moreDetails=(type,id) =>{
  
    navigate(`/movieDetails/${type}/${id}`)
  }

  return (
    <div className="movie-card me-5 ms-4" key={key}>
    <div className="movie-poster position-relative">
        <div className="img-div position-relative">
        <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt =" "/>
        {movie.media_type==='tv'||movie.name ? <>
        <div className="details position-absolute"  onClick={()=>moreDetails('tv',movie.id)}>...</div>
                </> :<>
        <div className="details position-absolute"  onClick={()=>moreDetails('movie',movie.id)}>...</div>
                </>
            
    }
       
        </div>
        <span className="circle position-absolute">{parseInt(movie.vote_average*10)}%</span>
    </div>
    <div className="movie-info py-4 ">
         {movie.media_type==='tv'||movie.name ? <>
                <h6 className='mt-1'>{movie.name}</h6>
                <span>{movie.first_air_date}</span>
                </> :<>
                <h6 className='mt-1'>{movie.title}</h6>
                <span>{movie.release_date}</span>
                </>
            
    }
        </div>
    </div>
  )
}
