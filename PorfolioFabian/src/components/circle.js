import React, {Component} from 'react'
import "./css/circle.css"

var circle;
var context;
var mouseX=-30;
var mouseY=-30;
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

   clickCircle(ev){
      let ripple = document.querySelector("#circle .ripple")
      ripple.classList.add("rippleactive");

      setTimeout(() => {ripple.classList.remove("rippleactive")}, 400)
   }

   render(){
      return (
         
            <div id="circle">
               <div className="ripple">
               </div>
            </div>
         

      );
   }

   componentDidMount(){
      circle = document.getElementById("circle")
      document.addEventListener("mousemove", this.setMousePosition, false);
      document.addEventListener("click", this.clickCircle, false)
      // document.addEventListener("click", this.fillCircle, false)
      this.update();
   }

   componentWillUnmount(){
      document.removeEventListener("mousemove", this.setMousePosition)
   }
}

export default MouseCircle;