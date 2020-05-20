import React from 'react';

import './App.css'

import HeaderDiv from './HeaderDiv/Header';
import NavDiv from './NavDiv/NavDiv';
import ContentDiv from './ContentDiv/ContentDiv';


function App() {

  return (
    <>
      <HeaderDiv />
      <div className="row">
        <div id="navSide" className="column"><NavDiv/></div>
        <div id="homeContent" className="column" ><ContentDiv /></div>
      </div>
    </>
  )

}

export default App;
