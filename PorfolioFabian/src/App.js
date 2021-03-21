import React, { Component } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import './app.css'
import Index from "./components/index"
import ReactSuspenseWrapper from "./components/ReactSuspenseWrapper"

class App extends Component {   
  render() {
    return (
      <div className="App">
        <ReactSuspenseWrapper>
         <Router>
               <Routes path="/"><Index></Index></Routes>
               <Dynamic path="dynamic" />
               <Routes path="*" />
         </Router>
        </ReactSuspenseWrapper>
      </div>
    )
  }
}

export default App
