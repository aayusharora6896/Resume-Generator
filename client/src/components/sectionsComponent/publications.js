import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as publicationsActions from "../../actions/publicationsActions";
import DeleteButton from "./deleteButton";
import UpdateButton from "./updateButton";
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicationsForm  from "../forms/updateForms/publicationsForm";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as api from '../../api';

const Publications = () => {
    const dispatch = useDispatch();
    const [publicationVisibility, setPublicationVisibility] = useState(false);
    const publication_vis = useRef(false);
    useEffect(() => {
        const userPublications = async () => {
          await dispatch(publicationsActions.getPublications('60fcc884bbed863d20b02573'));
        };
        userPublications();
      }, [dispatch]);

      useEffect(() => {
        (async () => {
          let response = await api.fetchPublications('60fcc884bbed863d20b02573');
          publication_vis.current = Array(response.data.length);
          publication_vis.current.fill(true);
          setPublicationVisibility(() => {
            return [...publication_vis.current]
          });  
        })();
      }, [])
    
    const publications_data = useSelector((state) => state.publications.publications);
    const handleChange = (index) => {
      publication_vis.current[index] = !publication_vis.current[index];
      setPublicationVisibility(() => {
        return [...publication_vis.current]
      });
    }

    return (
      <Router>
        <div>
          <p>Publications</p>
          <hr/>
          {publications_data.map((value, index) => {
              return ( 
                <div>  
                  {publicationVisibility[index] ? <div key={index}>         
                <VisibilityOffIcon onClick = {()=>handleChange(index)} /> Publication {index+1}
                <p><span className="publicationTitle">{value.publication_title}</span></p>
                <p><span className="publicationDetails">{value.journal_conference_name}, {value.other_details}</span></p>
                <p><span className="publicationCoauthors">{value.coauthors}</span></p>
                <p><span className="publicationDescription">{value.brief_description}</span></p>
                {/* <DeleteButton elementId = { value._id } page = { "Publications" }/> */}
                {/* <Link to={ `/publications/${value._id}/update` } ><UpdateButton /></Link> */}
                </div> : <div><VisibilityIcon onClick = {()=>handleChange(index)} /> Publication {index+1}</div> }
                </div>
              );
          })}
        </div>
        <Switch>
          <Route path="/publications/:elementId/update">
          <PublicationsForm />
          </Route>
        </Switch>
      </Router>
    )
}

export default Publications
