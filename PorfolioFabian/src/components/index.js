import React, { Component } from 'react'
import AOS from 'aos';

const ProjectInformation = require('./projects/projects_information.json')
import './css/main.css'
import './css/project_overview.css'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")

import 'aos/dist/aos.css'
//
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
      //this.path = information.path;
      this.title = information.title;
      this.textheading = information.textheading;
      this.subtext = information.subtext

      this.titleImage = require(`./projects/${information.path}/main.jpg`)
      this.images = []
      for (let i = 0; i < information.count_imgs; i++) {
         this.images.push(import(`./projects/${information.path}/img/${i}.${information.image_extention[i % information.image_extention.length]}`))
      }
   }
}

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         projects: new ProjectList(),
         currentProject: 0,
         lastProject: -1,
         showDetails: false,
         showMarquee: false,
         marqueeCount: 2,
      };
   }

   calculateMarqueeCount = (ev = null) => {
      let marquee = document.querySelectorAll(".marquee_text")[0]
      this.setState({ marqueeCount: Math.ceil(window.innerWidth / marquee.scrollWidth) + 1 })
   }

   nextPicture = (ev, add = 1) => {
      if (document.querySelector("#currentpicture").getAnimations()[0] === undefined) {
         this.setState({ currentProject: this.state.currentProject + add, lastProject: this.state.currentProject }, () => {
            this.calculateMarqueeCount();
            this.handleNextAnimations();
         })
      }
   }

   handleNextAnimations = () => {
      let picturebefore = document.querySelector("#picturebefore")
      let currentpicture = document.querySelector("#currentpicture")


      picturebefore.style = "display:block;"
      let beforeanimation = picturebefore.animate([
         { width: "100%" },
         { width: 0 }
      ], {
         duration: 900,
         iterations: 1,
         easing: "ease-in-out"
      })
      beforeanimation.onfinish = () => {
         picturebefore.style = "display:none" //maybe also display it before
      }

      currentpicture.style = ``;
      let currentanimation = currentpicture.animate([
         { width: 0 },
         { width: "100%" }
      ], {
         duration: 900,
         iterations: 1,
         easing: "ease-in-out"
      })
      currentanimation.onfinish = () => {
         currentpicture.style = "";
      }

      // console.log(picturebefore.getAnimations())
   }

   openProjectdetails = (ev) => {
      this.setState({ showDetails: true });
      let test = document.querySelector("#project_overview_section");
      test.classList.add("project_overview_section_clicked")
      // todo load project Details 
   }

   showProjectTitle = (ev) => {
      this.setState({ showMarquee: true }, () => this.animateMarquee(document.querySelectorAll(".marquee_text")))
   }

   hideProjectTitle = (ev) => this.setState({ showMarquee: false });

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
            ], { duration: element.scrollWidth * 2.3, iterations: Infinity, easing: "linear", id: `marquee_${index}` })
         });
      }
   }

   render() {
      return (
         <div id="wrapper" onWheel={(e) => {
            if (e.deltaY < 0) this.nextPicture(e, -1)
            else this.nextPicture(e, 1)
         }}>
            <div id="projectDetailWrapper" className={this.state.showMarquee ? "marqueeactive" : null}>
               <div id="marquee" className={this.state.showMarquee ? null : "hide"}>
                  {this.createMarquees()}
               </div>
               <header>
                  <div id="head_items" data-aos="fade-down">
                     <a href="/">
                        <img src={full_logo} alt="logo" className="full_logo"></img>
                     </a>
                     <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev)}><img src={right_arrow}></img></a>
                  </div>
               </header>

               <section id="project_overview_wrapper">

                  <div className="line lineleft"></div>
                  {this.state.currentProject > this.state.lastProject ?
                     <div id="project_overview_section" data-aos="zoom-in">
                        <img id="currentpicture" src={this.state.projects.getProjectAt(this.state.currentProject).titleImage} alt={this.state.projects.getProjectAt(this.state.currentProject).title} className="TitleImage" onClick={(ev) => this.openProjectdetails(ev)} onMouseOver={(ev) => this.showProjectTitle(ev)} onMouseLeave={(ev) => this.hideProjectTitle(ev)}></img>
                        <img id="picturebefore" src={this.state.projects.getProjectAt((this.state.lastProject)).titleImage} alt={this.state.projects.getProjectAt(this.state.lastProject).title} className="TitleImage"></img>
                     </div> :
                     <div id="project_overview_section" data-aos="zoom-in">
                        <img id="picturebefore" src={this.state.projects.getProjectAt((this.state.lastProject)).titleImage} alt={this.state.projects.getProjectAt(this.state.lastProject).title} className="TitleImage"></img>
                        <img id="currentpicture" src={this.state.projects.getProjectAt(this.state.currentProject).titleImage} alt={this.state.projects.getProjectAt(this.state.currentProject).title} className="TitleImage" onClick={(ev) => this.openProjectdetails(ev)} onMouseOver={(ev) => this.showProjectTitle(ev)} onMouseLeave={(ev) => this.hideProjectTitle(ev)}></img>
                     </div>
                  }
                  <div className="line lineright"></div>

               </section>
               <footer data-aos="fade-up">
                  <div id="footer_overview_items">
                     <a href="/branding">branding</a>
                     <a href="/about">über mich</a>
                     <a href="/contact">kontakt</a>
                  </div>
               </footer>
            </div>
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

   componentDidMount() {
      AOS.init();

      window.addEventListener("resize", this.calculateMarqueeCount);
      this.calculateMarqueeCount();
      this.removeLoadingScreen();
      // this.fixScrollBehavior(document.body)
      // this.animateMarquee(document.querySelectorAll(".marquee_text")) //TODO delete
   }

   componentWillUnmount() {
      window.removeEventListener("resize", this.calculateMarqueeCount)
   }
}

export default Index;