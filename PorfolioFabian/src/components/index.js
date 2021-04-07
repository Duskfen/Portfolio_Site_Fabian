import React, { Component } from 'react'
import ProjectDetails from './ProjectDetails.js'

const ProjectInformation = require('./projects/projects_information.json')
import './css/main.css'
import './css/project_overview.css'
import full_logo from "./img/logo_full.svg"
import Impressum from './impressum'
import Contact from './contact'
import About from './about'
const right_arrow = require("./img/arrow_right.svg")


class ProjectList {
   constructor() {
      this.projects = [];
      for (let project of ProjectInformation.projects) {
         this.projects.push(new Project(project))
      }
   }

   getProjectAt(index) {
      if ((index % this.projects.length) < 0) {
         return this.projects[this.projects.length + (index % this.projects.length)]
      }
      return this.projects[index % this.projects.length];
   }
}
class Project {
   constructor(information) {
      this.title = information.title;
      this.textheading = information.textheading;
      this.subtext = information.subtext
      this.image_extention = information.image_extention

      this.titleImage = require(`./projects/${information.path}/main.jpg`)
      this.images = []
      for (let i = 0; i < information.count_imgs; i++) {
         this.images.push(require(`./projects/${information.path}/img/${i}.${information.image_extention[i % information.image_extention.length]}`))
      }
   }
}

class Index extends Component {
   constructor(props) {

      super(props);
      this.state = {
         projects: new ProjectList(),
         currentProject: this.props.currentProjectNumber | 0,
         lastProject: this.props.lastProjectNumber | -1,
         showDetails: false,
         clickedRoute: null,
         showMarquee: false,
         marqueeCount: 2,
      };

      this.blockscroll = false;
   }

   calculateMarqueeCount = (ev = null) => {
      try {
         let marquee = document.querySelectorAll(".marquee_text")[0]
         this.setState({ marqueeCount: Math.ceil(window.innerWidth / marquee.scrollWidth) + 1 })
      }
      catch (e) {}
   }

