import React, { Component } from 'react';
import {LineChart, CartesianGrid , XAxis , YAxis, Tooltip , Legend , Line } from 'recharts';
import Button from 'material-ui/RaisedButton';

const yearData = [
    {name: 'Jan', XRP: 4000, BTC: 2400, ETH: 2400},
    {name: 'Feb', XRP: 3000, BTC: 1398, ETH: 10000},
    {name: 'mar', XRP: 2000, BTC: 9800, ETH: 2290},
    {name: 'apr', XRP: 2780, BTC: 3908, ETH: 2000},
    {name: 'may', XRP: 1890, BTC: 4800, ETH: 2181},
    {name: 'jun', XRP: 2390, BTC: 3800, ETH: 2500},
    {name: 'jul', XRP: 3490, BTC: 4300, ETH: 2100},
    {name: 'aug', XRP: 4000, BTC: 2400, ETH: 2400},
    {name: 'sep', XRP: 3000, BTC: 1398, ETH: 2210},
    {name: 'oct', XRP: 2000, BTC: 9800, ETH: 2290},
    {name: 'nov', XRP: 2780, BTC: 3908, ETH: 2000},
    {name: 'dec', XRP: 1890, BTC: 4800, ETH: 2181},
    
];

const monthData = [
    {name: 'Week 1', XRP: 4000, BTC: 2400, ETH: 2400},
    {name: 'Week 2', XRP: 3000, BTC: 1398, ETH: 10000},
    {name: 'Week 3', XRP: 2000, BTC: 9800, ETH: 2290},
    {name: 'Week 4', XRP: 2780, BTC: 3908, ETH: 2000},
];

const weekData = [
    {name: 'Mon', XRP: 4000, BTC: 2400, ETH: 2400},
    {name: 'Tue', XRP: 3000, BTC: 1398, ETH: 10000},
    {name: 'Wed', XRP: 2000, BTC: 9800, ETH: 2290},
    {name: 'Thu', XRP: 2780, BTC: 3908, ETH: 2000},
    {name: 'Fri', XRP: 1890, BTC: 4800, ETH: 2181},
    {name: 'Sat', XRP: 2390, BTC: 3800, ETH: 2500},
    {name: 'Sun', XRP: 3490, BTC: 4300, ETH: 2100},
  
];

class MainChart extends Component{
    componentWillMount(){
        this.setState({
            coin: "BTC",
            charts: yearData,
        });
    }
    render(){
        return(
            <div className = "mainChartContainer">
            <div className="time-btn-group">
                <span className="coinType">Bitcoin charts: {this.state.coin}/USD</span>
                <Button className="chartButton" 
                    backgroundColor ='#4864F3' label='Year' labelColor='white' 
                    onClick={()=> {this.setState({charts: yearData});}}>
                </Button>
                <Button className="chartButton" 
                    backgroundColor ='#4864F3' label='Month' labelColor='white'
                    onClick={()=> {this.setState({charts: monthData});}}>
                </Button>
                <Button className="chartButton" 
                    backgroundColor ='#4864F3' label='Week' labelColor='white'
                    onClick={()=> {this.setState({charts: weekData});}}>
                </Button>
            </div>  
            <br/>
                <LineChart width={1200} height={200} data={this.state.charts}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey={this.state.coin} stroke="#4864F3" strokeWidth={3}
                    ref={(coin => this.coin = coin)}/>
                </LineChart>
            </div>
        );
    }
}

export default MainChart;