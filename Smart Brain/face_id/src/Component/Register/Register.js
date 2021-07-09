import React, { Component } from "react"

class Register extends Component {
  constructor(props) {
    super(props)
    this.status = {
      name: "",
      email: "",
      password: "",
    }
  }

  //   change name
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }
  // change email
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  // change password
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  // Submit the registration
  onClickRegister = async () => {
    const { name, email, password } = this.status
    //fetch the path for user registration
    const response = await fetch("htpp://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
    const user = response.json()
    if (user) {
      this.props.loadUser(user)
      this.props.onRouteChange("home")
    }
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <div
          className="pa4"
          action="sign-up_submit"
          method="get"
          accept-charset="utf-8"
        >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="Name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="text"
                name="Name"
                id="Name"
                onChange={this.onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="email-address">
                Email address
              </label>
              <input
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f5" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
              type="submit"
              value="Register"
              onClick={() => this.onClickRegister}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Register
