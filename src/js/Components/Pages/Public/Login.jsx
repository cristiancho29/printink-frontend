//Librerias
import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
//Componentes
import info from './../../../../../info.js';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            message:"",
            isLogged:false,
            loginDate:new Date()
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit(e){
        //Hace el post a la API
        axios.post(info.apiURL+"/users/login",{
            username:this.state.username,
            password:this.state.password
        })
        .then(function(res){
            //Valida si la petición fue exitosa o no
            if(res.data.success!==true){
                this.setState({
                    message:res.data.message
                });
            }
            else{
                this.setState({
                    username:"",
                    password:"",
                    isLogged:true
                });
                this.props.login(res.data.token);
            }
        }.bind(this))
        .catch(function(err){
            console.log(err);
        });
        e.preventDefault();
    }
    
    render(){
        return(
            
            <div className="loginContent">
                <p>Iniciar Sesión</p>
                <form className="form">
                    <input placeholder="Usuario" type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                    <input placeholder="Contraseña" type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Ingresar</button>
                    {this.state.isLogged ? 
                    (
                        <Redirect to="/" />
                    ):
                    (
                        <p>{this.state.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default Login;