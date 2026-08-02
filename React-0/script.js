

let h1 = document.createElement('h1');
h1.textContent = 'Hello, World!';
document.body.appendChild(h1);

let rh1 = React.createElement('h1',{className: 'header'}, React.createElement('span', null, 'Hello, React!'));

let root = document.querySelector('#root');

let rootOfReact = ReactDOM.createRoot(root);
rootOfReact.render(rh1);

import { a, sum } from './main.js';

console.log(a);
console.log(sum(1, 2));


let ReactDiv = React.createElement('div', {className: 'container'},[
    React.createElement('h1', null, React.createElement('span', null, 'This is a heading inside the React div.')), React.createElement('h2', null, React.createElement('span', null, 'This is a 2 heading inside the React div.')),
]);

    rootOfReact.render(ReactDiv);