import React, { useState } from 'react'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import Trending from '../Trending/Trending';
import Popular from '../Popular/Popular';
export default function Header() {
let [search,setSearch] =useState();
let navigate = useNavigate();
 const onSubmit =(e)=>{
     console.log(search);
  navigate(`/searchResults/${search}`);
 }
  return (
   
   
    <div>
       <header >
        <div className={` ${style.header} container mt-4 ms-auto d-flex justify-content-center flex-column text-white`}>
        <h2  className ='ms-4' >Welcome.</h2>
        <h3 className ='ms-4 mb-4'>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <div className="search mt-4" onSubmit={onSubmit}>
          <form className="position-relative">
          <input className={`form-control rounded-pill ms-4 py-2  ${style.searchInput}`}onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search for a movie, tv show, person......" aria-label="Search"  />
          <button className={`btn btn-default-outline  py-2 px-4 rounded-pill position-absolute ${style.searchIcon}` } >
          Search
            </button>
          </form>
        </div>
        </div>
        <Trending />
        <Popular />
        </header>    
    </div>
  )
}
