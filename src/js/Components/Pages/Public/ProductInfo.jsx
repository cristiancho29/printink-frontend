//Librerias
import React from 'react';
import info from './../../../../../info.js';
import axios from 'axios';

class ProductInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product:{
                name:"Producto no encontrado"
            }
        };
    }
    
    componentDidMount(){
        axios.get(info.apiURL+"/products/"+this.props.id)
        .then(function(res){
            console.log(res);
            this.setState({product:res.data});
        }.bind(this))
        .catch(function(err){
            console.log(err);
        });
    }
    
    render(){
        return(
            <div>
                {this.state.product.name}
            </div>
        );
    }
}
export default ProductInfo;