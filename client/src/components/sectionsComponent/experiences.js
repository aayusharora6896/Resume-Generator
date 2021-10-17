import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as experiencesActions from "../../actions/experiencesActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExperiencesForm  from "../forms/updateForms/experiencesForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Experiences = () => {
    const dispatch = useDispatch();
    const [experienceVisibility, setExperienceVisibility] = useState(false);
    const experience_vis = useRef(false);
    useEffect(() => {
        const userExperiences = async () => {
          await dispatch(experiencesActions.getExperiences('60fcc884bbed863d20b02573'));
        };
        userExperiences();
      }, [dispatch]);
    
      useEffect(() => {
        (async () => {
          let response = await api.fetchExperiences('60fcc884bbed863d20b02573');
          experience_vis.current = Array(response.data.length);
          experience_vis.current.fill(true);
          setExperienceVisibility(() => {
            return [...experience_vis.current]
          });  
        })();
      }, [])

      const experience_data = useSelector((state) => state.experiences.experiences);
      const handleChange = (index) => {
        experience_vis.current[index] = !experience_vis.current[index];
        setExperienceVisibility(() => {
          return [...experience_vis.current]
        });
      }

      return (
      <Router>
        <div>
            <p>Experiences</p>
            <hr/>
            {experience_data.map((value, index) => {
              return(
                <div>  
                  {experienceVisibility[index] ? <div key={index}>
                <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Experience {index+1}
                  <p><span className="experienceJobPosition">{ value.job_position }</span></p>
                  <p> <span className="experienceCompany">{ value.company }</span>, <span className="experienceLocation">{ experience_data.location }</span> <span className="experienceStartDate">{ experience_data.start_date }</span> <span className="experienceEndDate">{ experience_data.end_date }</span></p>
                  <p> . <span className="experienceWorkBreif">{ value.primary_work_breif }</span> </p>
                  <p> . <span className="experienceImpact1">{ value.impact1 }</span> </p>
                  <p> . <span className="experienceImpact2">{ value.impact2 }</span> </p>
                <DeleteButton elementId = { value._id } page = { "Experiences" }/>
                <Link to={ `/experiences/${value._id}/update` } ><UpdateButton /></Link>
                </div> : <div><VisibilityIcon onClick = {()=>handleChange(index)} /> Experience {index+1}</div>}  
                </div>  
              );
            })}
        </div>
        <Switch>
          <Route path="/experiences/:elementId/update">
          <ExperiencesForm />
          </Route>
        </Switch>
      </Router>

)
}

export default Experiences
