import React, {Component} from 'react'

class NotFound extends Component{
   render(){
      return (
         <p>404 - not found</p>
      );
   }

   removeLoadingScreen() {
      try {
         let loading_screen = document.querySelector("#loadingScreen")
         let animation = loading_screen.animate([
            { opacity: 1 },
            { opacity: 0 }
         ], {
            duration: 600,
            iterations: 1,
            easing: "ease-out"
         })
         animation.onfinish = () => loading_screen.remove();
      } catch { console.error("this should not happen; Loading screen couldn't be removed") };
   }

   componentDidMount(){
     this.removeLoadingScreen()
  }
}

export default NotFound;