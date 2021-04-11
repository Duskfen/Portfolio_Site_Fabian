import React, { Component } from 'react'

import MouseCircle from "./components/circle"
import Index from './components/index'
import MobileIndex from "./components/Mobile/index"

class BeforeComponentIndexWrapper extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <React.Fragment>
            {typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches ?
               <div id="mobileWrapper">
                  <MobileIndex></MobileIndex>
               </div>
               :
               <React.Fragment>
                  <MouseCircle></MouseCircle>
                  <Index></Index>
               </React.Fragment>}
         </React.Fragment>
      )
   }


}

export default BeforeComponentIndexWrapper
