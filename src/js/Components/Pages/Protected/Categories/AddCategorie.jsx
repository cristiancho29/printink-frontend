//Librerias
import React from 'react';
//Componentes
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
//Clase
class AddCategorie extends React.Component{
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
            <div>
                <RaisedButton
                  label="Agregar categoría"
                  labelPosition="after"
                  icon={<AddIcon />}
                  style={{margin:"auto 5px"}}
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
export default AddCategorie;