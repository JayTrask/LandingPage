import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});



class new_Form extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,

    headerImage: undefined,
    BackgroundImage: undefined,
    landingImage: undefined

  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-helper">Header Image</InputLabel>
          <Input
            id="component-helper"
            value={this.state.headerImage}
            onChange={this.handleChange('headerImage')}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">www.url.here</FormHelperText>
        </FormControl>

      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);