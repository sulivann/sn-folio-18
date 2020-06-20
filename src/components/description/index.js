import { h, Component } from 'preact';
import style from './style';

export default class Description extends Component {
  render() {
    return (
        <div class={style.description}>
          Hello, I'm a front-end developer based in Paris.
          <br />
          Currently working as a software engineer at Osmo.
        </div>
    );
  }
}
