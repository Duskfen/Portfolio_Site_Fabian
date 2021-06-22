import React, { Component } from 'react'
import { Router } from '@reach/router'

import NotFound from "./components/404"
import ReactSuspenseWrapper from "./components/ReactSuspenseWrapper"
import LoadingScreen from "./components/LoadingScreen"
import BeforeComponentIndexWrapper from './BeforeComponentIndexWrapper'

class App extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <ReactSuspenseWrapper>
            <LoadingScreen></LoadingScreen>
            <Router>
               <BeforeComponentIndexWrapper path="/"></BeforeComponentIndexWrapper>
               <NotFound path="*"></NotFound>
            </Router>
         </ReactSuspenseWrapper>
      )
   }

   componentDidMount() {
   }

}
export default App
