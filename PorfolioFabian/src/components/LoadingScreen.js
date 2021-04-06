import React, { Component } from 'react'
import "./css/loading.css"
import loading_full from "./img/loading_icon.svg"

// --------------------------

const ProjectInformation = require('./projects/projects_information.json')
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")
const sexyBackgroundImage = require("./img/SexyBackgroundImage.jpg")
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


// --------------------------

class LoadingScreen extends Component {  
   
   constructor(props){
      super(props);

      this.state = {
         projects: new ProjectList(),
      }

   }
   
  render() {
    return (
      <div id="loadingScreen">
         <div className="loadingItem">
            <img src={loading_full} id="loading_empty" alt="loading..."></img>
            <img src={loading_full} id="loading_full" alt="loading..."></img>
         </div>
         <div id="invisibleLoading">
            
               <img src={full_logo}></img>
               <img src={right_arrow}></img>
               <img src={sexyBackgroundImage}></img>

               {this.state.projects.projects.map((project, i) => {
                  return (
                     <div key={`loading_image_${i}`}>
                        <img src={project.titleImage}></img>
                        {
                           project.images.map((image, j) => {
                             return <img src={image} key={`loading_subimage_${j}`}></img>
                           })
                        }
                     </div>
                  )
                  
               })
               } 
            
         </div>
      </div>
    )
  }

}

export default LoadingScreen
