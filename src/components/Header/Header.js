import './Header.css';

import Search from '../Search/Search.js';
import Toggle from '../Toggle/Toggle.js';
import { useSelector  } from "react-redux";


export default function Header(){
    const {darkMode} = useSelector( state => state.darkMode );

    return(
        <div className="header">
            <div className="container-header">

                {
                    darkMode
                    ? <a href="/"><img className='logo' src={process.env.PUBLIC_URL + '/logo-dark.png'} alt="logo"/></a>
                    : <a href="/"><img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></a> 
                }
                
                <Search />
                <Toggle/>
            </div>
        </div>
    );
}