import React, { Component } from "react"

class Register extends Component {
  constructor(props) {
    super(props)
    state = [
      {
        email: "",
        password: "",
        name: "",
      },
    ]
  }
  //   events
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onClickSubimit = async () => {
    const { email, password, name } = this.state
    const res = await fetch("localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
    const user = await res.json()
    if (user.id) {
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
              onClick={() => this.onClickSubimit}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default Register
