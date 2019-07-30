import React, {Component} from 'react';
import './container.css';
import DisplayMeasure from "./display-measure";
import Financial from "./financials";
import './financial.css'

class Container extends Component{
    render() {
        const noOfTimes = 8;
         return (
            <div className="container">
                <div><DisplayMeasure/></div>
                <div className="financial-container">
                    <Financial />
                    <Financial />
                    <Financial />
                    <Financial />
                </div>
                </div>
        );
    }
}
export default Container;
