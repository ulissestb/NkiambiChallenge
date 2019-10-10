import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/Header'

import "./Main.css"

export default function Main(){

    

    return(
        <div className="Main-container">
            <Header />
            <div className="btn">
                <Link to="/planets">
                <button>
                    Começar
                </button>
                </Link>
            </div>
         </div>
    )
}