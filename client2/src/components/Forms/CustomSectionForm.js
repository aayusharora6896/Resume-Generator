import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomSection from './CustomSection';
import { Grid, Header, Segment, Form, Button } from 'semantic-ui-react';
// {
//   customSectionForm
// }
export const customSectionForm = (props) =>
(<div> 
    {props.customSectionForm.map(sec => (
      <div>
        <h3>{sec.field}</h3>
        <CustomSection sec={sec.field} handleChange={props.handleChange}/>
      </div>  
))}</div>)

customSectionForm.defaultProps = {
  customSectionForm: [],
};

customSectionForm.propTypes = {
  customSectionForm: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  customSectionForm: state.resume.customSections,
});

export default connect(mapStateToProps)(customSectionForm);
