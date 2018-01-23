//Librerias
import React from 'react';
//Componentes
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AddProduct from './AddProduct.jsx'
import ShowProduct from './ShowProduct.jsx'
import EditProduct from './EditProduct.jsx'
import DeleteProduct from './DeleteProduct.jsx'
//Clase
class ProductManagement extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            products:[]
        };
    }
    render(){
        return(
            <div className="containerContent" style={{textAlign:"right", margin:"20px 20px"}}>
                <AddProduct />
                <Paper className="dashboardContent">
                    <Table className="tableProducts"
                        height="400px"
                        fixedHeader={true}
                    >
                        <TableHeader 
                            adjustForCheckbox={false}
                            displaySelectAll={false}
                        >
                            <TableRow >
                                <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                                    Productos
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn tooltip="Código">Código</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                                <TableHeaderColumn tooltip="Categoría">Categoría</TableHeaderColumn>
                                <TableHeaderColumn 
                                    tooltip="Opciones"
                                    style={{textAlign:"center"}}
                                >
                                    Opciones
                                </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            showRowHover={true}
                        >
                            <TableRow>
                                <TableRowColumn>Código</TableRowColumn>
                                <TableRowColumn>Nombre</TableRowColumn>
                                <TableRowColumn>Categoria</TableRowColumn>
                                <TableRowColumn 
                                    style={{textAlign:"center"}}
                                >
                                    <ShowProduct />
                                    <EditProduct />
                                    <DeleteProduct />
                                </TableRowColumn>
                              </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default ProductManagement;