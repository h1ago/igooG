import React from "react";
import './Toggle.css';

import { useDispatch } from "react-redux";

export default function Toggle(){
    const dispatch = useDispatch();

    return (
        <div className="toggleWrapper">
            <input 
                type="checkbox" 
                className="dn" 
                id="dn"
                onClick={ () => {
                    /* if(document.body.classList.contains('dark'))
                        document.body.classList.remove('dark');
                    else
                    document.body.classList.add('dark') */
                    dispatch({type: 'SET_THEME_DARK'});
                } }
            />
            <label for="dn" className="toggle">
                <span className="toggle__handler">
                <span className="crater crater--1"></span>
                <span className="crater crater--2"></span>
                <span className="crater crater--3"></span>
                </span>
                <span className="star star--1"></span>
                <span className="star star--2"></span>
                <span className="star star--3"></span>
                <span className="star star--4"></span>
                <span className="star star--5"></span>
                <span className="star star--6"></span>
            </label>
        </div>
    )
}

