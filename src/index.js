import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const API_KEY =`${process.env.REACT_APP_API_KEY_YT}`;
console.log("API", API_KEY);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
