//Librerias
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

//Componentes
import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Public/Login.jsx';
import ProductInfo from './Pages/Public/ProductInfo.jsx';
import ProductList from './Pages/Public/ProductList.jsx';
import ProductManagement from './Pages/Protected/Products/ProductManagement.jsx'
import CategorieManagement from './Pages/Protected/Categories/CategorieManagement.jsx'
import Admin from './Pages/Protected/Admin.jsx'


class Main extends React.Component {
	constructor(){
	super();
        this.state = {
        	loggedIn: false,
        	token:""
        }
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
	}
	
	login(token){
		this.setState({
			loggedIn:true,
			token:token
		});
	}
	
	logout(){
		this.setState({
			loggedIn:false,
			token:""
		});
	}
	
	render() {
		return (
			<Router>
				<main>
					
					<Header loggedIn={this.state.loggedIn} logout={this.logout} />
					
					<div className="routes">
						<Route exact path="/" component={()=>(<Home/>)}/>
						<Route path="/login" component={()=>(<Login login={this.login}/>)}/>
						<Route path="/productInfo/:_id?" component={()=>(<ProductInfo id={"5a43d9b8bfc"}/>)}/>
						<Route path="/products" component={()=>(<ProductList />)}/>
						<Route exact path="/protected/products" component={()=>(<ProductManagement />)}/>
						<Route exact path="/protected" component={()=>(<Admin />)}/>
						<Route exact path="/protected/categories" component={()=>(<CategorieManagement />)}/>
					</div>
					<Footer />
				</main>
			</Router>
		);
	}
}

export default Main;
