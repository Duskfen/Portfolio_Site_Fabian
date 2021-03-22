import React, {Component} from 'react'

class Branding extends Component{
   render(){
      return (
         <div id="brandingWrapper">
            <p>Branding page is not implemented yet</p>
         </div>
      );
   }

   componentDidMount(){
     document.querySelector("#loadingScreen").remove();
  }
}

export default Branding;