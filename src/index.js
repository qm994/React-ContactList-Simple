import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from  "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    // whenever the url in App compo changes, the ui also change
    <BrowserRouter>
        <App />
    </BrowserRouter>,
 document.getElementById('root'));

registerServiceWorker();
