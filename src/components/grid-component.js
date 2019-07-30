import React, {Component} from 'react';
import './display-by.css';

class GridComponent extends Component{
    onDragStart = (e) =>{
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData( "text/plain", 'Moved Data' )
    };

    allowDrop = ev =>{
        ev.preventDefault();
    };

    onDropLeft = e =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        console.log('came here');
        /*let {leftContainer} = this.state;
        leftContainer.push(data);
        this.setState({ leftContainer });*/
    };

    onDropRight = e =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        let {rightContainer} = this.state;
        rightContainer.push(data);
        this.setState({ rightContainer });
    };
    render() {
        return (
            <div className="columnName1">
            </div>
        );
    }
}
export default GridComponent;
