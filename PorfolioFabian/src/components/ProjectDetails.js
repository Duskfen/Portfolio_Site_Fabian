import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")


import "./css/projectDetails.css"
import Index from "./index"

var BlockNextImage = false;
var nextMultiplier = 60;

class Project {
   constructor(project) {
      this.images = project.images
      this.image_extension = [...project.image_extention];
      this.subtext = project.subtext;
      this.title = project.title;
      this.textheading = project.textheading;
   }

   getImageAt(index) {
      let returnstring;
      let ismp4 = false;

      if ((index % this.images.length) < 0) {
         returnstring = this.images[this.images.length + (index % this.images.length)]
         if (this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === "mp4") ismp4 = true;
      }
      else {
         returnstring = this.images[index % this.images.length]
         if (this.image_extension[index % this.image_extension.length] === "mp4") ismp4 = true;
      }

      if (ismp4) {
         return (
            <video autoPlay preload="auto" loop className="centeritem">
               <source src={returnstring} type="video/mp4"></source>
            </video>
         )
      }
      else return <img src={returnstring} className="centeritem" loading="lazy" id={index == 0 ? "Mainimg" : null}></img>
   }
}

class ProjectDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: new Project(props.currentProject),
         currentpic: 0,
         returnToOverview: false
      };
   }



   render() {
      return (
         <React.Fragment>
            <div id="Detailwrapper" onWheel={(e) => {
               if (e.deltaY < 0) this.nextPicture(e, -1)
               else this.nextPicture(e, 1)
            }}>
               <div id="projectDetailWrapper">
                  <header>
                     <div id="head_items">
                        <a href="#" onClick={this.returnToOverview}>
                           <img src={full_logo} alt="logo" className="full_logo"></img>
                        </a>
                        <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev, 1)}><img src={right_arrow}></img></a>
                     </div>
                  </header>

                  {/* TODO add the description text */}
                  <section id="main_wrapper" style={{ width: `${this.state.projects.images.length * 100}vw`, left: "-70px" }}>
                     {this.state.projects.images.map((image, i) => {
                        return (
                           <div key={`detailImage_${i}`}>
                              {this.state.projects.getImageAt(i)}
                           </div>
                        )
                     })}
                  </section>

                  <footer id="DetailsFooter">
                     <div>
                        <p> TODO </p>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.returnToOverview ? <Index removeDetailWrapper={true} currentProjectNumber={this.props.currentProjectNumber} lastProjectNumber={this.props.lastProjectNumber}></Index> : null}
         </React.Fragment>

      )
   }

   returnToOverview = () => {
      //TODO animate left

      window.removeEventListener("resize", this.WindowEventHandler) //remove event listener -> to prevent errors

      let timeout = 0;
      if (this.state.currentpic != 0) timeout = 1000; //so the page gets time to scroll back to the first image

      this.nextPicture(null, -1 * this.state.currentpic);
      //wait until it is scrolled back to the first img
      setTimeout(() => {
         let mainimg = document.querySelector("#main_wrapper #Mainimg");
         let secondimg = document.querySelectorAll("#main_wrapper > div")[1]
         let footer = document.querySelector("#DetailsFooter");

         //animate footer
         footer.style = "position:relative";
         footer.animate([
            { top: 0 },
            { top: "calc(100% + 140px)" }
         ], { duration: 1001 })

         //animate right side
         secondimg.animate([
            { marginLeft: nextMultiplier - 100 + "vw" },
            { marginLeft: 0 }
         ], { duration: 1001 })

         //animate main img
         document.querySelector("#main_wrapper").classList.add("main_wrapper_return_to_overview")
         mainimg.animate([
            { clipPath: "inset(0)" },
            { clipPath: "inset(5%)" }
         ],
            {
               duration: 1000,
               easing: "ease-out"
            })

         this.setState({ returnToOverview: true })
      }, timeout)



   }

   nextPicture = (event, add) => {
      if (this.state.currentpic + add >= 0
         && this.state.currentpic + add < this.state.projects.images.length
         && !BlockNextImage) {

         this.setState({
            currentpic: this.state.currentpic + add,
         }, () => {
            document.querySelector("#main_wrapper").style = `width: ${this.state.projects.images.length * nextMultiplier + 100}vw; left: calc(-${this.state.currentpic * nextMultiplier}vw - 70px)`
         })

         BlockNextImage = true;
         setTimeout(() => BlockNextImage = false, 1000)

      }
      else if (this.state.currentpic + add >= this.state.projects.images.length && !BlockNextImage) {

         let mainwrapper = document.querySelector("#main_wrapper")

         mainwrapper.animate([
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 70px)` },
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 150px)` },
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 70px)` }
         ],
            { duration: 900, easing: "ease-out" })

         BlockNextImage = true;
         setTimeout(() => BlockNextImage = false, 900)
      }
   }


   removeOverview() {
      try {
         let wrapper = document.querySelector("#wrapper");

         setTimeout(() => {
            wrapper.remove()

         }, 900) //timeout so this component has enough time to render
      } catch (e) { console.error(e) };
   }

   CheckIfNextPictureShouldBeTeasered = () => {
      let mainImg = document.querySelector("#Mainimg");

      if(mainImg.clientWidth === 0){
         setTimeout(this.CheckIfNextPictureShouldBeTeasered, 100)
         return;
      }

      if (document.body.clientWidth < (mainImg.clientWidth / 0.6) + 100) {
         nextMultiplier = 100;
         document.querySelectorAll("#main_wrapper > div").forEach((div) => div.classList.add("toSmallToPreview"))
         this.nextPicture(null, 0);

         //TODO also handle the describing Text right from the picture..
      }
      else if (nextMultiplier === 100) {
         nextMultiplier = 60;
         document.querySelectorAll("#main_wrapper > div").forEach((div) => div.classList.remove("toSmallToPreview"))
         this.nextPicture(null, 0);
      }
   }

   CheckIfHmoreThanWidth = () => {
      if (window.innerHeight >= window.innerWidth) {
         document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach((img) => {
            img.style = "width: 100%";
         })
      }
      else {
         document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach((img) => {
            img.style = "";
         })
      }
   }

   animateMount = () => {

      //TODO left side

      //right side
      let secondimg = document.querySelectorAll("#main_wrapper > div")[1]
      secondimg.animate([
         { marginLeft: 0 },
         { marginLeft: nextMultiplier - 100 + "vw" },
      ], { duration: 1000, delay: 500 })

      //animate footer
      let footer = document.querySelector("#DetailsFooter");
      footer.style = "position:relative";
      let footeranim = footer.animate([
         { top: "calc(100% + 140px)" },
         { top: 0 }
      ], { duration: 1000, delay: 500 })
      footeranim.onfinish= () => footer.style = "";
   }

   componentDidMount() {

      this.animateMount();

      try {
         this.removeOverview();
      }
      catch (e) { console.error(e) }

      window.addEventListener("resize", this.WindowEventHandler);
      this.CheckIfHmoreThanWidth();
      this.CheckIfNextPictureShouldBeTeasered()
   }

   WindowEventHandler = () => {
      this.CheckIfHmoreThanWidth();
      this.CheckIfNextPictureShouldBeTeasered()
   }
}

export default ProjectDetails
