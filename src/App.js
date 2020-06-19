import React, { useState } from 'react';

import './App.css'

import HeaderDiv from './HeaderDiv/Header';
import NavDiv from './NavDiv/NavDiv';
import ContentDiv from './ContentDiv/ContentDiv';

export default function App() {

  const [navClick, setNavClick] = useState("Control Room");

  function updateAppNaviState(val) {
    setNavClick(val);
  }

  return (
    <>
      {/* <h1>Project Id - {projectId} </h1>
      {isLogged ? <p>User Logged in Successfully</p> : <p>No User logged in</p>}
      <button onClick={() => dispatch(selectedProject(myProject))}>Login</button> */}
      <HeaderDiv />
      <div className="AppRow">
        <div id="navSide" className="columnApp"><NavDiv updateAppState={updateAppNaviState.bind(this)} /></div>
        <div id="homeContent" ><ContentDiv renderView={navClick} /></div>
      </div>
    </>
  )
}
