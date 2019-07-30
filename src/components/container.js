import React, {Component} from 'react';
import './container.css';
import DisplayMeasure from "./display-measure";
import Financial from "./financials";
import './financial.css'
import './week-financial-container.css'
import DisplayBy from "./display-by";
import Grid from "./grid";

class Container extends Component {
    render() {
         return (
             <div>
                <div className="container">
                    <DisplayMeasure/>
                    <div className="financial-container">
                        <Financial />
                        <Financial />
                        <Financial />
                        <Financial />
                        <Financial />
                        <Financial />
                        <Financial />
                        <Financial />
                    </div>
                </div>
                 <div className="container">
                    <DisplayBy/>
                    <Grid/>
                 </div>
             </div>
        );
    }
}
export default Container;
