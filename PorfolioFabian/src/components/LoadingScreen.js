import React, { Component } from 'react'
import "./css/loading.css"
import loadingGif from "./img/Loading.gif"

class LoadingScreen extends Component {   
  render() {
    return (
      <div id="loadingScreen">
         <div className="loadingItem">
            <img src={loadingGif} alt="loading..."></img>
         </div>
      </div>
    )
  }

}

export default LoadingScreen
