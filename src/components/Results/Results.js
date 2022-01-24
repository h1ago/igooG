import './Results.css';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading.js';

import {useSelector} from 'react-redux';



export function All(){

    
    const {loading, error, results, searchTerm} = useSelector( state => state.search );

    if(loading)
        return <Loading/>;


    if(error)
        return <h1>Erro na consulta dos dados</h1> ;
          
    return (
        <> 
            <div className="all-container">
            {
                results.map( (result, index) => (
                    
                    <div className="item-all" key={index}>
                        <a href={result.link}>
                            <h3>{result.title}</h3>
                            <p>{result.link}</p>
                        </a>
                        <span>{result.snippet}</span>
                    </div>
                ))
            }
            </div>
            
            {
                results.length > 0 &&
                <div className="pagination-container">
                    <Pagination searchTerm={searchTerm}/>
                </div>
            }
            
        </>
    );
}

export function News(){
    return (
        <>
            <h1>Hellow News</h1>
        </>
    );
}

export function Images(){
    return (
        <>
            <h1>Hellow Images</h1>
        </>
    );
}

export function Videos(){
    return (
        <>
            <h1>Hellow Videos</h1>
        </>
    );
}



export default All;