import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as contactActions from "../../actions/contactActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactForm  from "../forms/updateForms/contactForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Contact = () => {
    const dispatch = useDispatch();
    const [contactVisibility, setContactVisibility] = useState(false);
    const contact_vis = useRef(false);
    useEffect(() => {
        const userContact = async () => {
          await dispatch(contactActions.getContact('60fcc884bbed863d20b02573'));
        };
        userContact();
      }, [dispatch]);
    
      useEffect(() => {
        (async () => {
          let response = await api.fetchContact('60fcc884bbed863d20b02573');
          contact_vis.current = Array(response.data.length);
          contact_vis.current.fill(true);
          setContactVisibility(() => {
            return [...contact_vis.current]
          });  
        })();
      }, [])
      const contact_data = useSelector((state) => state.contact.contact);
      const handleChange = (index) => {
        contact_vis.current[index] = !contact_vis.current[index];
        setContactVisibility(() => {
          return [...contact_vis.current]
        });
      }
    
      return (
      <Router>
        <div>
          {contact_data.map((value, index) => {
          return (
            <div>  
            {contactVisibility[index] ? <div key={index}>
            <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Contact {index+1}
              <p><span className="contactSubTitle">Phone</span> <span className="contactPhone">{ value.phone_number }</span> | <span className="contactSubTitle">Email</span> <span className="contactEmail">{ value.mail_id }</span> | <span className="contactSubTitle">Portfolio</span> <span className="contactPortfolio">{ value.web_resume }</span></p>
              <p> <span className="contactSubTitle">Github</span> <span className="contactGithub">{ value.github }</span> | <span className="contactSubTitle">Linkedin</span> <span className="contactLinkedin">{ value.linkedIn }</span> </p>
              <p><span className="contactAddress">{ value.address1 }, { value.address2 }, { value.address_city }, { value.address_state }, { value.address_country }, { value.pincode }</span></p>
              <DeleteButton elementId = { value._id } page = { "Contact" }/>
              <Link to={ `/contact/${value._id}/update` } ><UpdateButton /></Link>
            </div> : <div><VisibilityIcon onClick = {()=>handleChange(index)} /> Contact {index+1}</div>}
            </div>
          )
          })}
        </div>
        <Switch>
          <Route path="/contact/:elementId/update">
          <ContactForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Contact
