import React, {Component} from 'react';
import './display-measure.css';

class DisplayMeasure extends Component{
    render() {
        return (
            <div className="display-measure">
                <div>
                    Display Measure ROI
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div>
                Promoted weeks forecast
                </div>
                <div>
                    Non Promoted weeks forecast
                </div>
                <div>
                    Total forecast
                </div>
                <div>
                    Markdown $
                </div>
                <div>
                    Number Of promotion
                </div>
            </div>
        );
    }
}
export default DisplayMeasure;
