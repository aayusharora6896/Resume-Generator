import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon, Button } from 'semantic-ui-react';
import { changeFontSize } from '../../actions/app.actions';
import getFontSizesData from '../../helpers/font.sizes.helper';
const { v4: uuidv4 } = require('uuid');

class FontSizeSelector extends Component {
  state = {
    fontSize: [],
  }
  constructor(props) {
    super(props);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  }

  async componentDidMount() {
    try {
    var fontSizes = await getFontSizesData();
    // console.log(fonts);
    this.setState({fontSize: fontSizes.fontSizes});
    // console.log(this.state.fonts)
    }catch(error) {
      console.log(error);
    }
  }

  handleFontSizeChange(e) {
    const { dispatch } = this.props;
    const selection = e.target.selectedIndex;
    const selectedFontSize = this.state.fontSize[selection].fontSize;
    dispatch(changeFontSize(selectedFontSize));
  }

  render() {
    const { selectedFontSize } = this.props;
    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="font" />
          Font Size
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
            onChange={this.handleFontSizeChange}
            value={selectedFontSize}
          >
            {this.state.fontSize
              .sort((a, b) => (a.fontSize < b.fontSize ? -1 : 0))
              .map(size => (
                <option value={size.fontSize} key={uuidv4()}>
                  {size.fontSize}
                </option>
              ))}
          </select>
        </Button>
      </div>
    );
  }
}

FontSizeSelector.defaultProps = {
  dispatch: () => {},
  selectedFontSize: '',
};

FontSizeSelector.propTypes = {
  dispatch: PropTypes.func,
  selectedFontSize: PropTypes.number,
};

const mapStateToProps = state => ({
  selectedFontSize: state.tools.fontSize,
});

export default connect(mapStateToProps)(FontSizeSelector);
