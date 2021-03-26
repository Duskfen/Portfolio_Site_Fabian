import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")


import "./css/projectDetails.css"


class Project {
   constructor(project) {
      this.images = project.images
      this.images.push("placeholder")

      this.image_extension = [...project.image_extention];
      this.image_extension.push("placeholder");

      this.subtext = project.subtext;
      this.title = project.title;
      this.textheading = project.textheading;
   }

   getImageAt(index) {

      if ((index % this.images.length) === -1 || (index % this.images.length) === this.images.length - 1) {
         return (<div id="lefttext">
            <h2>{this.textheading}</h2>
            <p>{this.subtext}</p>
         </div>)
      }

      if ((index % this.images.length) < 0) {
         // if()
         if (this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === "mp4") {
            return (
               <video autoPlay preload="auto" loop>
                  <source src={this.images[this.images.length + (index % this.images.length)]} type="video/mp4"></source>
               </video>
            )
         }
         return <img src={this.images[this.images.length + (index % this.images.length)]}></img>
      }

      if (this.image_extension[index % this.image_extension.length] === "mp4") {
         return (
            <video autoPlay preload="auto" loop>
               <source src={this.images[index % this.images.length]} type="video/mp4"></source>
            </video>
         )
      }
      return <img src={this.images[index % this.images.length]}></img>;
   }
}

class ProjectDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: new Project(props.currentProject),
         lastpic: -1,
         currentpic: 0,
         nextpic: 1
      };
   }



   render() {
      return (
         <div id="Detailwrapper"  onWheel={(e) => {
            if (e.deltaY < 0) this.nextPicture(e, -1)
            else this.nextPicture(e, 1)
         }}>
            <div id="projectDetailWrapper">
               <header>
                  <div id="head_items">
                     <a href="/">
                        <img src={full_logo} alt="logo" className="full_logo"></img>
                     </a>
                     <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev, 1)}><img src={right_arrow}></img></a>
                  </div>
               </header>

               <section id="main_wrapper">
                  <div className="left">
                     {this.state.projects.getImageAt(this.state.lastpic)}
                  </div>
                  <div className="center">
                     {this.state.projects.getImageAt(this.state.currentpic)}
                  </div>
                  <div className="right">
                     {this.state.projects.getImageAt(this.state.nextpic)}
                  </div>
               </section>

               <footer>
                  <div id="footer_overview_items">
                     <p> TODO </p>
                  </div>
               </footer>
            </div>
         </div>
      )
   }

   nextPicture = (event, add) => {
      this.setState({
         currentpic: this.state.currentpic + add,
         lastpic: this.state.lastpic + add,
         nextpic: this.state.nextpic + add
      }, () => {
         // this.handleNextAnimations(); //TODO
      })
   }


   removeOverview() {
      try {
         let wrapper = document.querySelector("#wrapper");
         let rightimg = document.querySelector("#main_wrapper .right")
         let leftimg = document.querySelector("#main_wrapper .left")

         setTimeout(() => {
            wrapper.remove()

            rightimg.animate([
               { position: "relative", right: "-20%" },
               { position: "relative", right: "0" }
            ], { duration: 300, easing: "ease-out" });

            leftimg.animate([
               { position: "relative", left: "-20%" },
               { position: "relative", left: "0" }
            ], { duration: 300, easing: "ease-out" });

         }, 900) //timeout so this component has enough time to render
      } catch (e) { console.error(e) };
   }

   componentDidMount() {
      try {
         this.removeOverview();
      }
      catch (e) { console.error(e) }
   }

}

export default ProjectDetails
