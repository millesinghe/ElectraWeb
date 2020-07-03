import React, { useState, useEffect } from 'react'
import { useDispatch, /** useSelector, */ } from 'react-redux';
import axios from 'axios';

import {actionSelectedProject, actionIsProjectSelect} from './../redux/actions'

import './Header.css'

export default function HeaderDiv() {

  const dispatchSelected = useDispatch();
  const dispatchProject = useDispatch();
  
  const [projectName, setProjectName] = useState("");
  const [projectList, setProjectList] = useState([]);

  //const electraProject = useSelector(state => state.project);

  useEffect(() => {
    axios.get("http://DESKTOP-7KQ9JNL:5000/meta/project")
      .then((response) => {
        return response.data;
      })
      .then(data => {
        let projectsFromApi = data.map(project => {
          return { display: project.name }
        });

        setProjectList([{ value: '', display: 'Select the Project' }].concat(projectsFromApi));

      }).catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div className="blur d-flex">
      <div className="mr-auto p-2"><div><h3 style={{ marginBottom: 0, marginLeft: "15px" }}> Electra </h3></div></div>
      <div className="row p-2" style={{ padding: '26px' }}>
        <h6 style={{ color: "white", marginTop: "7px", paddingRight: "10px" }}> Project : </h6>
        <select value={projectName} onChange={e => handleChange(e)} className="project-select">
          {projectList.map((team) => <option key={team.display} value={team.display}>{team.display}</option>)}
        </select>
      </div>
    </div>
  )

  function handleChange(e) {
    setProjectName(e.target.value);
    axios.get("http://DESKTOP-7KQ9JNL:5000/meta/project/byName/" + e.target.value)
      .then(res => res.data)
      .then((data) => {
        setProjectName(data.name);
        dispatchSelected(actionIsProjectSelect(true));
        dispatchProject(actionSelectedProject(data));
      });
  }

}
