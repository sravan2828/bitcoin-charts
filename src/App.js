import React, { Component } from 'react';
import { render } from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import StickySideBar from './StickySideBar';
import Header from './Header';
import BalenceSection from './BalenceSection';
import CardBlock from './CardBlock';
import MainChart from './MainChart';
import './App.css';


class App extends Component {

  toggleSideBar(){
    this.sidebar.toggleSideBar();
  }
  closeSideBar(){
    this.sidebar.closeSideBar();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="mainContainer">
          <StickySideBar ref={sidebar => this.sidebar = sidebar}/>
          <Header onClick={this.toggleSideBar.bind(this)}/>          
          <div onClick={this.closeSideBar.bind(this)}>
          <BalenceSection />
          <CardBlock/>
          <MainChart ref={coin => this.coin = coin}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
