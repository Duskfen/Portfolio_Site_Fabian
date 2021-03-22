import React, {Component} from 'react'

class NotFound extends Component{
   render(){
      return (
         <p>404 - not found</p>
      );
   }

   componentDidMount(){
     document.querySelector("#loadingScreen").remove();
  }
}

export default NotFound;