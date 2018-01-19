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
import Paper from 'material-ui/Paper'
//Clase
class Dashboard extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            products:[]
        };
    }
    
    render(){
        return(
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
                            <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Productos
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Código">Código</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Nombre">Nombre</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Categoría">Categoría</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Opciones">Opciones</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
            </Paper>
        );
    }
}

export default Dashboard;