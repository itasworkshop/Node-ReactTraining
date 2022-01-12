import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//component
//props --> propeties
function MyApp(props){
  return(
    <h1>Hello world- {props.name} </h1>
  );
}

ReactDOM.render(  
    <MyApp name="Rajesh"/>,
  document.getElementById('root')
);
