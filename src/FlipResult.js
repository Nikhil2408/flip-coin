import React, {Component} from "react";

class FlipResult extends Component{
    render(){
        return (
            <p>Out of {this.props.totalFlips} flips, {this.props.headCount} are heads and {this.props.tailCount} are tails</p>
        )
    }
}

export default FlipResult;