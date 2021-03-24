import React, { Component } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
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

      if(index < 0){
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
         this.images.push(import(`./projects/${information.path}/img/${i}.${information.image_extention[i%information.image_extention.length]}`))
      }
   }
}

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         projects: new ProjectList(),
         currentProject: 0,
         showDetails: false,
         showMarquee: false,
         marqueeCount: 2
      };
   }

   calculateMarqueeCount = (ev = null) => {
      let marquee = document.querySelectorAll(".marquee_text")[0]
      this.setState({marqueeCount: Math.ceil(window.innerWidth/marquee.scrollWidth)+1})
   }

   wait(ms) {
      var start = new Date().getTime();
      var end = start;
      while (end < start + ms) {
         end = new Date().getTime();
      }
   }

   nextPicture = (ev) => {
      this.setState({ currentProject: this.state.currentProject + 1 }, () => this.calculateMarqueeCount())
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
   hideProjectTitle = (ev) => this.setState({showMarquee: false});

   createMarquees= () => {
      let marquees = [];

      for(let i = 0; i < this.state.marqueeCount; i++){
         marquees.push(<p className="marquee_text" key={`marqueetext_${i}`}>{this.state.projects.getProjectAt(this.state.currentProject).title}</p>)
      }

      return marquees
   }

   render() {
      return (
         <div id="wrapper">
            <div id="projectDetailWrapper" className={this.state.showMarquee? "marqueeactive":null}>
                  <div id="marquee" className={this.state.showMarquee? null:"hide"}>
                     {this.createMarquees()}
                  </div>
               <header>
                  <div id="head_items" data-aos="fade-down">
                     <a href="/">
                        <img src={full_logo} alt="logo" className="full_logo"></img>
                     </a>
                     <p>portfolio</p>
                  </div>
               </header>

               <section id="project_overview_wrapper">
                  <div className="line"></div>
                  <div id="project_overview_section" onClick={(ev) => this.openProjectdetails(ev)} onMouseOver={(ev) => this.showProjectTitle(ev)} onMouseLeave={(ev) => this.hideProjectTitle(ev)} data-aos="zoom-in">
                           <picture>
                              <img src={this.state.projects.getProjectAt(this.state.currentProject).titleImage} alt={this.state.projects.getProjectAt(this.state.currentProject).title} className="TitleImage"></img>
                           </picture>
                           <picture id="#picturebefore">
                              <img src={this.state.projects.getProjectAt((this.state.currentProject-1)).titleImage} alt={this.state.projects.getProjectAt(this.state.currentProject-1).title} className="TitleImage"></img>
                           </picture>
                  </div>
                  <div className="line"></div>
               </section>
               <footer data-aos="fade-up">
                  <div id="footer_overview_items">
                     <a href="/branding">branding</a>
                     <a href="/about">über mich</a>
                     <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev)}><img src={right_arrow}></img></a>
                  </div>
               </footer>
            </div>
         </div>
      );
   }

   componentDidMount() {
      AOS.init();
      document.querySelector("#loadingScreen").remove();
      window.addEventListener("resize", this.calculateMarqueeCount);
      this.calculateMarqueeCount();
   }

   animateMarquee = (marqueeElements) => {
      marqueeElements.forEach((element, index) => {
         element.getAnimations()[0]?.cancel();
         element.animate([
           {transform: `translateX(-${element.scrollWidth}px)`}
         ],{duration: element.scrollWidth*2, iterations:Infinity, easing: "linear", id:`marquee_${index}`})
         // element.style.left = (element.style.left+1) + "px"
      });
   }
}

export default Index;