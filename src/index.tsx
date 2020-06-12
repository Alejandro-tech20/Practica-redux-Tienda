import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'antd/dist/antd.css'
import { store } from './store/store';

ReactDOM.render(
     <App store={store} />, document.getElementById('root'));
