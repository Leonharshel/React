import React from 'react';
import ReactDOM from 'react-dom/client';
//mport './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Asidepage from './Asidepage';
//import Login from './Login';  
import PersonalDetails from './PersonalDetails';
import Adress from './Adress';
import CreditCard from './CreditCard';
import Income from './Income';
//import PropertyDetails from './PropertyDetails';
//import Assets from './Assets';
//import Identity from './Identity';
import Homepage from './Homepage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
<App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
