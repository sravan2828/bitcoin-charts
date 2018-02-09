import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component{

    render(){
        return(
            <AppBar
                title="Account overview"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onClick={this.props.onClick}
                style={{
                    backgroundColor: '#4864F3',
                  }}
            />
        );
    }
}

export default Header;