import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//class based component

//class --> template for creating objects
//object --> real world entity --> 1) attribute/properties
//2) behaviour/functionality

//props vs state
//function based components are stateless --> they do not have state
//class based components are stateful --> they have state
class MyApp extends React.Component{

  constructor(props){
    super(props); //first call should be super --> parent constructor
    this.state = {a:50}; //state of the component
  }

  render(){
    return(
      <h1>Hello this is my state {this.state.a} and props is {this.props.b}</h1>
    );
  };

}

ReactDOM.render(  
    <MyApp b={35}/>,
  document.getElementById('root')
);
