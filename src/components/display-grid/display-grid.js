import React, {Component} from 'react';
import BarComponent from "../promo-bar/bar-component";
import GridComponent from "./grid-component";

class DisplayGrid extends Component{
    render() {
        const barcomponent1 = {
            x : 250,
            y: 0,
            height: 20,
            width:300
        };

        const barcomponent2 ={
            x : 450,
            y:  120,
            height: 20,
            width:500
        };

        const barcomponent3 ={
            x : 400,
            y:150,
            height: 20,
            width:50
        };
        return (
            <div className="promo-graph">
                <BarComponent barcomponent={barcomponent1}/>
                <BarComponent barcomponent={barcomponent2}/>
                <BarComponent barcomponent={barcomponent3}/>
                <div className="grid">
                    <div className="product-name">Coke 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div className="product-name">Cole lite 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div className="product-name">Fanta 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div className="product-name">Limca 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div className="product-name">Orange 330 ml<br></br></div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div className="product-name">Sprite 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                </div></div>
        );
    }
}
export default DisplayGrid;
