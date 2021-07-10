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
    const { name, email, password } = this.state
    const { loadUser, onRouteChange } = this.props
    //write in the Database
    const register = await fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
    const user = await register.json()
    if (user) {
      loadUser(user)
      onRouteChange("home")
    } else {
      console.error("ops!")
    }
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <div
          className="pa4"
          action="sign-up_submit"
          method="get"
          acceptCharset="utf-8"
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
              onClick={this.onClickRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Register
