import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//If-else

function SayHello(props){
  let show = props.isTrue;

  if(show){
    return (
      <h1>Hello from MyHello.</h1>
    );
  }else{
    return (
      <h1>Hello from YourHello.</h1>
    );
  }

}

ReactDOM.render(  
    <SayHello isTrue={true}/>,
  document.getElementById('root')
);
