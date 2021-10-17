import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as projectsActions from "../../actions/projectsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectsForm  from "../forms/updateForms/projectsForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Projects = () => {
    const dispatch = useDispatch();
    const [projectVisibility, setProjectVisibility] = useState(false);
    const project_vis = useRef(false);
          useEffect(() => {
        const userProjects = async () => {
          await dispatch(projectsActions.getProjects('60fcc884bbed863d20b02573'));
        };
        userProjects();
      }, [dispatch]);
    
      useEffect(() => {
        (async () => {
          let response = await api.fetchProjects('60fcc884bbed863d20b02573');
          project_vis.current = Array(response.data.length);
          project_vis.current.fill(true);
          setProjectVisibility(() => {
            return [...project_vis.current]
          });  
        })();
      }, [])

      const project_data = useSelector((state) => state.projects.projects);
    const handleChange = (index) => {
     project_vis.current[index] = !project_vis.current[index];
      setProjectVisibility(() => {
        return [...project_vis.current]
      });
    }
    return (
      <Router>
        <div>
           <p>Projects</p>
           <hr/>
           { project_data.map((value, index) => {
             return(
              <div>  
                {projectVisibility[index] ? <div key={index}>
              <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Project {index+1}
                  <p><span className="projectTitle">{ value.project_title}</span></p>
                  <p><span className="projectSkillUsed">{ value.skills_used}</span></p> 
                  <p><span className="projectDescription1">{ value.description1}</span></p> 
                  <p><span className="projectDescription2">{ value.description2}</span></p>    
                <DeleteButton elementId = { value._id } page = { "Projects" }/>
                <Link to={ `/projects/${value._id}/update` } ><UpdateButton /></Link>
               </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Project {index+1} </div> }  
               </div>  
             )
           })}
        </div>
        <Switch>
          <Route path="/projects/:elementId/update">
          <ProjectsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Projects
