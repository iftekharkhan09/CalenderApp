import React, {Component} from 'react';
import '../display-grid/display-grid.css';
import {Rnd} from "react-rnd";

class BarComponent extends Component {
    render() {
        return (
            <Rnd disableDragging={true}
                default={{
                    x: this.props.barcode.x,
                    y: this.props.barcode.y,
                    width: this.props.barcode.width,
                    height: this.props.barcode.height,
                }}

                onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.style.height,
                        height: ref.style.height,
                        ...position,
                    });
                    console.log('previous width was -- ',(ref.style.width.replace('px','') - delta.width));
                    console.log('width changed by -- ',delta.width);
                }}
            >
                <div className='draggable-item '>Drag/Resize Me</div>
            </Rnd>
        )
    }
}
export default  BarComponent;
