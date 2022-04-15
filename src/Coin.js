import React, {Component} from "react";
import "./styles/Coin.css"
import FlipResult from "./FlipResult";

class Coin extends Component{
    static defaultProps = {
        images: ["https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png", "https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq"]
    }
    constructor(props){
        super(props);
        this.state = {
            flipStatus: false,
            flipSide: "",
            totalFlips: 0,
            headCount: 0,
            tailCount: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(){
        let side = Math.floor(Math.random() * this.props.images.length);
        if(side === 0)
        {
            this.setState(currentState => ({
                flipStatus : true,
                totalFlips: currentState.totalFlips + 1,
                headCount: currentState.headCount + 1,
                flipSide: "head"
            }));
        }
        else{
            this.setState(currentState => ({
                flipStatus : true,
                totalFlips: currentState.totalFlips + 1,
                tailCount: currentState.tailCount + 1,
                flipSide: "tail"
            }));
        }
        
    }

    render(){
        let displayCoin;
        if(this.state.flipStatus){
            if(this.state.flipSide === "head")
                displayCoin = <img className="Coin-img" src={this.props.images[0]}></img>
            else
                displayCoin = <img className="Coin-img" src={this.props.images[1]}></img>
        }
            
        return (
            <div className = "Coin">
                <h1>Let's flip a coin</h1>
                {displayCoin}
                <button className = "Coin-btn" onClick = {this.flipCoin}>Flip The Coin!!</button>
                <FlipResult 
                    totalFlips = {this.state.totalFlips}
                    headCount = {this.state.headCount}
                    tailCount = {this.state.tailCount}
                />
            </div>
        )
    }
}


export default Coin;