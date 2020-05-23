import React from 'react';

import './App.css'

import HeaderDiv from './HeaderDiv/Header';
import NavDiv from './NavDiv/NavDiv';
import ContentDiv from './ContentDiv/ContentDiv';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      navClick :""
    }
  }

  updateAppNaviState(val){
    console.log("App - " +val);
    this.setState({navClick : val})
    console.log(this.state.navClick);
  }

  render() {
    return (
      <>
        <HeaderDiv />
      <div className="row">
        <div id="navSide" className="column"><NavDiv updateAppState= {this.updateAppNaviState.bind(this)} /></div>
        <div id="homeContent" className="column" ><ContentDiv /></div>
      </div>
      </>
    )
  }
}
