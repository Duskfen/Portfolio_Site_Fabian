import React, {Component} from 'react'

import Index from "./index"

import "./css/footerSubPage.css";
import "./css/SubPage.css";
import "./css/ueber_mich.css"

import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")
const sexyBackgroundImage = require("./img/SexyBackgroundImage.jpg")
const Lebenslauf = require("./download/Schwarzinger_Lebenslauf.pdf")
class Branding extends Component{
   
   constructor(props) {
      super(props);
      this.state = {
         returnToMainPage: false
      }

      this.load_contact = false;
   }
   
   render() {
      return (
         <React.Fragment>
            <div id="aboutWrapper">
               <div id="projectDetailWrapper">
                  <header>
                     <div id="head_items">
                        <a onClick={this.returnToMainPage}>
                           <img src={full_logo} alt="logo" className="full_logo"></img>
                        </a>
                        <a href="#" className="right_arrow"><img src={right_arrow}></img></a>
                     </div>
                  </header>

                  <section className="main_aside">
                     <div>
                        <p>main not implemented</p>
                     </div>
                  </section>

                  <footer className="FooterSubPage">
                     <div>
                        <div id="DetailsFooterBase">
                           <div className="detailsline" id="DetailsProgressLine"></div>
                           <div className="detailsline"></div>
                        </div>
                        <div className="DetailsSubText">
                           <p><a href={Lebenslauf} target="_blank">lebenslauf download</a></p>
                           <p><a onClick={this.goToKontaktPage}>kontakt</a></p>
                        </div>
                     </div>
                  </footer>
               </div>
               <div id="SexyBackgroundImage">
                  <img src={sexyBackgroundImage} alt="Bild von Fabian"></img>
               </div>
            </div>
            {this.state.returnToMainPage? <Index calledFromAbout={true} instantLoadKontakt={this.load_contact}></Index>:null}
         </React.Fragment>
      );
   }

   goToKontaktPage = () => {
      this.load_contact = true;
      this.returnToMainPage();
   }

   returnToMainPage = () => {
      this.setState({returnToMainPage:true});
   }

   animateMount = () => {
      let main = document.querySelector(".main_aside")
      let footer = document.querySelector("#aboutWrapper .FooterSubPage")

      main.style = "position:relative; opacity: 0";
      main.animate([
         { opacity: 0, top: "30px" },
         { opacity: 1, top: 0 }
      ], { duration: 500, delay: 1000 })
      setTimeout(() => main.style ="position:relative", 1001) 

      footer.style = "position:relative; opacity: 0";
      footer.animate([
         { opacity: 0, top: "40px" },
         { opacity: 1, top: 0 }
      ], { duration: 1000, delay: 1000})
      setTimeout(() => footer.style ="position:relative", 1001) 
   }

   componentDidMount = () => {
      this.animateMount();
      document.querySelector("#aboutWrapper").style="position:relative;top:-100vh";

      this.ScaleSexyImageAndText();
      window.addEventListener("resize", this.ScaleSexyImageAndText)
   }

   componentWillUnmount = () => {
      window.removeEventListener("resize", this.ScaleSexyImageAndText)
   }

   ScaleSexyImageAndText = () => {
      let body = document.body;
      let image = document.querySelector("#SexyBackgroundImage");
      let text = document.querySelector("#aboutWrapper .main_aside > div");
      let textwrapper = document.querySelector("#aboutWrapper .main_aside")

      if(image.clientWidth === 0){
         setTimeout(this.ScaleSexyImageAndText, 30);
         return;
      }

      image.style = `left: ${body.clientWidth/3 - image.clientWidth/3}px`;

      text.style = `left: ${((body.clientWidth/3)*2) - text.clientWidth/2}px;
      top: ${((image.clientHeight/100)*35)-textwrapper.getBoundingClientRect().top}px`
   }
}

export default Branding;