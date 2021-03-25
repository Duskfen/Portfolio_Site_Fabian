import React, { Component } from 'react'
import "./css/loading.css"
import loading_full from "./img/loading_icon.svg"

class LoadingScreen extends Component {   
  render() {
    return (
      <div id="loadingScreen">
         <div className="loadingItem">
            <img src={loading_full} id="loading_empty" alt="loading..."></img>
            <img src={loading_full} id="loading_full" alt="loading..."></img>
         </div>
      </div>
    )
  }

}

export default LoadingScreen
