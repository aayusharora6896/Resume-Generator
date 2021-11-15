import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon, Button } from 'semantic-ui-react';
import { changeFont } from '../../actions/app.actions';
import getFontsData from '../../helpers/font.helper';
const { v4: uuidv4 } = require('uuid');

class FontSelector extends Component {
  state = {
    // value: this.selectedColor,
    fonts: [],
  };
  constructor(props) {
    super(props);
    this.handleFontChange = this.handleFontChange.bind(this);
  }

  async componentDidMount() {
    try {
    var fonts = await getFontsData();
    // console.log(fonts);
    this.setState({fonts: fonts.fonts});
    // console.log(this.state.fonts)
    }catch(error) {
      console.log(error);
    }
  }
  handleFontChange(e) {
    const { dispatch } = this.props;
    const selection = e.target.selectedIndex;
    const selectedFont = this.state.fonts[selection].font;
    dispatch(changeFont(selectedFont));
  }

  render() {
    const { selectedFont } = this.props;
    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="font" />
          Font
        </Label>
        <Button
          size="large"
          fluid
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <select
            className="options-selector"
            onChange={this.handleFontChange}
            value={selectedFont}
          >
            {this.state.fonts
               .sort((f1, f2) => (f1.name < f2.name ? -1 : 0))
               .map(font => (
                 <option value={font.font} key={uuidv4()}>
                   {font.name}
                 </option>
               ))}
           </select>
        </Button>
      </div>
    );
  }
}

FontSelector.defaultProps = {
  dispatch: () => {},
  selectedFont: '',
};

FontSelector.propTypes = {
  dispatch: PropTypes.func,
  selectedFont: PropTypes.string,
};

const mapStateToProps = state => ({
  selectedFont: state.tools.font,
});

export default connect(mapStateToProps)(FontSelector);
