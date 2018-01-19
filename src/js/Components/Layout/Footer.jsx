
import React from 'react';

class Footer extends React.Component {
	
	render() {
		return (
			<footer>
				<div className="footerInfo">
					<div>
						<p>Dirección:</p>
					</div>
					<div>
						<p>Teléfonos:</p>
					</div>
				</div>
				<div className="copyright">
					<p>Copyright© 2017 Print Ink Suministros e Insumos</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
