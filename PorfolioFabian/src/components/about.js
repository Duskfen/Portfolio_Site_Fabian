import React, {Component} from 'react'

class Branding extends Component{
   render(){    
      return (
         <div id="brandingWrapper">
            <p>About me page is not implemented yet</p>
         </div>
      );
   }

   componentDidMount(){
     document.querySelector("#loadingScreen").remove();
  }

  wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
}

export default Branding;