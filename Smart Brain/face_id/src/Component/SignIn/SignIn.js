import React, { Component } from "react"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  //   change email
  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  //   change password
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }
  //   when the user click the submit button
  onSubmitSigin = async () => {
    const { email, password } = this.state
    // post the user credentials
    const response = await fetch("htpp://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    const user = await response.json()
    if (user) {
      this.props.loadUser(user)
      this.props.onRouteChange("home")
    } else {
      console.error("Something went wrong!")
    }
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 center mh0">Sign In</legend>
              {/* email */}
              <div className="mt3">
                <label className="db fw6 lh-copy f5" for="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              {/* Password */}
              <div className="mv3">
                <label className="db fw6 lh-copy f5" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib hover-white hover-bg-black"
                type="submit"
                value="Sign in"
                onClick={() => this.onSubmitSigin}
              />
            </div>
            <div className="lh-copy mt3">
              <a
                href="#0"
                className="f5 link dim black db"
                onClick={() => this.onRouteChange("register")}
              >
                Register
              </a>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default SignIn
