import React, {Component} from 'react'

class Branding extends Component{
   render(){
      return (
         <div id="brandingWrapper">
            <p>Branding page is not implemented yet</p>
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
            duration: 600,
            iterations: 1,
            easing: "ease-out"
         })
         animation.onfinish = () => loading_screen.remove();
      } catch { console.error("this should not happen; Loading screen couldn't be removed") };
   }

   componentDidMount(){
     this.removeLoadingScreen();
  }
}

export default Branding;