//Librerias
import React from 'react';
//Componentes
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import View from 'material-ui/svg-icons/action/view-headline';
//Clase
class ShowProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
        this.handleOpen=this.handleOpen.bind(this);
        this.handelClose=this.handleClose.bind(this)
    }
    
    handleOpen(){
        this.setState({open:true});
    };
    
    handleClose(){
        this.setState({open:false});
    }
    
    render(){
        const actionsAddProduct=[
            <RaisedButton
                label="Aceptar"
                onClick={this.handelClose}
                style={{margin:"auto 5px"}}
            />,
            <RaisedButton
                label="Cancelar"
                onClick={this.handelClose}
                style={{margin:"auto 5px"}}
            />
        ];
        return(
            <div style={{width:"150px",margin:"auto"}}>
                <RaisedButton
                  label="Mostrar"
                  labelPosition="after"
                  icon={<View />}
                  style={{margin:"2px",width:"100%"}}
                  onClick={this.handleOpen}
                />
                <Dialog
                  title="Dialog With Actions"
                  modal={true}
                  actions={actionsAddProduct}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}
export default ShowProduct;