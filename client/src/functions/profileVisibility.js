import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../actions/profileActions";
import * as visibilityActions from "../actions/profileVisibilityActions";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../api';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setProfileVisibilities,setCounter} from '../actions/profileVisibilityActions.js'

const ProfileVisibility = (props) => {
  const dispatch = useDispatch();
  const [profileVisibility, setProfileVisibility] = useState(false);
//   const [profileVisibility, setProfileVisibility] = useReducer(visibilityActions, false);
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
      console.log(response.data.length);
      profile_vis.current.fill(true);
      setProfileVisibility(() => {
        return [...profile_vis.current]
      });
      props.profileSet(profile_vis.current);  
    })();
  }, [])
  

  const profile = useSelector((state) => state.profile.profile);
  const handleChange = (index) => {
    // console.log(profileVisibility);
    // console.log(props.profile_visibility);
    profile_vis.current[index] = !profile_vis.current[index];
    setProfileVisibility(() => {
      return [...profile_vis.current]
    });
    props.profileSet(profile_vis.current);
  }

const [count,setCount] = useState(0);

useEffect(()=>{
  const cou = async () => {
    await setCount(() =>{
      return props.counter
    })
  };
  cou();
    console.log("Hi kheman");
},[props])

  const incrementCounter = (x) => {
    // console.log(profileVisibility);
    // console.log(props.profile_visibility);
    // console.log("I am clicked")
    props.counterSet(x);
    setCount(props.counter);
  }

    return (
        <div>
          <h1>{count}</h1>
          <button onClick={()=>incrementCounter(count)}>Add me</button>
          {/* {profile.map((value, index) =>{
            return(
              <div>
                {props.profile_visibility[index] ? <div key={index}>
              <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Profile {index+1}
                <p className="profileName">
                  { value.first_name } { value.last_name }
                </p>
              </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Profile {index+1} </div>}
              </div> 
            )
          })} */}
        </div>
     )
}

function mapStateToProps(state) {
  // console.log("state is" + JSON.stringify(state));
  return {
    profile_visibility: state.profileVisibility.profile_vis,
    counter:state.profileVisibility.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileSet: (profileVisibility)=> dispatch(setProfileVisibilities(profileVisibility)),
    counterSet: (counter)=> dispatch(setCounter(counter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileVisibility);
