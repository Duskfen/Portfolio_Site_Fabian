import React, {Component} from 'react'
import "./css/circle.css"

var circle;
var context;
var mouseX;
var mouseY;
var canvasPos;

class MouseCircle extends Component{
   constructor(props){
      super(props);
   }

   setMousePosition = (e) => {
      mouseX = e.clientX //- canvasPos.x;
      mouseY = e.clientY //- canvasPos.y;
   }

   update = () => {
      circle.style.left = mouseX-30 + "px";
      circle.style.top = mouseY-30 + "px";

      requestAnimationFrame(this.update)
   }

   fillCircle(e) {
      circle.style.backgroundColor="#fad2aa";

      setTimeout(() => {circle.style.backgroundColor="transparent"}, 300)
   }

   render(){
      return (
         
            <div id="circle" className=".ripple">
               <div className="ripple">
               </div>
            </div>
         

      );
   }

   componentDidMount(){
      circle = document.getElementById("circle")
      document.addEventListener("mousemove", this.setMousePosition, false);
      // document.addEventListener("click", this.fillCircle, false)
      this.update();
   }

   componentWillUnmount(){
      document.removeEventListener("mousemove", this.setMousePosition)
   }
}

export default MouseCircle;