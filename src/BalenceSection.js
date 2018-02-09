import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import GraphRevenue from './GraphRevenue';
import RaisedButton from 'material-ui/RaisedButton';

class BalenceSection extends Component{
    componentWillMount(){
        this.setState({
            BTCPrice : "8000",
            totalAmount: "35678",
        });
    }

    render(){
        return(
            <div className="balenceSectionDiv">
            <div className="currentCoin">
                <h2 className="balenceLabel">Balence</h2><br/>
                <h4 className="coinType balenceLabel">BTC</h4>
                <h1 className="coinValue">
                $ <AnimatedNumber value={this.state.BTCPrice}
                    stepPrecision = {3} />
                </h1><br/>
                $ <AnimatedNumber value={this.state.totalAmount} 
                    stepPrecision={3} />
                <div className="green">
                <AnimatedNumber className="priceVariation" value={58} 
                    stepPrecision={3} /> %
                </div>
            </div>
            <div className = "tradeCoin">
            
            <RaisedButton className="buttonClass" backgroundColor ='#4864F3' labelColor='white' label="sell" />
            <RaisedButton className="buttonClass" backgroundColor ='#4864F3' labelColor='white' label="buy" />
            <RaisedButton className="buttonClass" backgroundColor ='#4864F3' labelColor='white' label="order" />
            
            </div>
            <GraphRevenue graphlabel="your total revenue" priceVariation="58"/>
            <GraphRevenue graphlabel="current order volume" priceVariation="3456"/>
            </div>
        );
    }
}
    
export default BalenceSection;