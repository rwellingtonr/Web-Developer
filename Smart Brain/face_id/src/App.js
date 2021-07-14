import React, { Component } from "react"
import "./App.css"
// Components
import Navigation from "./Component/Navigation/Navigation"
import Logo from "./Component/Logo"
import ImageLinkForm from "./Component/ImageLinkForm"
import Rank from "./Component/Rank"
import FaceRecognition from "./Component/FaceRecognition"
import SignIn from "./Component/SignIn/SignIn"
import Register from "./Component/Register/Register"

// liberty
//Particles
import PArticlesOpt from "./particlesjs-config.json"
import Particles from "react-particles-js"

//Conditionals to initialize the Web App
const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }
  // Updates the user data
  loadUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined,
      },
    })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = async () => {
    const { input, user } = this.state
    this.setState({ imageUrl: input })
    try {
      const imageUrl = await fetch("http://localhost:3000/imageurl", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          input: input,
        }),
      })
      const responseImg = await await imageUrl.json()
      if (responseImg) {
        const image = await fetch("http://localhost:3000/image", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: this.state.user.id,
          }),
        })
        const count = await image.json()
        if (count) {
          this.setState(Object.assign(user, { entries: count }))
        } else {
          console.log("error")
        }
      }
      this.displayFaceBox(this.calculateFaceLocation(responseImg))
    } catch (error) {
      console.log(error)
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  // This function will receive the return value of calculateFaceLocation
  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
    // console.log(box);
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state
    const { name, entries } = this.state.user

    return (
      <div className="App">
        <Particles className="particles" params={PArticlesOpt} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {route === "home" ? (
          <div>
            <Logo />
            <Rank name={name} entries={entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />

            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    )
  }
}

export default App
