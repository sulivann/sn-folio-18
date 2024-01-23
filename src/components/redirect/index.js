import { Component } from 'preact';
import { route } from 'preact-router';

export default class Redirect extends Component {
  componentWillMount() {
    console.log('test');
    route(this.props.to, true);
  }

  render() {
    return null;
  }
}
