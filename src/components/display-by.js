import React, {Component} from 'react';
import './display-by.css';
import GridComponent from "./grid-component";
import {Rnd} from "react-rnd";

class DisplayBy extends Component{
    render() {

        return (
            <div>
                <Rnd
                    default={{
                        x: 0,
                        y: 0,
                        width: 320,
                        height: 200,
                    }}
                >
                    <div className='draggable-item'> Drag me</div>
                </Rnd>
                <div className="grid">
                    <div className="columnName">Coke 330 ml</div>
                    <div className="columnName1"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Cole lite 330 ml</div>
                    <div className="columnName1"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Fanta 330 ml</div>
                    <div className="columnName1"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Limca 330 ml</div>
                    <div className="columnName1"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Orange 330 ml<br></br></div>
                    <div className="columnName1"></div>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <GridComponent/>
                    <div>Sprite 330 ml</div>
                    <div className="columnName1"></div>
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
export default DisplayBy;
