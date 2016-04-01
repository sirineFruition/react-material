/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */
var injectTapEventPlugin = require("react-tap-event-plugin");
var MUI = require ('material-ui');
var RaisedButton =MUI.RaisedButton;
var React = require('react');
var AppBar = MUI.AppBar;
var LeftNav = MUI.LeftNav;
var MenuItem = MUI.MenuItem;
var FlatButton = MUI.FlatButton;
var Link = require('react-router/lib/Link');

var TodoApp = React.createClass({

  getInitialState: function() {
return {open : false};
  },

  componentDidMount: function(){
    injectTapEventPlugin();

  },
  _handleClick: function () {
   this.setState({open: !this.state.open})
  },
  handleClose: function() {
    this.setState({open: false})
  },
  /**
   * @return {object}
   */
  render: function() {

    return (
        <div>
          <AppBar
              title="Mon Terroir"
              onClick={this._handleClick}

          />
          <LeftNav
              docked={false}
              width={400}
              open={this.state.open}
              onRequestChange={this.reqchange}
          >
            <MenuItem onClick={this.handleClose}><Link to="/Login">Login</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/TodoApp">App</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/Search">App</Link></MenuItem>


          </LeftNav>

          <RaisedButton label="Primary" primary={true} onMouseEnter={this.sayhi} />

          {this.props.children}
        </div>
    )
  },



});


module.exports = TodoApp;
