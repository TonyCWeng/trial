import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors) {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Please {this.props.formType} or {this.navLink()}
        {this.renderErrors()}

        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
        />

        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />

      <button>Submit!</button>
      </form>
    );
  }


}
export default withRouter(SessionForm);
