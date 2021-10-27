import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../../actions/profileActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfileForm  from "../forms/updateForms/profileForm";
import ProfileVisibility from '../../functions/profileVisibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { connect } from 'react-redux';
import * as api from '../../api';
import {setProfileVisibilities} from '../../actions/profileVisibilityActions.js'


const Profile = (props) => {
  // const dispatch = useDispatch();
  // const [profileVisibility, setProfileVisibility] = useState(false);
  // const profile_vis = useRef(false);
  // useEffect(() => {
  //   const userProfile = async () => {
  //     await dispatch(profileActions.getProfile('60fcc884bbed863d20b02573'));
  //   };
  //   userProfile();
  // }, [dispatch]);

  // useEffect(() => {
  //   (async () => {
  //     let response = await api.fetchProfile('60fcc884bbed863d20b02573');
  //     profile_vis.current = Array(response.data.length);
  //     profile_vis.current.fill(true);
  //     setProfileVisibility(() => {
  //       return [...profile_vis.current]
  //     });  
  //   })();
  // }, [])

  const [tryProp,setTryProp] = useState([true]);
  const [tryP,setTryP] = useState(["true", "false"]);

  // useEffect(() => {
  //   setTryProp(tryProp);
  //   console.log("tryProp" + tryProp);
  // }, [JSON.stringify(props.profile_visibility)])
  
  useEffect(()=>{
    console.log("Hi ayush");
    const pro = async () => {
      await setTryProp(() =>{
        return props.profile_visibility
      })
    };
    pro();
  },[props])
  

  const printProps = () =>{
    console.log(props.profile_visibility);
    console.log(JSON.stringify(props.profile_visibility));
    console.log(tryProp[0]);
  }

  const profile = useSelector((state) => state.profile.profile);
  // const handleChange = (index) => {
  //   profile_vis.current[index] = !profile_vis.current[index];
  //   setProfileVisibility(() => {
  //     return [...profile_vis.current]
  //   });
  // }

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
  

    return (
      <Router>
        <div>
          <h1> {count} </h1>
          <h1 onClick={()=> printProps()}> Gandu </h1>
          <h3>{tryProp[0]}</h3>
          {tryProp.map((item,index) => {
            return <div><h3 key={item}>{tryProp[index].toString()}</h3>
          <h1 key={tryProp[index]}> {tryProp[index]?"Hi":"Bye"} </h1></div>
          })}
          {/* <h3>{props.profile_visibility[0]}</h3> */}
          {/* <h1 key={props.profile_visibility[0]}> {props.profile_visibility?"Hi":"Bye"} </h1> */}
          {profile.map((value, index) =>{
            return(
              // <div>  
              //   {profileVisibility[index] ? <div key={index}>
              // <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Profile {index+1}
              //   <p className="profileName">
              //     { value.first_name } { value.last_name }
              //   </p>
              //   {/* <DeleteButton elementId = { value._id } page = { "Profile" }/> */}
              //   {/* <Link to={ `/profile/${value._id}/update` } ><UpdateButton /></Link> */}
              // </div> : <div> <VisibilityIcon onClick = {()=>handleChange(index)} /> Profile {index+1}</div>}
              // </div>
              <div>
                {/* {props.profile_visibility[index] ? <p className="profileName"> {value.first_name} {value.last_name}</p> : null} */}
              </div>
            )
          })}
        </div>
        {/* <Switch>
          <Route path="/profile/:elementId/update">
          <ProfileForm />
          </Route>
        </Switch> */}
      </Router>
    )
}

function mapStateToProps(state) {
  // console.log("state is" + JSON.stringify(state));
  return {
    profile_visibility: state.profileVisibility.profile_vis,
    counter: state.profileVisibility.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileSet: (profileVisibility)=> dispatch(setProfileVisibilities(profileVisibility))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
