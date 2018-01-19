import React from 'react';
//Componentes
import Paper from 'material-ui/Paper';
//Clase
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:["1","2","3"]
        };
    }
    
    render(){
        return(
            <div className="productList">
                <Paper className="productListBar" zDepth={3} rounded={true}>
                    <Paper className="productListBarTitle" zDepth={1}>
                        <h3>Categorias</h3>
                        <p>Tintas</p>
                        <p>Consumibles</p>
                    </Paper>
                    <div className="categoriesBox">
                    
                    </div>
                </Paper>
                <Paper className="productListResult" zDepth={1} rounded={true}>
                    {/*this.state.id.map((id)=>
                    (
                        <div key={id}className="productResult">
                            <p className="productBox">{id}</p>
                        </div>
                    )
                    )*/}
                    <Paper className="Paper">
                        200x170
                    </Paper>
                    <Paper className="Paper">
                        200x170
                    </Paper>
                    <Paper className="Paper">
                        200x170
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default ProductList;