import React, { Component } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
const Dynamic = React.lazy(() => import('containers/Dynamic'))
import Index from "./components/index"
import ReactSuspenseWrapper from "./components/ReactSuspenseWrapper"
import LoadingScreen from "./components/LoadingScreen"
import MouseCircle from "./components/circle"

class App extends Component {
   constructor(props) {
      super(props);
      this.state = { hasmount: false }

   }
   render() {
      return (
         <div className="App">
            <MouseCircle></MouseCircle>
            <LoadingScreen></LoadingScreen>
            {
               this.state.hasmount ?
                  <ReactSuspenseWrapper>
                     <Router>
                        <Routes path="/"><Index></Index></Routes>
                        <Dynamic path="dynamic" />
                        <Routes path="*" />
                     </Router>
                  </ReactSuspenseWrapper> : null
            }
         </div>
      )
   }

   componentDidMount(){
      this.setState({hasmount: true});
   }

}

export default App
