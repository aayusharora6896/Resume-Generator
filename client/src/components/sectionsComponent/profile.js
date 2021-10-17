import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../../actions/profileActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfileForm  from "../forms/updateForms/profileForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Profile = () => {
  const dispatch = useDispatch();
  const [profileVisibility, setProfileVisibility] = useState(false);
  const profile_vis = useRef(false);
  useEffect(() => {
    const userProfile = async () => {
      await dispatch(profileActions.getProfile('60fcc884bbed863d20b02573'));
    };
    userProfile();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      let response = await api.fetchProfile('60fcc884bbed863d20b02573');
      profile_vis.current = Array(response.data.length);
      profile_vis.current.fill(true);
      setProfileVisibility(() => {
        return [...profile_vis.current]
      });  
    })();
  }, [])
  

  const profile = useSelector((state) => state.profile.profile);
  const handleChange = (index) => {
    profile_vis.current[index] = !profile_vis.current[index];
    setProfileVisibility(() => {
      return [...profile_vis.current]
    });
  }
    return (
      <Router>
        <div>
          {profile.map((value, index) =>{
            return(
              <div>  
                {profileVisibility[index] ? <div key={index}>
              <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Profile {index+1}
                <p className="profileName">
                  { value.first_name } { value.last_name }
                </p>
                <DeleteButton elementId = { value._id } page = { "Profile" }/>
                <Link to={ `/profile/${value._id}/update` } ><UpdateButton /></Link>
              </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Profile {index+1}</div>}
              </div> 
            )
          })}
        </div>
        <Switch>
          <Route path="/profile/:elementId/update">
          <ProfileForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Profile;
