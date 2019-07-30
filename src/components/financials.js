import React, {Component} from 'react';
import './financial.css';

class Financial extends Component{
    render() {
        const PromotedWeekForecast = ['30,000,000','4,20,000','14%','$500','121'];
        return (
            <div className="financial">
                <div>{PromotedWeekForecast[0]}</div>
                <div>{PromotedWeekForecast[1]}</div>
                <div>{PromotedWeekForecast[2]}</div>
                <div>{PromotedWeekForecast[3]}</div>
                <div>{PromotedWeekForecast[4]}</div>
            </div>
        );
    }
}
export default Financial;
