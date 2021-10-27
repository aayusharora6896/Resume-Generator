import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as achievementsActions from "../../actions/achievementsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AchievementsForm  from "../forms/updateForms/achievementsForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Achievements = () => {
    const dispatch = useDispatch();
    const [achievementsVisibility, setAchievementsVisibility] = useState(false);
    const achievements_vis = useRef(false);
    useEffect(() => {
        const userAchievements = async () => {
          await dispatch(achievementsActions.getAchievements('60fcc884bbed863d20b02573'));
        };
        userAchievements();
      }, [dispatch]);
      
      useEffect(() => {
        (async () => {
          let response = await api.fetchAchievements('60fcc884bbed863d20b02573');
          achievements_vis.current = Array(response.data.length);
          achievements_vis.current.fill(true);
          setAchievementsVisibility(() => {
            return [...achievements_vis.current]
          });  
        })();
      }, [])
      
      const achievements_data = useSelector((state) => state.achievements.achievements);
      const handleChange = (index) => {
        achievements_vis.current[index] = !achievements_vis.current[index];
        setAchievementsVisibility(() => {
          return [...achievements_vis.current]
        });
      }
      return (
      <Router>
        <div>
          <p>Achievements</p>
          <hr/>
          {achievements_data.map((value, index) => {
              return ( 
               <div>
                {achievementsVisibility[index] ? <div key={index}>  
                <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Achievements {index+1}         
                <p><strong>{value.title}</strong></p>
                <p>{value.description}</p>
                {/* <DeleteButton elementId = { value._id } page = { "Achievements" }/> */}
                {/* <Link to={ `/achievements/${value._id}/update` } ><UpdateButton /></Link> */}
                </div> : <div><VisibilityIcon onClick = {()=>handleChange(index)} /> Achievements {index+1}</div>}
                </div>
              );
          })}
        </div>
        <Switch>
          <Route path="/achievements/:elementId/update">
          <AchievementsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Achievements
