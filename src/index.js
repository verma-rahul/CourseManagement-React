import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import AppRouter from './routes';
import { Provider } from 'react-redux';

const mountNode=document.getElementById('root');

const CourseManager = () => (
 <Provider store={store}>
    <AppRouter />
    </Provider>
);

render(<CourseManager/>,mountNode );
registerServiceWorker();
