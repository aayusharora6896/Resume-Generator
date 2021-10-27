import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as achievementsActions from "../actions/achievementsActions";
// import * as visibilityActions from "../actions/achievementsVisibilityActions";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../api';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setAchievementsVisibilities } from '../actions/profileVisibilityActions.js'

const AchievementsVisibility = (props) => {
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
  

  const achievements = useSelector((state) => state.achievements.achievements);
  const handleChange = (index) => {
    achievements_vis.current[index] = !achievements_vis.current[index];
    setAchievementsVisibility(() => {
      return [...achievements_vis.current]
    });
    props.achievementsSet(achievementsVisibility);
  }
    return (
        <div>
          {achievements.map((value, index) =>{
            return(
              <div>
                {props.achievements_visibility[index] ? <div key={index}>
              <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Achievements {index+1}
                <p><strong>{value.title}</strong></p>
                <p>{value.description}</p>
              </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Achievements {index+1} </div>}
              </div> 
            )
          })}
        </div>
     )
}

function mapStateToProps(state) {
  return {
    achievements_visibility: state.achievementsVisibility.achievements_vis,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    achievementsSet: (achievementsVisibility)=> dispatch(setAchievementsVisibilities(achievementsVisibility))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AchievementsVisibility);
