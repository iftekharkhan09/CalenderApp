import React, {Component} from 'react';
import './promo-calender.css';
import DisplayMeasure from "../display-measure/display-measure";
import Financial from "../financial/financials";
import DisplayGrid from "../display-grid/display-grid";


class PromoCalender extends Component {
    render() {
         return (
             <div>
                <div className="week-financial">
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
                        <Financial index="8"/>
                    </div>
                </div>
                    <DisplayGrid/>
                 </div>
        );
    }
}
export default PromoCalender;
