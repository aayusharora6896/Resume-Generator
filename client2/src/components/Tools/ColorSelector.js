import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Label, Icon, Button, Radio } from 'semantic-ui-react';
import { changeColor } from '../../actions/app.actions';
import getColorsData from '../../helpers/color.helper';
const { v4: uuidv4 } = require('uuid');

class ColorSelector extends Component {
   selectedColor  = this.props.selectedColor;
  state = {
    value: this.selectedColor,
    colors: [],
  };
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  async componentDidMount() {
    try {
    var colors = await getColorsData();
    this.setState({colors: colors.colors});
    }catch(error) {
      console.log(error);
    }
  }

  handleColorChange(e, {value}) {
    const { dispatch } = this.props;
    const selectedColor = value;
    dispatch(changeColor(selectedColor));
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="font" />
          Color
        </Label>
        <div>
          {this.state.colors.map(color=> (
            <Button
              value={color.colorHex} 
              style={{width: '40px', height: '40px', borderRadius:'50%', backgroundColor: color.colorHex}} 
              onClick={this.handleColorChange}
              key={uuidv4()}
            />
        ))}
        </div>
      </div>
    );
  }
}

ColorSelector.defaultProps = {
  dispatch: () => {},
  selectedColor: '',
};

ColorSelector.propTypes = {
  dispatch: PropTypes.func,
  selectedColor: PropTypes.string,
};

const mapStateToProps = state => ({
  selectedColor: state.tools.color,
});

export default connect(mapStateToProps)(ColorSelector);
