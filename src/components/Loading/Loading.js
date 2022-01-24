import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './Loading.css';

export default function Loading(){
    return (
        <div className="loading">
            <ClipLoader color="#00BFFF" loading="true" size={100} />
        </div>
    )
};
