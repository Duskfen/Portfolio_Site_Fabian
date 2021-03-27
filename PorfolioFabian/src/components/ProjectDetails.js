import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")


import "./css/projectDetails.css"
import Index from "./index"

class Project {
   constructor(project) {
      this.images = project.images
      // this.images.push("placeholder")

      this.image_extension = [...project.image_extention];
      // this.image_extension.push("placeholder");

      this.subtext = project.subtext;
      this.title = project.title;
      this.textheading = project.textheading;
   }

   getImageAt(index) {

      // if ((index % this.images.length) === -1 || (index % this.images.length) === this.images.length - 1) {
      //    return (<div id="lefttext">
      //       <h2>{this.textheading}</h2>
      //       <p>{this.subtext}</p>
      //    </div>)
      // }

      let returnstring;
      let ismp4 = false;

      if((index % this.images.length) < 0) {
         returnstring = this.images[this.images.length + (index % this.images.length)]
         if(this.image_extension[this.image_extension.length + (index % this.image_extension.length)] === "mp4") ismp4 = true;
      }
      else {
         returnstring = this.images[index % this.images.length]
         if(this.image_extension[index % this.image_extension.length] === "mp4") ismp4 = true;
      }

      if (ismp4) {
         return (
            <video autoPlay preload="auto" loop className="centeritem">
               <source src={returnstring} type="video/mp4"></source>
            </video>
         )
      }
      else return <img src={returnstring} className="centeritem" loading="lazy" id={index==0?"Mainimg":null}></img>
   }
}

class ProjectDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         projects: new Project(props.currentProject),
         // lastpic: -1,
         currentpic: 0,
         // nextpic: 1,
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

                  <section id="main_wrapper" style={{width: `${this.state.projects.images.length*100}vw`, left:"-70px"}}>
                     {/* <div className="left">
                        {this.state.projects.getImageAt(this.state.lastpic)}
                     </div>
                     <div className="center">
                        {this.state.projects.getImageAt(this.state.currentpic)}
                     </div>
                     <div className="right">
                        {this.state.projects.getImageAt(this.state.nextpic)}
                     </div> */}
                     {this.state.projects.images.map((image, i) => {
                       return (
                        <div key={`detailImage_${i}`}>
                           {this.state.projects.getImageAt(i)}
                        </div>  
                        )
                     })}
                  </section>

                  <footer>
                     <div id="footer_overview_items">
                        <p> TODO </p>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.returnToOverview? <Index removeDetailWrapper={true} currentProjectNumber={this.props.currentProjectNumber} lastProjectNumber={this.props.lastProjectNumber}></Index>:null}
         </React.Fragment>

      )
   }

   returnToOverview = () => {


      //TODO animate footer
      //TODO animate left and right
      //TODO scroll back to first img 

      let mainimg = document.querySelector("#main_wrapper #Mainimg");

      this.nextPicture(null, -1*this.state.currentpic);

      document.querySelector("#main_wrapper").classList.add("main_wrapper_return_to_overview")
      mainimg.animate([
         {clipPath: "inset(0)"},
         {clipPath: "inset(5%)"}
      ],
      {
         duration:1000,
         easing:"ease-out"
      })
      
      this.setState({returnToOverview: true})

   }

   nextPicture = (event, add) => {
      if(this.state.currentpic + add >= 0
         && this.state.currentpic + add < this.state.projects.images.length){

            this.setState({
               currentpic: this.state.currentpic + add,
            }, () => {
               document.querySelector("#main_wrapper").style=`width: ${this.state.projects.images.length*100}vw; left: calc(-${this.state.currentpic*100}vw - 70px)`
            })
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

   CheckIfHmoreThanWidth = () =>{
      if(window.innerHeight >= window.innerWidth){
         document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach((img) => {
            img.style = "width: 100%";
         })
      }
      else{
         document.querySelectorAll("#main_wrapper img, #main_wrapper video").forEach((img) => {
            img.style = "";
         })
      }
   }

   componentDidMount() {
      try {
         this.removeOverview();
      }
      catch (e) { console.error(e) }

      window.addEventListener("resize", (e) => {this.CheckIfHmoreThanWidth()});
      this.CheckIfHmoreThanWidth();
   }

}

export default ProjectDetails
