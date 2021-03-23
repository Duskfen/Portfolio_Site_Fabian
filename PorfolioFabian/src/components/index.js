import React, { Component } from 'react'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import AOS from 'aos';

const ProjectInformation = require('./projects/projects_information.json')
import './css/main.css'
import './css/project_overview.css'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")

import 'aos/dist/aos.css'


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
         showMarquee: false
      };


   }


   wait(ms) {
      var start = new Date().getTime();
      var end = start;
      while (end < start + ms) {
         end = new Date().getTime();
      }
   }

   nextPicture = (ev) => {
      this.setState({ currentProject: this.state.currentProject + 1 })
   }

   openProjectdetails = (ev) => {

      this.setState({ showDetails: true });
      let test = document.querySelector("#project_overview_section");
      console.log(test)
      test.classList.add("project_overview_section_clicked")
      // todo load project Details 
   }

   showProjectTitle = (ev) => this.setState({ showMarquee: true })
   hideProjectTitle = (ev) => this.setState({showMarquee: false});

   render() {
      return (
         <div id="wrapper">
            <div id="projectDetailWrapper" className={this.state.showMarquee? "marqueeactive":null}>

               {this.state.showMarquee ?
                  <div id="marquee" data-aos="fade-up" >
                     <p className="marquee_text">{this.state.projects.getProjectAt(this.state.currentProject).title}</p>
                  </div>
                  : null
               }
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
   }
   componentDidUpdate() {
      this.state.showMarquee ? this.calculateMarqueeKeyFrames() : null;
   }

   calculateMarqueeKeyFrames = () => {
      let marquee = document.querySelector("#marquee");
      const keyFrames = document.createElement("style");
      keyFrames.innerHTML =
         `@keyframes floatText {
         0%{
            left: 80px
         }
         50%{
            left: calc(100% - ${marquee.scrollWidth+300}px)
         }
         100%{
            left: 80px
         }
       }`;
      marquee.appendChild(keyFrames)
   }
}

export default Index;