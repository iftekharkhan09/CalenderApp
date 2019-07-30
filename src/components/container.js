import React, {Component} from 'react';
import './container.css';
import DisplayMeasure from "./display-measure";
import Financial from "./financials";
import './financial.css'
import DisplayBy from "./display-by";

class Container extends Component {
    render() {
         return (
             <div>
                <div className="container">
                    <DisplayMeasure/>
                    <div className="financial-container">
                        <Financial index="0"/>
                        <Financial index="1"/>
                        <Financial index="2"/>
                        <Financial index="3"/>
                        <Financial index="4"/>
                        <Financial index="5"/>
                        <Financial index="6"/>
                        <Financial index="7"/>
                    </div>
                </div>
                    <DisplayBy/>
                 </div>
        );
    }
}
export default Container;
