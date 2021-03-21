import React, {Component} from 'react'
import MouseCircle from "./circle"

const ProjectInformation = require('./projects/projects_information.json')
import './css/main.css'
const full_logo = require("./img/logo_full.svg")
const right_arrow = require("./img/arrow_right.svg")


class Project{
   constructor(information){
      //this.path = information.path;
      this.title = information.title;
      this.textheading = information.textheading;
      this.subtext = information.subtext

      this.titleImage = require(`./projects/${information.path}/main.png`)
      this.images = []
      for(let i = 0; i < information.count_imgs; i++){
         this.images.push(require(`./projects/${information.path}/img/${i}.png`))
      }
   }
}

class Index extends Component{
   constructor(props){
      super(props);
      this.state = {
         projects: this.initProjects()
      };
   }

   wait(ms){
      var start = new Date().getTime();
      var end = start;
      while(end < start + ms) {
        end = new Date().getTime();
     }
   }

   initProjects = () =>{
      let projects = []
      for(let project of ProjectInformation.projects){
         projects.push(new Project(project))
      }
   }

   nextPicture = (ev) => {
      console.log(ev)
   }

   test = () => {
      this.wait(4000)
   }

   render(){
      return (
         <div id="wrapper">
            {this.test()}
            <MouseCircle></MouseCircle>
            <header>
                  <div id="head_items">
                     <img src={full_logo} alt="logo" className="full_logo"></img>
                     <p>portfolio</p>
                  </div>
               </header>
               
               <section id="project_overview_section">

               </section>
               
               <footer>
                  <div id="footer_overview_items">
                     <a href="/branding">branding</a>
                     <a href="/about">über mich</a>
                     <a href="#" className="right_arrow" onClick={(ev) => this.nextPicture(ev)}><img src={right_arrow}></img></a>
                  </div>
               </footer>
         </div>
      );
   }
}

export default Index;