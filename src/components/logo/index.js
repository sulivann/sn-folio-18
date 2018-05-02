import { h, Component } from 'preact';
import style from './style';

export default class Logo extends Component {
  render() {
    return (
        <div class={style.logo}>
          <h1>sng</h1>
          <div class={style.line}></div>
        </div>
    );
  }
}