import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav">
            <ul>
               <li>
               <Link to="/">Home</Link>
                </li> 
               <li>
               <Link to="/Product">Product</Link>
                </li> 
               
              
                
            </ul>
        </div>
    )
}
