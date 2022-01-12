import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//class based component

//class --> template for creating objects
//object --> real world entity --> 1) attribute/properties
//2) behaviour/functionality

class Fan{

  constructor(price,color){
    this.price = price;
    this.color = color;
  }

  printMe(){
    console.log("this is fan of prive "+this.price);
  }
}

var fan1 = new Fan(1200,"Black");

fan1.printMe();

class MyApp(props) {

}

ReactDOM.render(  
    <SayHello isTrue={true}/>,
  document.getElementById('root')
);
