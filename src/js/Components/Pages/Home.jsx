//Librerias
import React from 'react';
//Componentes
import Paper from 'material-ui/Paper';
import SvgIcon from 'material-ui/SvgIcon';
//Clase
class Home extends React.Component{
    //states de prueba
    constructor(props){
        super(props);
        this.state={
            count:0,
            images:
            [
                "https://image.flaticon.com/sprites/new_packs/181501-interface.png",
                "https://www.artescritorio.com/wp-content/uploads/2015/11/monsterball-portada.png",
                "https://www.muycomputer.com/wp-content/uploads/2012/10/whatsapp-630x405.jpg"
            ],
            texts:[
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli"
            ],
            products:[
                {
                    id:1,name:"Producto 1",type:"Tipo 1",info:"Especificaciones"
                },
                {
                    id:2,name:"Producto 2",type:"Tipo 1",info:"Especificaciones"
                },
                {
                    id:3,name:"Producto 3",type:"Tipo 2",info:"Especificaciones"
                }
            ]
        };
        this.changeImg=this.changeImg.bind(this);
        this.rightArrow=this.rightArrow.bind(this);
        this.leftArrow=this.leftArrow.bind(this);
    }
    //Inicia el contador antes de montar los componentes
    componentDidMount(){
        this.timeHandler= setInterval(()=>this.changeImg(),5000);
        
    }
    //Limpia el contador antes de desmontar el componente
    componentWillUnmount(){
        clearTimeout(this.timeHandler);
    }
    //Hace cambio automatico de imagenas en el Home, entre 3 imagenes
    changeImg(){
        let c=this.state.count;
        if(this.state.count>=2){
            this.setState({
                count:0
            });
        }
        else{
            this.setState({
                count:c+1
            });
            
            
        }
    }
    //Cambia la imagen a la derecha
    rightArrow(){
        let c=this.state.count;
        this.setState({count:c+1});
        if(this.state.count>=2){
            this.setState({count:0});
        }
    }
    //Cambia la imagen a la izquierda
    leftArrow(){
        let c=this.state.count;
        this.setState({count:c-1});
        if(this.state.count<=0){
            this.setState({count:2});
        }
    }
    //Render
    render(){
        return(
            <Paper className="homeContent">
                <Paper className="Carousel">
                    <div onClick={this.leftArrow}>
                        <SvgIcon className="arrowCarousel">
                            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        </SvgIcon>
                    </div>
                    <div className="imgCarouselDiv">
                        <img className="imgCarousel" src={this.state.images[this.state.count]}/>
                    </div>
                    <div className="textCarouselDiv">
                        <p className="textCarousel">{this.state.texts[this.state.count]}</p>
                    </div>
                    <div onClick={this.rightArrow}>
                        <SvgIcon className="arrowCarousel">
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        </SvgIcon>
                    </div>
                </Paper>
                <div className="lastProductBar">
                    <p className="lastProductTitle">Ultimos productos</p>
                </div>
                <Paper className="lastProducts">
                    <Paper className="typeProduct">
                        <p className="typeProductTitle">Tipos de productos</p>
                    </Paper>
                    <Paper className="productContainer">
                        {this.state.products.map((product)=>
                            (
                            <Paper className="productItem" key={product.id}>
                                <img className="productImg" src="https://image.flaticon.com/sprites/new_packs/181501-interface.png"/>
                                <p>{product.name}</p>
                                <button>Ver más</button>
                            </Paper>
                            )
                        )}
                    </Paper>
                        
                </Paper>
            </Paper>
            
        );
    }
}

export default Home;