import React from "react";
import './Search.css';
import { useDispatch } from "react-redux";

import Navbar from "../Navbar/Navbar.js";

export default function Search() {

  const dispatch = useDispatch();

  return (
    <div className="search-container">
        <input 
              type="text" 
              className="searchInput" 
              placeholder="Pesquisa igooG"
              onKeyPress={ e => { 
                if(e.key==='Enter'){
                  dispatch({
                    type: 'GET_RESULTS_SEARCH_REQUEST',
                    payload: {searchTerm: e.target.value, page: 0}
                  });
                }
              }}
        />

        <Navbar />
        
    </div>
  );
}


