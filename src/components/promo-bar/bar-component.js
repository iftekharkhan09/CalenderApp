import React, {Component} from 'react';
import '../display-grid/display-grid.css';
import {Rnd} from "react-rnd";

class BarComponent extends Component {
    updateSize(width) {
        this.rnd.updateSize({ width: width });
    }
    updatePosition(x) {
        this.rnd.updatePosition({ x: x });
    }
    isInt(n) {
        return Number(n) === n && n % 1 === 0;
    }

    render() {
        const x = this.props.barcomponent.x;
        const y = this.props.barcomponent.y;
        const width = this.props.barcomponent.width;
        const height = this.props.barcomponent.height;
        const productNameColumnWidth = 250;
        const gridWidth = 200;
        let startIndex;

        return (
            <Rnd ref={c => { this.rnd = c; }} dragAxis='x'
                default={{
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                }}
                 bounds=".promo-graph"
                 /*onDragStop={(e, d) => {
                     let endGridIndex = Math.floor((startIndex - productNameColumnWidth) / gridWidth) ;
                     let diff = startIndex - productNameColumnWidth - (endGridIndex*gridWidth);
                     let nearestGridIndex = Math.floor((d.x - productNameColumnWidth) / gridWidth);
                     let updatedXCoordinate = productNameColumnWidth + (gridWidth * nearestGridIndex);
                     this.updatePosition(updatedXCoordinate+diff);
                 }}*/
                 onDragStart={(e, d) => {
                     startIndex = d.x;
                 }}
                onDrag={(e,d)=>{
                    let barWidth = d.node.offsetWidth-1;
                    if(e.x >= 1600){
                        this.updateSize(barWidth)

                    }
                    // let barWidth = d.node.offsetWidth;
                    // let totalContainerWidth = productNameColumnWidth + (gridWidth*8);
                    // let endPosition = startIndex + barWidth;
                    // let diff = endPosition - totalContainerWidth;
                    // if(diff  > 0){
                    //     console.log('came here!!');
                    //  this.updateSize(barWidth-diff);
                    // }
            }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    console.log('direction',direction);
                    if(direction.toUpperCase().includes('RIGHT')) {
                        this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position,
                        });
                        let totalWidthFromIndexPosition = (Number(position.x) + Number(this.state.width.replace('px', '')));
                        let endGridIndex = (totalWidthFromIndexPosition - productNameColumnWidth) / gridWidth;
                        if (!this.isInt(endGridIndex))
                            endGridIndex = Math.floor(endGridIndex) + 1;
                        let diff = Number(position.x - productNameColumnWidth);
                        let finalWidth = gridWidth * endGridIndex - diff;
                        this.updateSize(finalWidth);
                    }
                    else if(direction.toUpperCase().includes('LEFT')){
                        this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position,
                        });
                        let endPosition = position.x;
                        if(endPosition - productNameColumnWidth > 0) {
                            let nearestGridIndex = Math.floor((endPosition - productNameColumnWidth) / gridWidth);
                            let updatedXCoordinate = productNameColumnWidth + (gridWidth * nearestGridIndex);
                            let diff = endPosition - updatedXCoordinate;
                            this.updatePosition(updatedXCoordinate);
                            this.updateSize(diff + Number(this.state.width.replace('px', '')));
                        }
                    }
                }}
            >
                <div className='draggable-item'>12.5%</div>
            </Rnd>
        );
    }
}
export default BarComponent;
