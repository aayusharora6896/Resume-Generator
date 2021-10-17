import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as educationActions from "../../actions/educationActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EducationForm  from "../forms/updateForms/educationForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Education = () => {
    const dispatch = useDispatch();
    const [educationVisibility, setEducationVisibility] = useState(false);
    const education_vis = useRef(false);
    useEffect(() => {
        const userEducation = async () => {
          await dispatch(educationActions.getEducation('60fcc884bbed863d20b02573'));
        };
        userEducation();
        }, [dispatch]);

    useEffect(() => {
      (async () => {
        let response = await api.fetchEducation('60fcc884bbed863d20b02573');
        education_vis.current = Array(response.data.length);
        education_vis.current.fill(true);
        setEducationVisibility(() => {
          return [...education_vis.current]
        });  
      })();
    }, [])

  const education_data = useSelector((state) => state.education.education);
  const handleChange = (index) => {
    education_vis.current[index] = !education_vis.current[index];
    setEducationVisibility(() => {
      return [...education_vis.current]
    });
  }
  
    return (
      <Router>
        <div>
            <p> Education </p>
            <hr />
            {education_data.map((value, index) => {
              return ( 
              <div>  
                {educationVisibility[index] ? <div key={index}> <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Education {index+1}
                    <p><span className="educationUniversityName">{ value.university_name }</span>, <span className="educationUniversityCity">{ value.university_city }</span>, <span className="educationUniversityState">{ value.university_state }</span>  <span className="educationMonthBegin">{ value.month_begin }</span> <span className="educationYearBegin">{ value.year_begin }</span> - <span className="educationMonthEnd">{ value.month_end }</span> <span className="educationYearEnd">{ value.year_end }</span></p>
                    <p><span className="educationDegreeName">{ value.degree_name }</span> in <span className="educationDomainName">{ value.domain_name }</span> <span className="educationGpa">{ value.GPA }</span></p>
                    <DeleteButton elementId = { value._id } page = { "Education" }/>
                    <Link to={ `/education/${value._id}/update` } ><UpdateButton /></Link>
                  </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Education {index+1} </div>}
              </div>
              )
            })}
        </div>
        <Switch>
          <Route path="/education/:elementId/update">
          <EducationForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Education

