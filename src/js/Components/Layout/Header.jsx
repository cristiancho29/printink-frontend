//Librerias
import React from 'react';
import {Link} from 'react-router-dom';
//Componentes
import Nav from './Nav.jsx';
//Clase
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <header>
                <Link to="/" className="linkHeader"><p className="homeTitle">Print Ink Suministros e Insumos</p></Link>
                <Nav loggedIn={this.props.loggedIn}/>
            </header>
        );
    }
}

export default Header;