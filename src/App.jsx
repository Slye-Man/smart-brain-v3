import React, { Component } from 'react'
// import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation.component'
import Logo from './components/Logo/Logo.component'
import Rank from './components/Rank/Rank.component'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.component'
import './App.css'

// const particlesOptions = {
//   particles: {
//    number: {
//      value: 30,
//      density: {
//        enable: true,
//        value_area: 800
//      }
//    }
//   }
// }

function App() {
  return (
    <div className="App">
      {/* <Particles params = {particlesOptions} /> */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecogition /> */}
    </div>
  )
}

export default App
