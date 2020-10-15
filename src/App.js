import React,{Component} from 'react';
import './App.css';
import Userinput from './User_input';
import UserOutput from './User_output';

class App extends Component {
  state = {
    username: 'super Teja'
  }
  usernameChangeHandler = (event) => {
     this.setState({username: event.target.value})
  }
  render(){
    return (
      <div className="App">
        <h1>Hello everyOne..!</h1>
        <Userinput changed={this.usernameChangeHandler}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Teja"/>
        <UserOutput userName="Teja"/>
      </div>
    );
  }
}

export default App;
