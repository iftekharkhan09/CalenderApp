import React, {Component} from 'react';
import BarComponent from "../promo-bar/bar-component";
import GridComponent from "./grid-component";

class DisplayGrid extends Component{
    allowDrop = ev =>{
        ev.preventDefault();
    };
    onDrop = ev =>{
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(data);
    };
    render() {
        const barcomponent1 = {
            x : 0,
            y:0,
            width: 320,
            height: 200,
        };

        const barcomponent2 ={
            x : 273,
            y:  150,
            width: 320,
            height: 200,
        };

        const barcomponent3 ={
            x : 300,
            y:200,
            width: 320,
            height: 200,
        };
        return (
            <div className="promo-graph" onDragOver={this.allowDrop} onDrop={this.onDrop}>
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
                </div>
            </div>
        );
    }
}
export default DisplayGrid;
