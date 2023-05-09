import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
import Movies from "./components/Movies/Movies";
import TVShow from "./components/TVShow/TVShow";
import Footer from "./components/Footer/Footer";
import People from "./components/People/People";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Notfound from "./components/NotFound/Notfound";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
export default function App() {
  let [userData, setUserData] = useState(null);
  let navigate = useNavigate();
  function getUserData() {
    let decoded = jwtDecode(localStorage.getItem("userToken"));
    setUserData(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem("userToken")) getUserData();
  }, []);
  function logout() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }
  return (
    <div>
      <Navbar logout={logout} user={userData} />
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/login"
          element={<Login getUserData={getUserData} />}
        ></Route>
        <Route element={<ProtectedRouter />}>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/movie/:type" element={<Movies />}></Route>
          <Route path="/tv/:type" element={<TVShow />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route
            path="/movieDetails/:type/:id"
            element={<MovieDetails />}
          ></Route>
          <Route path="/searchResults/:key" element={<SearchResults />}></Route>
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      {userData ? <Footer /> : null}
    </div>
  );
}
