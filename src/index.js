import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Storage from './context/Storage'
import Filtering from './context/Filtering'

//ReactDOM.render(<Menuitems />, document.getElementById('Menuitems'));

ReactDOM.render(
  <React.StrictMode>
    <Filtering>
        <Storage>
           <App />   
      </Storage>
      </Filtering>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
