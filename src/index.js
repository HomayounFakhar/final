import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Storage from './context/Storage'
//ReactDOM.render(<Menuitems />, document.getElementById('Menuitems'));

ReactDOM.render(
  <React.StrictMode>
    <Storage>
    <App />   
    </Storage>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
