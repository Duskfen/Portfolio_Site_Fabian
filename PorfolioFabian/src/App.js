import React, { Component } from 'react'
import {Routes } from 'react-static'
import { Router } from '@reach/router'
import Index from "./components/index"
import NotFound from "./components/404"
import ReactSuspenseWrapper from "./components/ReactSuspenseWrapper"
import LoadingScreen from "./components/LoadingScreen"
import MouseCircle from "./components/circle"

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { hasmount: true }

   }
   render() {
      return (
         <div className="App">
            <MouseCircle></MouseCircle>
            <LoadingScreen></LoadingScreen>
                  <ReactSuspenseWrapper>
                     <Router>
                        <Routes path="/"><Index></Index></Routes>
                        <Routes path="*"><NotFound></NotFound></Routes>
                     </Router>
                  </ReactSuspenseWrapper>

         </div>
      )
   }

   componentDidMount(){
      this.setState({hasmount: true});
   }

}

export default App
