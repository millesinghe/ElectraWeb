import React from 'react';

import './App.css'

import HeaderDiv from './HeaderDiv/Header';
import NavDiv from './NavDiv/NavDiv';
import ContentDiv from './ContentDiv/ContentDiv';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      navClick :"Control Room"
    }
  }

  updateAppNaviState(val){
    this.setState({navClick : val})
 
  }

  render() {
    return (
      <>
        <HeaderDiv />
      <div className="AppRow">
        <div id="navSide" className="columnApp"><NavDiv updateAppState= {this.updateAppNaviState.bind(this)} /></div>
        <div id="homeContent" ><ContentDiv renderView = {this.state.navClick}/></div>
      </div>
      </>
    )
  }
}
