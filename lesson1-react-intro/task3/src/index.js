import './styles.css';
const rootElement = document.querySelector('#root');

const element = (
  <div class="greeting">
    <h1 class="greeting__title">Hello, world!</h1>
    <p class="greeting__text">I am learning React</p>
  </div>
);

ReactDOM.render(element, rootElement);

