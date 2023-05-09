import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar(props) {
  
  let navigate = useNavigate();
  const onClick =  async(name,type) => {
     navigate(`/${type}/${name}`);}


  return (
    
    <div >
     <nav className={`navbar navbar-expand-lg bg-body-tertiary py-2 fixed-top ${style.navbar}`}>
  <div className="container">
    <Link className={`navbar-brand ${style.logo}`} to="/header">
   <img src="./images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo" width={150} height={30} className="d-inline-block align-text-top" />

    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {
      props.user? <>
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
        <li className={`nav-item ${style.navbarNavItem}  `}>
          <a className={`nav-link ${style.navbarNavLink} active position-relative `} aria-current="page" to="">Movies</a>
          <ul className={``}>
                        <li><a  onClick={(e)=>onClick(e.target.name,"movie")} name='popular'> Popular</a></li>
                        <li><a onClick={(e)=>onClick(e.target.name,"movie")} name='now_playing'> Now Playing</a></li>
                        <li><a onClick={(e)=>onClick(e.target.name,"movie")} name='upcoming'> Upcoming</a></li>
                        <li><a onClick={(e)=>onClick(e.target.name,"movie")} name='top_rated'> Top Rated</a></li>

                    </ul> 
                   
        </li>
        <li className={`nav-item ${style.navbarNavItem} `}>
          <a  className={`nav-link ${style.navbarNavLink} `} to="/tv/popular">TV Show</a>
          <ul className={``}>
                        <li><a  onClick={(e)=>onClick(e.target.name,'tv')} name='popular'> Popular</a></li> 
                        <li><a onClick={(e)=>onClick(e.target.name,'tv')} name='airing_today'> Airing Today</a></li> 
                        <li><a onClick={(e)=>onClick(e.target.name,'tv')} name='on_the_air'> On TV</a></li>
                        <li><a onClick={(e)=>onClick(e.target.name,'tv')} name='top_rated'> Top Rated</a></li>

                    </ul> 
        </li>
        <li className={`nav-item ${style.navbarNavItem} `}>
          <a className={`nav-link ${style.navbarNavLink} `}to="/people">People</a>
          <ul className={``}>
                        <li><a  onClick={()=>navigate(`/people`)} name='popular'> Popular People </a></li> 
                    </ul> 
        </li>
       
      </ul></>:null}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      { props.user==null?<>
        <li className="nav-item">
          <Link className={`nav-link ${style.navbarNavLink} `} to="/login">Log In</Link> 
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.navbarNavLink} `} to="/signup">Join TMDB</Link>
        </li></>:null}
        {
      props.user?<>
        <li className="nav-item">
          <span className="nav-link text-white" onClick={props.logout}>Log Out</span>
        </li> </>:null}
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}
