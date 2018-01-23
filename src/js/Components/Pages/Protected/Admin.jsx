//Librerias
import React from 'react';
import {Link} from 'react-router-dom';
//Componentes
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//Clase
class Admin extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Paper style={{margin:"100px"}}>
                <Link to="/protected/products">
                    <RaisedButton 
                        label="Productos"
                        style={{height:"200px",width:"200px",margin:"20px"}}
                    />
                </Link>
                <Link to="/protected/categories">
                    <RaisedButton 
                        label="Categorias"
                        style={{height:"200px",width:"200px",margin:"20px"}}
                    />
                </Link>
            </Paper>
        );
    }
}

export default Admin;