import { h, Component } from 'preact';
import style from './style';

export default class Label extends Component {
  render(props) {
    return (
        <span class={style.label}>
            {props.text}
        </span>
    );
  }
}