import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as skillsActions from "../../actions/skillsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SkillsForm  from "../forms/updateForms/skillsForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/VisibilityOff';
import * as api from '../../api';
////////// TODO Change the way script is stored so that we can add rating of efficiancy.

const Skills = () => {
    const dispatch = useDispatch();
    const [skillVisibility, setSkillVisibility] = useState(false);
    const skill_vis = useRef(false);
    useEffect(() => {
  const userSkills = async () => {
    await dispatch(skillsActions.getSkills('60fcc884bbed863d20b02573'));
  };
  userSkills();
}, [dispatch]);

useEffect(() => {
  (async () => {
    let response = await api.fetchSkills('60fcc884bbed863d20b02573');
    skill_vis.current = Array(response.data.length);
    skill_vis.current.fill(true);
    setSkillVisibility(() => {
      return [...skill_vis.current]
    });  
  })();
}, [])

const skill_data = useSelector((state) => state.skills.skills);
const handleChange = (index) => {
  skill_vis.current[index] = !skill_vis.current[index];
  setSkillVisibility(() => {
    return [...skill_vis.current]
  });
}

    return (
      <Router>
        <div>
            <p>Skills</p>
            <hr/>
            {skill_data.map((value, index) => {
              return(
                <div>  
                {skillVisibility[index] ? <div key={index}>
                <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Skill {index+1}
                  <p><span className="skillsTitle">{ value.skills_title }</span></p>
                  <p><span className="skillsSkillSet">{value.skillSet}</span></p>
                {/* <DeleteButton elementId = { value._id } page = { "Skills" }/> */}
                {/* <Link to={ `/skills/${value._id}/update` } ><UpdateButton /></Link> */}
               </div> : <div><VisibilityIcon onClick = {()=>handleChange(index)} /> Skill {index+1}</div> }
               </div>
              )
            })}   
        </div>
        <Switch>
          <Route path="/skills/:elementId/update">
          <SkillsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Skills
