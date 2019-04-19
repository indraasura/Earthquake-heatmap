import React, { Component } from 'react'
import M from 'materialize-css'
import './styles/navbar.css'

class Navbar extends Component {
    state = {  }
    componentWillMount(){
        M.AutoInit()
    }
    render() { 
        return ( 
            <div>
                <nav>
                    <div className="nav-wrapper navbg">
                        <a href="index.html" className="brand-logo">Quakemap</a>
                    </div>
                </nav>  
            </div>
         );
    }
}
 
export default Navbar;