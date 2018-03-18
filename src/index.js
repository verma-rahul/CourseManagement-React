import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';


const mountNode=document.getElementById('root');
render(<App />,mountNode );
registerServiceWorker();
