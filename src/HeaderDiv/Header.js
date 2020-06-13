import React, { Component } from 'react'
import axios from 'axios';

import './Header.css'

export default class HeaderDiv extends Component {

  state = {
    projectName: "",
    btnImportPressed: false,
    project: {
      connection_Password: "",
      connection_SSID: "",
      id: 0,
      name: ""
    },
    projectList: []
  }

  render() {
    return (
      <div className="blur d-flex">
        <div className="mr-auto p-2"><div><h3 style={{ marginBottom: 0, marginLeft: "15px" }}> Electra </h3></div></div>
        <div className="row p-2" style={{ padding: '26px' }}>
          <h6 style={{ color: "white", marginTop: "7px", paddingRight: "10px" }}> Project : </h6>
          {/*<input onChange={this.handleChange} className="flex2 project-input"></input>
          <button className="flex1 button-import" onClick={() => { this.importProject() }}>Import</button> */}
          <select value={this.state.projectName} onChange={e => this.handleChange(e)} className="project-select">
            {this.state.projectList.map((team) => <option key={team.display} value={team.display}>{team.display}</option>)}
          </select>
          <div className="flex1 project-status">{this.filterMessage()}</div>
          <div className="flex4"></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    axios.get("http://localhost:5000/meta/project")
      .then((response) => {
        return response.data;
      })
      .then(data => {
        let projectsFromApi = data.map(project => {
          return { display: project.name }
        });

        this.setState({
          projectList: [{ value: '', display: 'Select the Project' }].concat(projectsFromApi)
        });
      }).catch(error => {
        console.log(error);
      });
  }

  importProject() {
    this.setState({ BtnImportPressed: true });
    axios.get("http://localhost:5000/meta/project/byName/" + this.state.projectName)
      .then(res => res.data)
      .then((data) => {
        this.setState({ Project: data });
      });
  }

  handleChange(e) {
    this.setState({ ProjectName: e.target.value });
    axios.get("http://localhost:5000/meta/project/byName/" + e.target.value)
      .then(res => res.data)
      .then((data) => {
        this.setState({ projectName : data.name, project: data });
      });
    console.log("sss");
  }

  filterMessage() {
    return !this.state.btnImportPressed ? "" : this.state.project.name === undefined || this.state.project.name === "" ? <div className="failed">Invalid</div> : <div className="success">Success</div>
  }

}
