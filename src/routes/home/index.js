import { h, Component } from 'preact';
import Logo from '../../components/logo';
import Label from '../../components/label';
import Line from '../../components/line';
import Work from '../../components/work';
import Description from '../../components/description';
import List from '../../components/list';
import style from './style.css';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <div class={style.container}>
          <header>
            <Logo />
          </header>
          <section class={style.content}>
            <div class={style.mobile}>
              <Label text='selected work'/>
              <div class={style.works}>
                <div>
                  <Work
                    label='David Taing 2017'
                    img='../../assets/img/td.jpg'/>
                </div>
                <div>
                  <Work
                    label='Gauthier Drllx 2018'
                    img='../../assets/img/gd.jpg'/>
                </div>
              </div>
            </div>
            <div class={style.about}>
              <Label text='about me'/>
              <Line />
              <Description />
              <List />
            </div>
            <img class={style.smiley} src="../../assets/img/smiley.png" />
          </section>
        </div>
      </div>
    );
  }
}
