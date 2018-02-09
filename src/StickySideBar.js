import React, { Component } from 'react';
import SideBar from 'react-fixed-sidebar';
import IconButton from 'material-ui/IconButton';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';

import logo from './images/profileimage.JPG';


class StickySideBar extends Component {
    
    toggleSideBar = event => {
      this.sidebar.toggle();
    }
    openSideBar = event => {
        this.sidebar.open();
    }
    closeSideBar = event => {
        this.sidebar.close();
    }
    render() {
        return (
            <div>
                <SideBar className="sideBar" width = { 100 } ref={(sidebar => this.sidebar = sidebar)} >
                    <div>
                        <img src={logo} width="100" height="100"/>
                    </div>
                    <IconButton
                        iconStyle={styles.mediumIcon}
                        style={styles.medium}
                    >
                        <ActionHome onClick={this.openSideBar}/>
                    </IconButton>
                    <br/>
                    <IconButton
                        iconStyle={styles.mediumIcon}
                        style={styles.medium}
                    >
                        <ActionFlightTakeoff onClick={this.openSideBar}/>
                    </IconButton>
                    <br/>
                    <IconButton
                        iconStyle={styles.mediumIcon}
                        style={styles.medium}
                    >
                        <FileCloudDownload onClick={this.openSideBar}/>
                    </IconButton>
                </SideBar>
            </div>
        );
    }
}
const styles = {
    mediumIcon: {
      width: 48,
      height: 48,
    },
    medium: {
      width: 96,
      height: 96,
      padding: 24,
    },
  };

export default StickySideBar;