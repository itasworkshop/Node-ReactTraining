import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//nested component
function MyHello(){
  return (
    <h1>Hello from MyHello.</h1>
  );
}

function YourHello(){
  return (
    <h1>Hello from YourHello.</h1>
  );
}

function SayHello(props){
  let show = props.isTrue;

  if(show){
    return <MyHello />
  }else{
    return <YourHello />
  }

}

ReactDOM.render(  
    <SayHello isTrue={true}/>,
  document.getElementById('root')
);
