import React, {Component} from 'react';
import './financial.css';

class Financial extends Component{
    render() {
        const PromotedWeekForecast = ['30,000,000','4,20,000','14%','$500','121'];
        const week = ['Week 14','Week 15','Week 16','Week 17','Week 18','Week 19','Week 20','Week 21','Week 22','Week 23','Week 24','Week 25','Week 26','Week 27','Week 28','Week 29','Week 30','Week 31','Week 32','Week 33','Week 34','Week 35','Week 36','Week 37'];
        const date = ['04/01/19','10/01/19','16/01/19','23/01/19','29/01/19','05/02/19','11/02/19','17/02/19','04/01/19','10/01/19','16/01/19','23/01/19','29/01/19','05/02/19','11/02/19','17/02/19','04/01/19','10/01/19','16/01/19','23/01/19','29/01/19','05/02/19','11/02/19','17/02/19'];
        return (
            <div className="financial">
                <div>{week[this.props.index]} <br></br>{date[this.props.index]}</div>
                <br></br>
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
