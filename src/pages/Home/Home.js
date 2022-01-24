import React from "react";
import { useSelector  } from "react-redux";
import './Home.css';

/* import Routess from '../../routes.js' */
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

import { Routes, Route } from "react-router-dom";
import All, {News, Images, Videos} from '../../components/Results/Results.js';


export default function Home() {
  const {darkMode} = useSelector( state => state.darkMode );

  if(darkMode)
    document.body.classList.add('dark')
  else
    document.body.classList.remove('dark')

  return (
    <>  
      <div className="container-home">

        <Header/> 

        <div className="body">
        <Routes>
            <Route exact path="/" element={<All/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/images" element={<Images/>} />
            <Route path="/videos" element={<Videos/>} />
        </Routes>
        </div>

        <Footer/>
            
      </div>
    </>
  );
}


