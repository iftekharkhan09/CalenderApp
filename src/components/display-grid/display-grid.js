import React, {Component} from 'react';
import BarComponent from "../promo-bar/bar-component";
import GridComponent from "./grid-component";

class DisplayGrid extends Component{
    render() {
        const barData1 = {
            x : 0,
            y:0,
            width: 320,
            height: 200,
        };

        const barData2 ={
            x : 200,
            y:10,
            width: 320,
            height: 200,
        };

        const barData3 ={
            x : 200,
            y:200,
            width: 320,
            height: 200,
        };
        return (
            <div className="promo-graph">
                <BarComponent barcode={barData2}/>
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
                    <div>Cole lite 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Fanta 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Limca 330 ml</div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Orange 330 ml<br></br></div>
                    <div className="grid-cell"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Sprite 330 ml</div>
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
