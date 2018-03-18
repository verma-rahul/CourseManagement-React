import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const mountNode=document.getElementById('root');
ReactDOM.render(<App />,mountNode );
registerServiceWorker();
