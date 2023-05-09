
import OwlCarousel from 'react-owl-carousel';
import React, { useState } from 'react'
import style from './Carousel.module.css'
 import MovieCard from '../MovieCard/MovieCard';
export default function Carousel(props) {
   let {results}=props;
 
  return (
    <div className={`${style.carousel} mt-5`}>
    <OwlCarousel items={7.5}
            className='owl-theme'
           >
           { results.map((movie,index )=>
           < MovieCard key={index} movie={movie}/>
                
                )
          
}

            </OwlCarousel>
</div>)
}
