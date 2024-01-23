import { Component } from 'preact';
import { route } from 'preact-router';

export default class Redirect extends Component {
  componentWillMount() {
    window.location.replace(this.props.to);
  }

  render() {
    return null;
  }
}
