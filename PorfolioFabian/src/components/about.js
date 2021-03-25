import React, {Component} from 'react'

class Branding extends Component{
   render(){    
      return (
         <div id="brandingWrapper">
            <p>About me page is not implemented yet</p>
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
     this.removeLoadingScreen();
  }

}

export default Branding;