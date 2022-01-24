import React from "react";
import './Pagination.css';

import { useDispatch } from "react-redux";

export default function Pagination(props) {
  const dispatch = useDispatch();


  return (
    <>  
      <ol>
        <li className="arrows"><a><i className="fa fa-chevron-left"></i></a></li>
        
        {
          Array(10).fill('').map( (_, index) =>{
           
            return <li key={index}>
                      <a
                        href="#"
                        onClick={() => dispatch({
                            type: 'GET_RESULTS_SEARCH_REQUEST',
                            payload: {searchTerm: props.searchTerm, page: index}
                          })
                        }
                      >
                        {index + 1}
                      </a>
                  </li>
          })
        }

        <li className="arrows"><a><i className="fa fa-chevron-right"></i></a></li>
      </ol>

    </>
  );
}
