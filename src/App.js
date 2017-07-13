import React, { Component } from 'react';
import './App.css';

class ShowDate extends Component {

    constructor() {
      super()

      this.launchClock();

      this.state = {
        daysList : ["SUN","MON","TUE","WED","THU","FRI","SAT"],
        days: (new Date()).getDay(),
        hrs: (new Date()).getHours(),
        min: (new Date()).getMinutes(),
        sec: (new Date()).getSeconds()
      }
    }
    
    launchClock() {
      setInterval(()=>{
        this.setState({
          daysList : ["SUN","MON","TUE","WED","THU","FRI","SAT"],
          days: (new Date()).getDay(),
          hrs:  this.checkTime((new Date()).getHours()),
          min:  this.checkTime((new Date()).getMinutes()),
          sec:  this.checkTime((new Date()).getSeconds())
      }) }, 1000)
        
    }

    checkTime(i) {
        // add zero in front of numbers < 10
        if (i < 10)
        {
            i = "0" + i
        };
          
        return i;
    }

    render() {
      return (
        <div id="timeArea">
            <div id="timeToday">
              <span id="days">{this.state.daysList[this.state.days]}</span>
              <span id="hrs">{this.state.hrs}</span>
              :
              <span id="min">{this.state.min}</span>
              <span id="sec">{this.state.sec}</span>
            </div>
        </div>
      )
  }
}

 class RegistrationPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      defaultInputField : "Enter Here"
    }

  }

  handleOnFocus() {
    
    this.setState(
      {
        defaultInputField : ""
      }
    )
  }

  handleOnBlur() {
    this.setState({
      defaultInputField : "Enter Here"
    })
  } 

  render() {
    return (
      <div id="reg_div">

        <h3 id="heading">Sign Up</h3>

        <form>

          <label htmlFor="userName">ENTER USERNAME</label>
          <br />
          <div className="userInputBox" id="getUserName">
            <input type="text" name="userName" id="userName" className="inputStyle" placeholder={this.state.defaultInputField} onFocus={this.handleOnFocus.bind(this)} onBlur={this.handleOnBlur.bind(this)} />
          </div>

          <br />

          <label htmlFor="userName">ENTER KEY</label>
          <br />
          <div className="userInputBox" id="getKey">
            <input type="password" name="key" id="key" className="inputStyle" placeholder={this.state.defaultInputField} />
          </div>

          <button id="sign_up">REGISTER</button>

        </form>

        <div id="btn">
          <button id="sign_in_page" type="submit">I already have an account</button>
        </div>

      </div>
    )
  }
} 

class SignInPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      defaultInputField : "Enter Here"
    }

  }

  handleOnFocus() {
    
    this.setState(
      {
        defaultInputField : ""
      }
    )
  }

  handleOnBlur() {
    this.setState({
      defaultInputField : "Enter Here"
    })
  } 

  render() {
    return (
      <div id="signIn_div">

        <h3 id="heading">Sign In</h3>

        <form>

          <label htmlFor="userName">ENTER USERNAME</label>
          <br />
          <div className="userInputBox" id="getUserNameS">
            <input type="text" name="userName" id="userNameS" className="inputStyle" placeholder={this.state.defaultInputField} onFocus={this.handleOnFocus.bind(this)} onBlur={this.handleOnBlur.bind(this)} />
          </div>

          <br />

          <label htmlFor="key">ENTER KEY</label>
          <br />
          <div className="userInputBox" id="getKeyS">
            <input type="password" name="key" id="keyS" className="inputStyle" placeholder={this.state.defaultInputField} />
          </div>

          <button id="sign_up" type="submit">SIGN IN</button>

        </form>

        <div id="btn">

          <br /><br />

          <button id="sign_in_page">I want to create new account</button>
        
        </div>

      </div>
    )
  }
}

class AddWorkDiv extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      defaultInputField : "Enter Here"
    }

  }

  handleOnFocus() {
    
    this.setState(
      {
        defaultInputField : ""
      }
    )
  }

  handleOnBlur() {
    this.setState({
      defaultInputField : "Enter Here"
    })
  }

  render() {
    return (
      <div id="addWork_div">
                                
        <h3 id="greet">Hello,</h3>
        <h2 id="greetName">Abdul Moiz</h2>
        <h2 id="welcome">Welcome to To Do App</h2>

        <form>
            <div id="label">
                <label htmlFor="workName">ENTER WORK TO DO BELOW</label>
                <br />
                <div className="userInputBox" id="workBox">
                <input type="text" name="workName" id="getWork" placeholder={this.state.defaultInputField} className="inputStyle" onFocus={this.handleOnFocus.bind(this)} onBlur={this.handleOnBlur.bind(this)} />
                </div>
            </div>

            <button id="addbtn" type="submit">Add to List</button>
        </form>

      </div>
    )
  }
}

class ListItem extends Component {
  render() {
    return(
      <li id="listBullet">
        <div id="circle">
          <img src={require('./images/check.png')} title="Not Done" id="checkImage" />
        </div>
        <div id="bullet">
          <input type="text" id="innerText" readOnly value="" />
          <div id="del">
            <img src={require('./images/trash_wt.png')} title="Delete" id="delThis" />
          </div>
          <div id="edit">
            <img src={require('./images/edit.png')} title="Edit" id="editText" />
          </div>
        </div>
      </li>
    )
  }
}

class WorkListDiv extends Component {
  render() {
    return (
      <div id="WorkList_div">
                                
        <h2 id="message">Here is the Work List</h2>
        <h3 id="message2">No Work To Do</h3>
        
        <div>
            
            <ul id="workList">

              <ListItem />

            </ul>
            
        </div>
          
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div id="main">
        
        <div id="upper_line"></div>
        
        <div id="header">
            <div id="opacBox">
                <h1>To do App</h1>
            </div>
        </div>

        <div id="nav_bar">
          <ShowDate />
        </div>

        <div id="line"></div>

        <div id="screen">

            <div id="opacBox2">

              <div id="renderPage">
                <RegistrationPage />
              </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;