   nextPicture = (ev, add = 1) => {
      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
         this.setState({ currentProject: this.state.currentProject + add, lastProject: this.state.currentProject }, () => {
            this.calculateMarqueeCount();
            setTimeout(() => { this.calculateMarqueeCount(); this.animateMarquee(document.querySelectorAll(".marquee_text")); }, 1501)
            this.handleNextAnimations();
         })
      }
   }

   handleNextAnimations = () => {
      let currentpicture = document.querySelector("#currentpicture")

      if (this.state.currentProject < this.state.lastProject) {
         currentpicture.animate([
            { clipPath: "inset(5% 95% 5% 5%)" },
            { clipPath: "inset(5%)" }
         ], { duration: 900, iterations: 1, easing: "ease-in-out" })
      }
      else {
         currentpicture.animate([
            { clipPath: "inset(5% 5% 5% 95%)" },
            { clipPath: "inset(5%)" }
         ], { duration: 900, iterations: 1, easing: "ease-in-out" })
      }
   }

   openProjectdetails = (ev) => {
      let footer = document.querySelector("#footerOverview")
      //animate footer
      footer.style = "position:relative; top: calc(100% + 140px)";
      footer.animate([
         { top: 0 },
         { top: "calc(100% + 140px)" }
      ], { duration: 1000, delay: 300, easing: "ease-out" })


      this.setState({ showMarquee: false })

      let project_overview_section = document.querySelector("#project_overview_section");
      project_overview_section.classList.add("project_overview_section_clicked")

      let lines = document.querySelectorAll(".line")

      lines.style = "width: 0";
      lines.forEach((line) => line.animate([
         { width: "50%" },
         { width: 0 }
      ], { duration: 1000, easing: "ease-in-out" }))

      setTimeout(() => {
         this.setState({ showDetails: true })
      }, 1000);
   }

   showProjectTitle = (ev) => {
      this.setState({ showMarquee: true }, () => this.animateMarquee(document.querySelectorAll(".marquee_text")))
   }

   hideProjectTitle = (ev, showagain = false) => {
      this.setState({ showMarquee: false });
      if (showagain) {
         this.showProjectTitle();
      }
   }

   createMarquees = () => {
      let marquees = [];

      for (let i = 0; i < this.state.marqueeCount; i++) {
         marquees.push(<p className="marquee_text" key={`marqueetext_${i}`}>{this.state.projects.getProjectAt(this.state.currentProject).title}</p>)
      }

      return marquees
   }

   animateMarquee = (marqueeElements) => {
      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
         marqueeElements.forEach((element, index) => {
            element.getAnimations()[0]?.cancel();

            element.animate([
               { transform: `translateX(-${element.scrollWidth}px)` }
            ], { duration: element.scrollWidth * 3.8, iterations: Infinity, easing: "linear", id: `marquee_${index}` })
         });
      }
   }

   render() {

      return (
         <React.Fragment>

            <div id="wrapper" onWheel={(e) => {
               if (!this.state.showDetails && !this.blockscroll) {
                  this.blockscroll = true;
                  setTimeout(() => this.blockscroll = false, 1000);

                  if (e.deltaY < 0) this.nextPicture(e, -1)
                  else this.nextPicture(e, 1)
               }
            }}>
               <div id="projectDetailWrapper" className={this.state.showMarquee ? "marqueeactive" : null}>
                  <div id="marquee" className={this.state.showMarquee ? null : "hide"}>
                     {this.createMarquees()}
                  </div>
                  <header>
                     <div id="head_items">
                        <a href="#" onClick={() => this.nextPicture(null, -1 * this.state.currentProject)}>
                           <img src={full_logo} alt="logo" className="full_logo"></img>
                        </a>
                        <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev, 1)}><img src={right_arrow}></img></a>
                     </div>
                  </header>

                  <section id="project_overview_wrapper">
                     <div className="line lineleft"></div>
                     <div id="project_overview_section">
                        <img id="currentpicture" src={this.state.projects.getProjectAt(this.state.currentProject).titleImage} alt={this.state.projects.getProjectAt(this.state.currentProject).title} className="TitleImage" onClick={(ev) => this.openProjectdetails(ev)} onMouseOverCapture={(ev) => this.showProjectTitle(ev)} onMouseLeave={(ev) => this.hideProjectTitle(ev)}></img>
                        <img id="picturebefore" src={this.state.projects.getProjectAt((this.state.lastProject)).titleImage} alt={this.state.projects.getProjectAt(this.state.lastProject).title} className="TitleImage"></img>
                     </div>
                     <div className="line lineright"></div>
                  </section>

                  <footer id="footerOverview">
                     <div id="footer_overview_items">
                        <a onClick={() => { this.setState({ clickedRoute: "Impressum" }); this.animateToSubPage() }}>impressum</a>
                        <a onClick={() => { this.setState({ clickedRoute: "About" }, () => this.animateToUeberMich());  }}>über mich</a>
                        <a onClick={() => { this.setState({ clickedRoute: "Contact" }); this.animateToSubPage() }}>kontakt</a>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.showDetails ? <ProjectDetails currentProject={this.state.projects.getProjectAt(this.state.currentProject)} currentProjectNumber={this.state.currentProject} lastProjectNumber={this.state.lastProject} allProjects={this.state.projects}></ProjectDetails> : null}
            {this.state.clickedRoute === "Impressum" ? <Impressum currentProjectNumber={this.state.currentProject} lastProjectNumber={this.state.lastProject}></Impressum> : null}
            {this.state.clickedRoute === "About" ? <About currentProjectNumber={this.state.currentProject} lastProjectNumber={this.state.lastProject}></About> : null}
            {this.state.clickedRoute === "Contact" ? <Contact currentProjectNumber={this.state.currentProject} lastProjectNumber={this.state.lastProject}></Contact> : null}
         </React.Fragment>
      );
   }

   animateToUeberMich = () => {
      let wrapper = document.querySelector("#wrapper")
      let animation = wrapper.animate([
         { clipPath: "inset(0%)", opacity:1 },
         { clipPath: "inset(0% 0% 100% 0%)", opacity:1 }
      ], { duration: 1000, delay: 30, easing: "ease-in-out" })

      animation.onfinish = () =>  {document.querySelector("#aboutWrapper").style=""
         wrapper.remove()
      };
   }

   animateMountFromAbout = () => {
      let wrapper = document.querySelector("#wrapper")

      wrapper.style="position:relative; bottom:100vh"
      let animation = wrapper.animate([
         { clipPath: "inset(0% 0% 100% 0%)"},
         { clipPath: "inset(0%)"}

      ], {duration: 1000, easing: "ease-in-out" })

      animation.onfinish = () =>  {
         wrapper.style = "";
         document.querySelector("#aboutWrapper").remove()
      };
   }


   animateToSubPage = () => {
      let footer = document.querySelector("#footerOverview")
      let arrow = document.querySelector("header .right_arrow")
      let currentpicture = document.querySelector("#currentpicture")
      document.querySelector("#picturebefore").style="opacity:0"

      currentpicture.animate([
         { clipPath: "inset(5% 5% 5% 5%)", opacity:1 },
         { clipPath: "inset(5% 5% 95% 5%)", opacity:0 }
      ], { duration: 1001, easing: "ease-in-out" })

      arrow.animate([
         {opacity:1},
         {opacity:0}
      ], {duration: 1001, easing: "ease-out"})

      footer.style = "position:relative";
      footer.animate([
         { top: 0 },
         { top: "calc(100% + 140px)" },
      ], { duration: 1001, easing:"ease-out" })

      setTimeout(() => document.querySelector("#wrapper").remove(),1000);
   }

   animateMountFromSubpage = () => {
      let currentpicture = document.querySelector("#currentpicture")
      let picturebefore = document.querySelector("#picturebefore")

      picturebefore.animate([
         { opacity:0 },
         { opacity:0 }
      ], { duration: 1001, delay: 900, easing: "ease-in-out" })
      currentpicture.animate([
         { clipPath: "inset(95% 5% 5%  5%)", opacity:0 },
         { clipPath: "inset(85% 5% 5%  5%)", opacity:1 },
         { clipPath: "inset(60% 5% 5%  5%)", opacity:1 },
         { clipPath: "inset(5% 5% 5% 5%)", opacity:1 }
      ], { duration: 1001, delay: 900, easing: "ease-in-out" })

   }


   removeLoadingScreen() {
      try {
         let loading_screen = document.querySelector("#loadingScreen")
         let animation = loading_screen.animate([
            { opacity: 1 },
            { opacity: 0 }
         ], {
            duration: 300,
            delay: 1400,
            iterations: 1,
            easing: "linear"
         })
         animation.onfinish = () => loading_screen.remove();
      } catch { console.error("this should not happen; Loading screen couldn't be removed") };
   }

   removeDetailWrapper() {
      try {
         let wrapper = document.querySelector("#Detailwrapper");

         setTimeout(() => {
            wrapper.remove();
         }, 900) //timeout so this component has enough time to render
      } catch (e) { console.error(e) };
   }

   CheckIfHmoreThanWidth = () => {
      if (window.innerHeight >= window.innerWidth) {
         document.querySelectorAll("#project_overview_section img").forEach((img) => {
            img.style = "width: 69%";
         })
      }
      else {
         document.querySelectorAll("#project_overview_section img").forEach((img) => {
            img.style = "";
         })
      }
   }

   animateFooterIn = () => {
      let footer = document.querySelector("#footerOverview")
      //animate footer
      footer.style = "position:relative; top: calc(100% + 140px)";
      let footeranim = footer.animate([
         { top: "calc(100% + 140px)" },
         { top: 0 }
      ], { duration: 1000, delay: 300 })

      footeranim.onfinish = () => { footer.style = ""; }
   }

   componentDidMount() {
      this.animateFooterIn();

      if (this.props.removeDetailWrapper) {
         this.removeDetailWrapper();
      }
      else if(this.props.calledFromSubPage) {
         this.animateMountFromSubpage();
      }
      else if(this.props.calledFromAbout){
         this.animateMountFromAbout();
      }
      else{
         this.removeLoadingScreen();
      }

      window.addEventListener("resize", this.windowListenerHandler);

      this.CheckIfHmoreThanWidth()
      this.calculateMarqueeCount();

   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.windowListenerHandler)
   }

   windowListenerHandler = () => {
      this.CheckIfHmoreThanWidth();
      this.calculateMarqueeCount()
   }
}

export default Index;