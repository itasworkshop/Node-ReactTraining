import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//working with forms
//form maintain state

//event handling

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
    console.log("from on change"+this.state.value);
  }

  handleSubmit(){    
    alert('Are you sure? '+ this.state.value);
    //take to backend
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );

  };

}

ReactDOM.render(  
    <MyForm />,
  document.getElementById('root')
);
