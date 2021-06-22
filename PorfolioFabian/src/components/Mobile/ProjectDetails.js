import React, { Component } from 'react'
import full_logo from "../img/logo_full.svg"
const right_arrow = require("../img/arrow_right.svg");

import "../css/projectDetails.css"
import "./css/MobileDetails.css"

import Index from "./index"
import { Lethargy } from "lethargy";

var BlockNextImage = false;
var nextMultiplier = 100;
var lastMP4 = null;

class Project {
   constructor(project) {
      if(project){
         this.images = project.images
         this.image_extension = [...project.image_extention];
         this.subtext = [...project.subtext];
         this.title = project.title;
         this.textheading = project?.textheading;
      }
      //if i remove this there is a weird build error 
      //the error is only in npm run build.. when npm run start the issue never happens..
      //I think this is a error with react-static build
      else{ 
         this.images = [];
         this.image_extension = [];
         this.subtext = [];
         this.title = "";
         this.textheading = "";
      }
   }

   getImageAt(index) {
      let returnstring;
      let type = null;

      if ((index % this.images.length) < 0) {
         returnstring = this.images[this.images.length + (index % this.images.length)]

         switch(this.image_extension[this.image_extension.length + (index % this.image_extension.length)]){
            case "mp4":
               type="mp4";
               break;
               case "json":
                  type = returnstring.type;
                  returnstring = returnstring.content
                  break;

         }
      }
      else {
         returnstring = this.images[index % this.images.length]
         switch(this.image_extension[index % this.image_extension.length]){
            case "mp4":
               type="mp4";
               break;
            case "json":
               type = returnstring.type;
               returnstring = returnstring.content
               break;

         }
      }

      if (type === "mp4") {
         return (
            <video preload="auto" loop className="centeritem" id={"video" + this.stringSelectorify(returnstring)}>
               <source src={returnstring} type="video/mp4"></source>
            </video>
         )
      }
      else if (type === "iframe"){
         return (
            <iframe /*width="560" height="315"*/seamless className={`centeritem iframe ${index == 0 ? "showFull" : ""}`} id={"video" + this.stringSelectorify(returnstring)} src={returnstring} frameBorder="0" sandbox='allow-scripts allow-same-origin' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
               <p>Your Browser does not support Iframes</p>
            </iframe>
         )
      }
      else return <img src={returnstring} className={`centeritem ${index == 0 ? "showFull" : ""}`} id={index == 0 ? "Mainimg" : null}></img>
   }

   stringSelectorify(input){
      return input.replaceAll("/", "SLASH").replaceAll(".", "DOT").replaceAll(":", "DOUBLEPOINT").replaceAll("?", "QUESTIONMARK").replaceAll("=", "EQUALS")
   }

   isType(index, type = "mp4"){
      if ((index % this.images.length) < 0) {
         if(this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === "json"){
            if(this.images[this.images.length + (index % this.images.length)].type === type) return true;
         }
         else if (this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === type) return true;
      }
      else {
         if(this.image_extension[index % this.image_extension.length] === "json"){
            if (this.images[index % this.images.length].type === type) return true;
         }
         else if (this.image_extension[index % this.image_extension.length] === type) return true;
      }
      return false;
   }

   getMp4id(index) {
      let returnstring;

   
      if ((index % this.images.length) < 0) {
         returnstring = this.images[this.images.length + (index % this.images.length)]
      }
      else {
         returnstring = this.images[index % this.images.length]
      }
      if(typeof returnstring === 'object' && returnstring !== null){
         returnstring = returnstring.content;
      }
      return this.stringSelectorify(returnstring)
   }

   calcCurrentPictureInRealIndex(index) {
      if ((index % this.images.length) < 0) {
         return this.images.length + (index % this.images.length)
      }
      else {
         return index % this.images.length
      }
   }
}

class ProjectDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: new Project(props.currentProject),
         currentpic: 0,
         returnToOverview: false,
         loadNextProject: false,
      };

      this.lethargy = new Lethargy()

      this.perCentStep = 100 / (this.state.projects.images.length - 1);
   }



   render() {
      return (
         <React.Fragment>
            <div id="Detailwrapper" onWheel={(e) => {

               if (this.lethargy.check(e) === false) return;

               if (e.deltaY < 0) this.nextPicture(e, -1)
               else this.nextPicture(e, 1)
            }}>
               <div id="projectDetailWrapper">
                  <header>
                     <div id="head_items">
                        <a href="#" onClick={this.returnToOverview}>
                           <img src={full_logo} alt="logo" className="full_logo"></img>
                        </a>
                     </div>
                  </header>

                  {/* {this.state.displayDescription ?
                     <div id="detail_description_text">
                        <div>
                           <h2>{this.state.projects.textheading}</h2>
                           {this.state.projects.subtext.map((text, i) => {
                              return <p key={"subtext_" + i}>{text}</p>
                           })}

                        </div>
                     </div> : null
                  } */}
                  <section id="main_wrapper" style={{ width: `${this.state.projects.images.length * 100}vw`, left: "-20px" }}>
                     {this.state.projects.images.map((image, i) => {
                        return (
                           <div key={`detailImage_${i}`} className={"toSmallToPreview"}>
                              {this.state.projects.getImageAt(i)}
                           </div>
                        )
                     })}
                  </section>

                  <section id="project_overview_arrows">
                     <div className="left_arrow" onClick={(ev) => this.nextPicture(ev, -1)}>
                        <img src={right_arrow}></img>
                     </div>

                     {(this.state.projects.calcCurrentPictureInRealIndex(this.state.currentpic) >= this.state.projects.images.length - 1) ?
                        <div onClick={() => this.loadNextProject()} id="mobile_detail_next_picture">
                           <p >nächstes Projekt &gt;</p>
                        </div>
                        :
                        <div className="right_arrow" onClick={(ev) => this.nextPicture(ev, 1)}>
                           <img src={right_arrow}></img>
                        </div>
                     }

                  </section>

                  {/* {this.state.displayDescription ?
                     <div onClick={() => this.loadNextProject()} className={"displayNone"} id="detail_next_picture">
                        <p >nächstes Projekt &gt;</p>
                     </div> : null
                  } */}
                  <footer id="DetailsFooter">
                     <div>
                        <div id="DetailsFooterBase">
                           <div id="DetailsFooterBaseTitle">
                              <p >{this.state.projects.title}</p>
                           </div>
                           <div className="detailsline" id="DetailsProgressLine"></div>
                           <div className="detailsline"></div>
                        </div>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.returnToOverview ? <Index removeDetailWrapper={true} currentProjectNumber={this.props.currentProjectNumber} lastProjectNumber={this.props.lastProjectNumber}></Index> : null}
            {this.state.loadNextProject ? <ProjectDetails calledFromProjectDetails={true} currentProject={this.props.allProjects.getProjectAt(this.props.currentProjectNumber + 1)} currentProjectNumber={this.props.currentProjectNumber + 1} lastProjectNumber={this.props.lastProjectNumber + 1} allProjects={this.props.allProjects}></ProjectDetails> : null}
         </React.Fragment>

      )
   }

   loadNextProject = () => {


      let wrapper = document.querySelector("#Detailwrapper")
      this.animateUnMountToProjectDetails(wrapper, document.querySelector("#mobile_detail_next_picture"))

      this.setState({ loadNextProject: true })


   }

   animateUnMountToProjectDetails = (wrapper, detailNextPicture) => {
      let main_wrapper = document.querySelector("#main_wrapper")

      detailNextPicture.style = "opacity:0"
      detailNextPicture.animate([
         { opacity: 1 },
         { opacity: 0 }
      ], { duration: 300, easing: "ease-out" })

      let animation = main_wrapper.animate([
         { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 20px` },
         { left: "-100%" }
      ], { duration: 1000, easing: "ease-out" })

      animation.onfinish = () => { wrapper.remove(); }
   }

   returnToOverview = () => {
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
            { top: "calc(100% + 140px)" },
         ], { duration: 1001, easing: "ease-out" })

         //animate right side
         secondimg.animate([
            { marginLeft: nextMultiplier - 100 + "vw" },
            { marginLeft: 0 }
         ], { duration: 1001, easing: "ease-out" })

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

   updateProgressBar = (index) => {
      document.querySelector("#DetailsFooter #DetailsProgressLine").style = `width: ${this.perCentStep * (index)}%`
   }

   nextPicture = (event, add) => {
      if (this.state.currentpic + add >= 0
         && this.state.currentpic + add < this.state.projects.images.length
         && !BlockNextImage) {

         let realindex = this.state.projects.calcCurrentPictureInRealIndex(this.state.currentpic)
         //remove highlight of old
         document.querySelectorAll(".centeritem")[realindex].classList.remove("showFull")

         this.setState({
            currentpic: this.state.currentpic + add,
         }, () => {
            realindex = realindex + add;

            this.updateProgressBar(realindex)
            document.querySelector("#main_wrapper").style = `width: ${this.state.projects.images.length * nextMultiplier + 100}vw; left: calc(-${this.state.currentpic * nextMultiplier}vw - 20px)`

            //add highlight to new
            document.querySelectorAll(".centeritem")[realindex].classList.add("showFull")

            if (this.state.projects.isType(this.state.currentpic, "mp4")) {
               lastMP4 = document.querySelector(`#video${this.state.projects.getMp4id(this.state.currentpic)}`)
               lastMP4.play()
            }
            else if (lastMP4 !== null) {
               lastMP4.pause();
               lastMP4 = null;
            }
         })

         BlockNextImage = true;
         setTimeout(() => BlockNextImage = false, 1000)

      }
      else if (this.state.currentpic + add >= this.state.projects.images.length && !BlockNextImage) {
         //play "end of collection animation"
         let mainwrapper = document.querySelector("#main_wrapper")

         mainwrapper.animate([
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 20px)` },
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 110px)` },
            { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 20px)` }
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

   animateMount = () => {
      //animate footer
      let footer = document.querySelector("#DetailsFooter");
      footer.style = "position:relative";
      let footeranim = footer.animate([
         { top: "calc(100% + 140px)" },
         { top: 0 }
      ], { duration: 1000, delay: 500, easing: "ease-out" })
      footeranim.onfinish = () => footer.style = "";
   }

   animateMountFromProjectDetails = () => {

      let right_arrow = document.querySelector(".right_arrow")
      right_arrow.animate([
         {opacity:0},
         {opacity:1}
      ], {duration: 1000, easing:"ease-out"})

      let main_wrapper = document.querySelector("#main_wrapper");
      main_wrapper.animate([
         { left: "100vw" },
         { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 20px` }
      ], { duration: 1000, easing: "ease-out" })

   }

   componentDidMount() {

      if (this.props.calledFromProjectDetails) {
         let wrapper = document.querySelectorAll("#main_wrapper")[1]
         let left = document.querySelectorAll("#detail_description_text")[1]
         wrapper.classList.add("hide")

         setTimeout(() => {
            wrapper.classList.remove("hide")

            this.animateMountFromProjectDetails();
            window.addEventListener("resize", this.WindowEventHandler);
            this.updateProgressBar(this.state.currentpic);
            this.calculateIframeDimensions();

         }, 1100)
      }
      else {
         this.animateMount();
         try {
            this.removeOverview();
         }
         catch (e) { console.error(e) }

         this.calculateIframeDimensions();
         this.updateProgressBar(this.state.currentpic);
      }
   }

   calculateIframeDimensions(){
      let iframe = document.querySelector(".centeritem");
      let root = document.querySelector(":root");
      root.style.setProperty("--IframeWidth", iframe.clientWidth + "px");
      root.style.setProperty("--IframeHeight", iframe.clientHeight + "px")
   }

}

export default ProjectDetails
