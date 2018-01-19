//Librerias
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
//Componentes
import AppBar from 'material-ui/AppBar';
//Componentes

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isRedirected:false
		};
		
	}
	
	logout(){
		this.props.logout();
		this.setState({
			isRedirected:true
		});
	}
	render() {
		return (
			<div>
			{this.props.loggedIn ? 
				(
					<nav>
						<ul>
							<li><Link className="link" to="/dashboard">Administrar Productos</Link></li>
							<li><Link className="link" to="/" onClick={this.props.logout}>Cerrar Sesión</Link></li>
				    	</ul>
				    	{(this.state.isRedirected ? 
							(
								<Redirect to="/" />
							)
							:
							(
								<div/>
							)
						)}
					</nav>
					
					
					
				)
				:
				(
					<nav >
						<ul>
							<li><Link className="link" to="/login">Iniciar Sesión</Link></li>
							<li><Link className="link" to="/about">Conocenos</Link></li>
							<li><Link className="link" to="/products">Nuestros Productos</Link></li>
				    	</ul>
					</nav>
				)
			}
			</div>
		);
	}
}

export default Nav;
