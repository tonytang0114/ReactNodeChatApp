import React from 'react';
import ReactDOM from 'react-dom';
import './Components/css/index.css';
import MainApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
