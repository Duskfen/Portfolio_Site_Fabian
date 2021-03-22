import React, { Component } from 'react'
import "./css/loading.css"


class LoadingScreen extends Component {   
  render() {
    return (
      <div id="loadingScreen">
         <div className="loadingItem">
            <p>LOADING</p>
         </div>
      </div>
    )
  }

}

export default LoadingScreen
