import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg");

import "./css/projectDetails.css"
import Index from "./index"

var BlockNextImage = false;
var nextMultiplier = 60;
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
            <video preload="auto" loop className="centeritem" id={"video" + returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT")}>
               <source src={returnstring} type="video/mp4"></source>
            </video>
         )
      }
      else return <img src={returnstring} className={`centeritem ${index == 0 ? "showFull" : ""}`} id={index == 0 ? "Mainimg" : null}></img>
   }

   isMp4(index) {
      if ((index % this.images.length) < 0) {
         if (this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === "mp4") return true;
      }
      else {
         if (this.image_extension[index % this.image_extension.length] === "mp4") return true;
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
      return returnstring.replaceAll("/", "SLASH").replaceAll(".", "DOT")
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
         displayDescription: true
      };

      this.perCentStep = 100 / (this.state.projects.images.length - 1);
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

                  {this.state.displayDescription ?
                     <div id="detail_description_text">
                        <div>
                           <h2>{this.state.projects.textheading}</h2>
                           {this.state.projects.subtext.map((text, i) => {
                              return <p key={"subtext_" + i}>{text}</p>
                           })}

                        </div>
                     </div> : null
                  }
                  <section id="main_wrapper" style={{ width: `${this.state.projects.images.length * 100}vw`, left: "-70px" }}>
                     {this.state.projects.images.map((image, i) => {
                        return (
                           <div key={`detailImage_${i}`}>
                              {this.state.projects.getImageAt(i)}
                           </div>
                        )
                     })}
                  </section>
                  {this.state.displayDescription ?
                     <div onClick={() => this.loadNextProject()} className={"displayNone"} id="detail_next_picture">
                        <p >nächstes Projekt &gt;</p>
                     </div> : null
                  }
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
      this.animateUnMountToProjectDetails(wrapper, document.querySelector("#detail_next_picture"))

      this.setState({ loadNextProject: true })


   }

   animateUnMountToProjectDetails = (wrapper, detailNextPicture) => {
      let main_wrapper = document.querySelector("#main_wrapper")

      detailNextPicture.style="opacity:0"
      detailNextPicture.animate([
         {opacity: 1},
         {opacity: 0}
      ], {duration: 300, easing:"ease-out"})

      let animation = main_wrapper.animate([
         { left: `calc(-${this.state.currentpic * nextMultiplier}vw - 70px` },
         { left: "-100%" }
      ], { duration: 1000, easing: "ease-out" })

      animation.onfinish = () => {wrapper.remove();}
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

         //animate left side
         if (this.state.displayDescription) {
            let left = document.querySelector("#detail_description_text")
            left.animate([
               { top: left.getBoundingClientRect().top + "px", opacity: 1 },
               { top: left.getBoundingClientRect().top + 40 + "px", opacity: 1 },
               { top: left.getBoundingClientRect().top + 80 + "px", opacity: 0 },
               { top: left.getBoundingClientRect().top + 80 + "px", opacity: 0 }
            ], { duration: 1001, easing: "ease-out" })
         }

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

         //hide left or right text
         if (this.state.displayDescription && realindex >= 0) document.querySelector("#detail_description_text").classList.add("hide");
         if (this.state.displayDescription && realindex <= this.state.projects.images.length - 1) document.querySelector("#detail_next_picture").classList.add("displayNone");

         this.setState({
            currentpic: this.state.currentpic + add,
         }, () => {
            realindex = realindex + add;

            this.updateProgressBar(realindex)
            document.querySelector("#main_wrapper").style = `width: ${this.state.projects.images.length * nextMultiplier + 100}vw; left: calc(-${this.state.currentpic * nextMultiplier}vw - 70px)`

            //display left or right text
            if (this.state.displayDescription && realindex === 0) setTimeout(() => document.querySelector("#detail_description_text").classList.remove("hide"), 400)
            if (this.state.displayDescription && realindex === this.state.projects.images.length - 1){
               
               let detailNext = document.querySelector("#detail_next_picture")
               detailNext.style="opacity:1"

               setTimeout(() => {
                  detailNext.classList.remove("displayNone")
                  detailNext.style=""
               }, 400) 
            } 
            //add highlight to new
            document.querySelectorAll(".centeritem")[realindex].classList.add("showFull")

            if (this.state.projects.isMp4(this.state.currentpic)) {
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

      if (mainImg.clientWidth === 0) { //just so if it don't get called to early (before rendering of the imgs)..
         setTimeout(this.CheckIfNextPictureShouldBeTeasered, 10)
         return;
      }

      if (document.body.clientWidth < (mainImg.clientWidth / 0.6) + 100) { //to small -> ...
         nextMultiplier = 100;
         document.querySelectorAll("#main_wrapper > div").forEach((div) => div.classList.add("toSmallToPreview"))
         this.nextPicture(null, 0);

         this.setState({ displayDescription: false });
      }
      else if (nextMultiplier === 100) {
         nextMultiplier = 60;
         document.querySelectorAll("#main_wrapper > div").forEach((div) => div.classList.remove("toSmallToPreview"))
         this.nextPicture(null, 0);

         this.setState({ displayDescription: true });
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
      //left side
      if (this.state.displayDescription) {
         let left = document.querySelector("#detail_description_text");
         this.calculateTextWidthHeight()
         left.animate([
            { top: left.getBoundingClientRect().top + 80 + "px", opacity: 0 },
            { top: left.getBoundingClientRect().top + 0 + "px", opacity: 1 },
         ], { duration: 1000, delay: 0, easing: "ease-out" })

         //right side
         let secondimg = document.querySelectorAll("#main_wrapper > div")[1]
         secondimg.animate([
            { marginLeft: 0 },
            { marginLeft: nextMultiplier - 100 + "vw" },
         ], { duration: 1000, delay: 500, easing: "ease-out" })
      }

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

      let main_wrapper = document.querySelector("#main_wrapper");
      main_wrapper.animate([
         {left: "100vw"},
         {left: `calc(-${this.state.currentpic * nextMultiplier}vw - 70px`}
      ], {duration:1000, easing:"ease-out"})

      if (this.state.displayDescription) {
         let left = document.querySelector("#detail_description_text");
         this.calculateTextWidthHeight()
         left.animate([
            { top: left.getBoundingClientRect().top + 80 + "px", opacity: 0 },
            { top: left.getBoundingClientRect().top + 0 + "px", opacity: 1 },
         ], { duration: 1000, delay: 0, easing: "ease-out" })
      }
   }

   calculateTextWidthHeight = () => {
      if (this.state.displayDescription) {
         let mainImgWidth = document.querySelector("#Mainimg").clientWidth;

         if (mainImgWidth === 0) { //just so if it don't get called to early (before rendering of the imgs)..
            setTimeout(this.calculateTextWidthHeight, 10)
            return;
         }

         let windowwidth = document.body.clientWidth;
         let texttochange = document.querySelector("#detail_description_text")

         texttochange.style = `width: calc(${(windowwidth - mainImgWidth) / 2}px - 10%)`
         return (windowwidth - mainImgWidth) / 2
      }
   }

   componentDidMount() {

      if (this.props.calledFromProjectDetails) {
         let wrapper = document.querySelectorAll("#main_wrapper")[1]
         let left = document.querySelectorAll("#detail_description_text")[1]
         wrapper.classList.add("hide")
         left.classList.add("hide")

         setTimeout(() => {

            wrapper.classList.remove("hide")
            left.classList.remove("hide")

            this.animateMountFromProjectDetails();
            window.addEventListener("resize", this.WindowEventHandler);
            this.CheckIfHmoreThanWidth();
            this.CheckIfNextPictureShouldBeTeasered()
            this.updateProgressBar(this.state.currentpic);

         }, 1100)
      }
      else {
         this.animateMount();
         try {
            this.removeOverview();
         }
         catch (e) { console.error(e) }

         window.addEventListener("resize", this.WindowEventHandler);
         this.CheckIfHmoreThanWidth();
         this.CheckIfNextPictureShouldBeTeasered()
         this.updateProgressBar(this.state.currentpic);
      }
   }

   WindowEventHandler = () => {
      this.CheckIfHmoreThanWidth();
      this.CheckIfNextPictureShouldBeTeasered()
      this.calculateTextWidthHeight();
   }
}

export default ProjectDetails
