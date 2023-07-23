import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: true,
      validMessage: false,
      invalidMessage: false,
    };
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  handlePasswordConfirm = (e) => {
    this.setState({passwordConfirm: e.target.value})
  }

  handleSubmit = () => {
    const {password, passwordConfirm} = this.state
    if (password !== passwordConfirm) {
      this.setState({valid: false, invalidMessage: true, validMessage: false})
    } else {
      this.setState({valid: true, invalidMessage: false, validMessage: true})
    }
  }

  render() {
    const {valid, invalidMessage, validMessage} = this.state
    let isInvalid, isValid
    if (!valid && invalidMessage) {
      isInvalid = <p>Nope</p>
    } else if (valid && validMessage) {
      isValid = <p>Git in there.</p>
    }
    
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="email" />
        <input type="password" placeholder="password" onClick={this.handlePassword} />
        <input type="password" placeholder="Confirm Password" onClick={this.handlePasswordConfirm} />
        <input type="submit" onClick={this.handleSubmit}></input>
        {isInvalid}{isValid}
      </div>
    );
  }
}

export default Validator;
