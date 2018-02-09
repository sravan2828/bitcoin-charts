import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class CardBlock extends Component{
    componentWillMount(){
        this.setState({
            BTCDepth: 5,
            ETHDepth: 1,
            XRPDepth: 1,
            BTCStyle: styleSelected,
            ETHStyle: styleUnSelected,
            XRPStyle: styleUnSelected,
        });
    }
    toggleBTCDepth(){
            this.setState({
                BTCDepth: 5,
                ETHDepth: 1,
                XRPDepth: 1,
                BTCStyle: styleSelected,
                ETHStyle: styleUnSelected,
                XRPStyle: styleUnSelected,
            });
        
    };
    toggleETHDepth(){
        this.setState({
            BTCDepth: 1,
            ETHDepth: 5,
            XRPDepth: 1,
            BTCStyle: styleUnSelected,
            ETHStyle: styleSelected,
            XRPStyle: styleUnSelected,
        });
    };
    toggleXRPDepth(){
        this.setState({
            BTCDepth: 1,
            ETHDepth: 1,
            XRPDepth: 5,
            BTCStyle: styleUnSelected,
            ETHStyle: styleUnSelected,
            XRPStyle: styleSelected,
        });
    }
    render(){
        return(
            <div className="cardBlock">
       
                <Paper style={this.state.BTCStyle} zDepth={this.state.BTCDepth} 
                    onClick={()=> {this.toggleBTCDepth(this)}}>
                    <span className="coinBlockNameSelected">Bitcoin</span><br/>
                    <span className="coinBlockValueSelected">10000$</span>
                </Paper>
                <Paper style={this.state.ETHStyle} zDepth={this.state.ETHDepth} 
                    onClick={()=> {this.toggleETHDepth(this)}}>
                    <span className="coinBlockNameSelected">Etherium</span><br/>
                    <span className="coinBlockValueSelected">1000$</span>
                </Paper>
                <Paper style={this.state.XRPStyle} zDepth={this.state.XRPDepth} 
                    onClick={()=> {this.toggleXRPDepth(this)}}>
                    <span className="coinBlockNameSelected">Ripple</span><br/>
                    <span className="coinBlockValueSelected">2.5$</span>
                </Paper>
            </div>
        );
    }
}
const styleSelected = {
    height: 100,
    width: 140,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#4864F3',
  };
const styleUnSelected = {
    height: 100,
    width: 140,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'rgb(106, 121, 198)',
  };

  

export default CardBlock;