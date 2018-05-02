import { h, Component } from 'preact';
import Label from '../label';
import style from './style';

export default class List extends Component {
  render() {
    return (
        <div class={style.list}>
          <Label text="Find me on" />
          <ul>
            <li>
              <a href="https://github.com/sulivann/gd-folio-2018" target="_blank">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/SulivanNg" target="_blank">Twitter</a>
            </li>
            <li>
              <a href="mailto:nguyen.sulivan@gmail.com">Email</a>
            </li>
          </ul>
        </div>
    );
  }
}