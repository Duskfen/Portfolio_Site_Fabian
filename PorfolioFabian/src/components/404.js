import React, {Component} from 'react'

class NotFound extends Component{
   render(){
      return (
         <div style={{"display":"flex", "justify-content":"center", "align-items":"center", "width":"100vw", "height": "100vh", "backgroundColor": "var(--background)"}}>
            <p>404 - not found</p>
         </div>
      );
   }

   removeLoadingScreen() {
      try {
         let loading_screen = document.querySelector("#loadingScreen")
         let animation = loading_screen.animate([
            { opacity: 1 },
            { opacity: 0 }
         ], {
            duration: 300,
            delay:1400,
            iterations: 1,
            easing: "linear"
         })
         animation.onfinish = () => loading_screen.remove();
      } catch { console.error("this should not happen; Loading screen couldn't be removed") };
   }

   componentDidMount(){
     this.removeLoadingScreen()
  }
}

export default NotFound;