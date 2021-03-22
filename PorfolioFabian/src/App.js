import React, { Component } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
const Dynamic = React.lazy(() => import('containers/Dynamic'))
import './app.css'
const Index = React.lazy(() => import("./components/index")) 
import ReactSuspenseWrapper from "./components/ReactSuspenseWrapper"
import LoadingScreen from "./components/LoadingScreen"

class App extends Component {   
  render() {
    return (
      <div className="App">
         {/* <LoadingScreen></LoadingScreen> */}
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
