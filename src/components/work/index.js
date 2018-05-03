import { h, Component } from 'preact';
import style from './style';

export default class Work extends Component {
  componentDidMount() {
    this.txt = this.container.querySelector('h2');
    this.arrow = this.container.querySelector('img');

    this.mouse = {};
    this.angle = {};

    this.container.addEventListener('mousemove', (event) => this.handleMouseMove(event));
    this.container.addEventListener('mouseout', (event) => this.handleMouseOut(event));
  }

  handleMouseMove(event) {
    this.mouse.y = event.pageY - this.container.offsetTop;
    this.mouse.x = event.pageX - this.container.offsetLeft;
    this.angle.y = (0.5 - (this.mouse.x / 470)) * 35;
    this.angle.x = (0.5 - (this.mouse.y / 470)) * 25;

    this.txt.style = `transform: perspective(500px) translateZ(0px) rotateX(${this.angle.x}deg) rotateY(${this.angle.y}deg) translateY(${this.angle.x}px)`;
    this.arrow.style = `transform: perspective(500px) translateZ(0px) rotateX(${this.angle.x * 1.5}deg) rotateY(${this.angle.y}deg) translateY(${this.angle.x * 3.5}px) translateX(${this.angle.y * 0.5}px)`;
    this.shadow.style = `transform: scale(1.2) perspective(500px) translateZ(0px) rotateX(${this.angle.x * 1.2}deg) rotateY(${this.angle.y * 1.2}deg)`;
    this.img.style = `transform: perspective(500px) translateZ(0px) rotateX(${this.angle.x * 0.05}deg) rotateY(${this.angle.y * 0.05}deg);background-image: url("${this.props.img}"`;
  }

  handleMouseOut() {
    this.txt.style = 'transform: perspective(500px) translateZ(0) rotateX(0) rotateY(0) translateY(0); transition: transform 500ms';
    this.shadow.style = 'transform: scale(1.2) perspective(500px) translateZ(0) rotateX(0) rotateY(0); transition: transform 500ms;';
    this.img.style = `transform: perspective(500px) translateZ(0) rotateX(0) rotateY(0); transition: transform 500ms;background-image: url("${this.props.img}"`;
  }

  render(props) {
    return (
        <div
          ref={elem => this.container = elem}
          class={style.work}>
          <div
            ref={elem => this.img = elem}
            class={style.image}
            style={`background-image: url("${props.img}")`}>
            <div
              ref={elem => this.shadow = elem}
              class={style.shadow}></div>
          </div>
          <h2>{props.label}</h2>
          <img src="../../assets/img/arrow.svg" />
        </div>
    );
  }
}