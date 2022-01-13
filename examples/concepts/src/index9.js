import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//working with forms
//form maintain state

//event handling

class MyApp extends React.Component{

  constructor(props){
    super(props); 
    this.state = {counter:0}; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({counter:this.state.counter+1});
  }


  render(){

    return(
      <div>
        <h1>You clicked {this.state.counter} times.</h1>
        <button onClick={this.handleClick}>ClickMe</button>
        {/* <button onClick={ () => {this.setState({counter:this.state.counter+1})}}>ClickMe</button> */}
      </div>
    );
  };

}

ReactDOM.render(  
    <MyApp />,
  document.getElementById('root')
);
