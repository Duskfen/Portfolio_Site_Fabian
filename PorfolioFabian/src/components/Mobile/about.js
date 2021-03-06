import React, { Component } from 'react'

import Index from "./index"
import Contact from './contact'

import "../css/footerSubPage.css";
import "../css/SubPage.css";
import "../css/ueber_mich.css"
import "./css/MobileAboutMe.css"

import { Lethargy } from "lethargy";

import full_logo from "../img/logo_full.svg"
const right_arrow = require("../img/arrow_right.svg")
const sexyBackgroundImage = require("../img/SexyBackgroundImage.jpg")
const Lebenslauf = require("../download/Schwarzinger_Lebenslauf.pdf")

class MainElements {
   constructor() {
      this.mainElements = [
         (
            <div className="TextElement">
               <h2>grüß gott!</h2>
            </div>
         ),
         (
            <div className="TextElement">
               <h2>grüß gott!</h2>
               <p>
                  Ich bin ein Designer stammend aus dem
                  Waldviertel, einem idyllischen Fleck im Osten
                  Österreichs.
               </p>
               <p>
                  Meine Ausbildung habe ich an der höheren
                  technischen Lehranstalt für Grafik- &amp;
                  Kommunikationsdesign in Linz mit
                  Auszeichnung abgeschlossen. Seitdem
                  verfolge ich das Ziel, die Welt Tag für Tag zu
                  verschönern.
               </p>
            </div>
         ),
         (
            <div className="TextElement">
               <h2>hobby? los!</h2>
               <p>(Dystopische) Filme schauen</p>
               <p>Boxen / Fitness</p>
               <p>Mundharmonika spielen</p>
               <p>Makro- &amp; Produktfotografie</p>
               <p>Techniknews aufsaugen</p>
            </div>
         ),
         (
            <div className="TextElement">
               <h2>ich in 3 worten</h2>
               <p>Organisationstalent</p>
               <p>Fairness-Freak</p>
               <p>Sarkasmus-Apostel</p>
            </div>
         ),
         (
            <div className="TextElement">
               <h2>noch nicht genug?</h2>
               <p>
                  Dann downloade gleich meinen <a className="linkInTextElement" href={Lebenslauf} download="Schwarzinger-Lebenslauf.pdf">Lebenslauf </a>
                   und schreibe mir
                  eine <a href="mailto:mail@fabianschwarzinger.work" className="linkInTextElement">E-Mail</a><span className="italic">!</span>
               </p>
               <p>Wir können uns dann gleich an die Arbeit machen, die Welt gemeinsam zu verschönern!</p>
            </div>
         )
      ];


   }

   getElementAt(index) {
      if ((index % this.mainElements.length) < 0) {
         return this.mainElements[this.mainElements.length + (index % this.mainElements.length)]
      }
      return this.mainElements[index % this.mainElements.length];
   }
   getRealIndex(index) {
      if ((index % this.mainElements.length) < 0) {
         return this.mainElements.length + (index % this.mainElements.length)
      }
      return index % this.mainElements.length;
   }
}

class Branding extends Component {

   constructor(props) {
      super(props);

      this.state = {
         returnToMainPage: false,
         goToContact: false,

         textElements: new MainElements(),
         currentTextElement: 0,
         lastTextElement: -1
      }

      this.lethargy = new Lethargy()

      this.perCentStep = 100 / (this.state.textElements.mainElements.length - 1);
   }

   render() {
      return (
         <React.Fragment>
            <div id="aboutWrapper" onWheel={(e) => {

               if (this.lethargy.check(e) === false) return;

               if (!this.state.showDetails) {
                  if (e.deltaY < 0) this.nextElement(-1)
                  else this.nextElement(1)
               }
            }}>
               <div id="projectDetailWrapper">
                  <header>
                     <div id="head_items">
                        <a onClick={this.returnToMainPage}>
                           <img src={full_logo} alt="logo" className="full_logo"></img>
                        </a>
                     </div>
                  </header>

                  <section className="main_aside">
                     <div>
                        <div id="currentTextElement" style={{top: ((document.body.clientHeight / 7)*3) + "px"}} className={this.state.currentTextElement === 0? "FirstText":null}>
                           {this.state.textElements.getElementAt(this.state.currentTextElement)}
                        </div>
                        <div id="lastTextElement" className={this.state.lastTextElement === 0? "FirstText":null}>
                           {this.state.textElements.getElementAt(this.state.lastTextElement) }
                        </div>
                     </div>
                  </section>

                  <section id="project_overview_arrows">
                     <div className="left_arrow" onClick={(ev) => this.nextElement(-1)}>
                        <img src={right_arrow}></img>
                     </div>
                     <div className="right_arrow" onClick={(ev) => this.nextElement(1)}>
                        <img src={right_arrow}></img>
                     </div>
                  </section>

                  <footer className="FooterSubPage">
                     <div>
                        <div id="DetailsFooterBase">
                           <div className="detailsline" id="DetailsProgressLine"></div>
                           <div className="detailsline"></div>
                        </div>
                        <div className="DetailsSubText">
                           <p><a href={Lebenslauf} target="_blank">lebenslauf</a></p>
                           <p><a onClick={this.goToKontaktPage}>kontakt</a></p>
                        </div>
                     </div>
                  </footer>
               </div>
               <div id="SexyBackgroundImage">
                  <img src={sexyBackgroundImage} alt="Bild von Fabian"></img>
               </div>
            </div>
            {this.state.returnToMainPage ? <Index calledFromAbout={true} currentProjectNumber={this.props.currentProjectNumber | 0} lastProjectNumber={this.props.lastProjectNumber | -1}></Index> : null}
            {this.state.goToContact ? <Contact calledFromAbout={true} currentProjectNumber={this.props.currentProjectNumber | 0} lastProjectNumber={this.props.lastProjectNumber | -1}></Contact> : null}
         </React.Fragment>
      );
   }

   updateProgressBar = (index) => {
      document.querySelector("#aboutWrapper #DetailsProgressLine").style = `width: ${this.perCentStep * (index)}%`
   }

   animateNextElement = () => {
      let lastElement = document.querySelector("#aboutWrapper #lastTextElement")
      let currentElement = document.querySelector("#aboutWrapper #currentTextElement")

      if (this.state.currentTextElement > this.state.lastTextElement) {
         lastElement.animate([
            { opacity: 1, left: this.getLeftTocenterElement(lastElement) + "px", zIndex: 1 },
            { opacity: 0, left: this.getLeftTocenterElement(lastElement)-400 + "px", zIndex: 1 }
         ], { duration: 600, easing: "ease-out" })

         currentElement.animate([
            { opacity: 0, left: this.getLeftTocenterElement(currentElement)+300 + "px" },
            { opacity: 0, left: this.getLeftTocenterElement(currentElement)+300 + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" }
         ], { duration: 1200, easing: "ease-out" })
      }
      else {
         lastElement.animate([
            { opacity: 1, left: this.getLeftTocenterElement(lastElement) + "px", zIndex: 1 },
            { opacity: 0, left: this.getLeftTocenterElement(lastElement)+300 + "px", zIndex: 1 }
         ], { duration: 600, easing: "ease-out" })

         currentElement.animate([
            { opacity: 0, left: this.getLeftTocenterElement(currentElement)-400 + "px" },
            { opacity: 0, left: this.getLeftTocenterElement(currentElement)-400 + "px" },
            { opacity: 0, left: this.getLeftTocenterElement(currentElement)-250 + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" }
         ], { duration: 1200, easing: "ease-out" })
      }
   }

   animateLastHasReached = (add) => {
      let currentElement = document.querySelector("#aboutWrapper #currentTextElement")

      if (add < 0) {
         currentElement.animate([
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + 50 + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" }
         ], { duration: 1000, easing: "ease-out" })
      }
      if (add > 0) {
         currentElement.animate([
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement)-50 + "px" },
            { opacity: 1, left: this.getLeftTocenterElement(currentElement) + "px" }
         ], { duration: 1000, easing: "ease-out" })
      }

   }

   centerElement = (el) => {
      el.style.left = `${this.getLeftTocenterElement(el)}px`;
   }
   getLeftTocenterElement = (el) =>  document.body.clientWidth/2 - el.clientWidth/2

   nextElement = (add = 1) => {
      //only if there are no running animations..
      if (document.querySelector("#aboutWrapper #currentTextElement").getAnimations().length <= 0) {
         if (this.state.currentTextElement + add < this.state.textElements.mainElements.length
            && this.state.currentTextElement + add >= 0) {
            this.setState({
               currentTextElement: this.state.currentTextElement + add,
               lastTextElement: this.state.currentTextElement
            }, () => {

               let currentElement = document.querySelector("#currentTextElement")
               let lastElement = document.querySelector("#lastTextElement")


               this.centerElement(currentElement)

               //---------------- if first picture, text more below, image not so much left --------------------
               if(this.state.currentTextElement === 1){
                  this.PositionSexyImageLeft();
                  
                  currentElement.style.top ="";
               } 
               else if(this.state.currentTextElement === 0) {
                  this.PositionSexyImageInitial()
                  currentElement.style.top = `${(document.body.clientHeight / 7)*3}px`
                  
               };
               if(this.state.lastTextElement === 0){
                  lastElement.style.top = `${(document.body.clientHeight / 7)*3}px`
               }
               else {
                  lastElement.style.top = ``;
               }
               //----------------                                                            --------------------


               this.updateProgressBar(this.state.textElements.getRealIndex(this.state.currentTextElement));
               this.animateNextElement();
            })

            
         }
         else {
            this.animateLastHasReached(add);
         }
      }
   }

   goToKontaktPage = () => {
      this.setState({ goToContact: true })
   }

   returnToMainPage = () => {
      this.setState({ returnToMainPage: true });
   }


   animateMount = () => {
      let main = document.querySelector("#aboutWrapper .main_aside")
      let footer = document.querySelector("#aboutWrapper .FooterSubPage")
      let arrows = document.querySelector("#aboutWrapper #project_overview_arrows")

      arrows.style = "position:relative; opacity: 0";
      arrows.animate([
         {opacity:0},
         {opacity:1}
      ], {duration: 1000, delay: 1000, easing: "ease-out"})

      main.style = "position:relative; opacity: 0";
      main.animate([
         { opacity: 0, top: "30px" },
         { opacity: 1, top: 0 }
      ], { duration: 500, delay: 1000 })

      footer.style = "position:relative; opacity: 0";
      footer.animate([
         { opacity: 0, top: "40px" },
         { opacity: 1, top: 0 }
      ], { duration: 1000, delay: 1000 })


      setTimeout(() => {
         footer.style = ""
         main.style = ""
         arrows.style = "";
      }, 1001)
   }

   ScaleSexyImage = () => {
      let body = document.body;
      let image = document.querySelector("#SexyBackgroundImage");

      if (image.clientWidth === 0) {
         setTimeout(this.ScaleSexyImage, 30);
         return;
      }

      image.style = `left: ${body.clientWidth / 3 - image.clientWidth / 3.5}px`;

   }

   PositionSexyImageInitial = () => {
      let body = document.body;
      let image = document.querySelector("#SexyBackgroundImage");

      image.animate([
         {left: image.style.left},
         {left: (body.clientWidth / 3 - image.clientWidth / 3.5) + "px"}
      ], {duration: 1200, easing:"ease-out"})

      this.ScaleSexyImage();
   }

   PositionSexyImageLeft = () => {
      let image = document.querySelector("#SexyBackgroundImage");

      image.animate([
         {left: image.style.left},
         {left: -image.clientWidth / 1.88 + "px"}
      ], {duration: 1200, easing:"ease-out"})

      image.style = `left: ${-image.clientWidth / 1.88}px`;
   }

   componentDidMount = () => {
      this.animateMount();
      document.querySelector("#aboutWrapper").style = "position:relative;top:-100vh";

      this.ScaleSexyImage();
      window.addEventListener("resize", this.WindowResizeHandler)

      this.centerElement(document.querySelector("#currentTextElement"));
   }

   componentWillUnmount = () => {
      window.removeEventListener("resize", this.WindowResizeHandler)
   }

   WindowResizeHandler = () => {

      if(document.body.clientWidth <= 0){
         setTimeout(this.WindowResizeHandler,5);
         return;
      }

      let currentElement = document.querySelector("#currentTextElement")

      if(this.state.currentTextElement === 0){
         this.ScaleSexyImage()
         console.log(document.body.getBoundingClientRect())
         currentElement.style.top = `${(document.body.clientHeight / 7)*3}px`
      }
      else {
         this.PositionSexyImageLeft();
      }
      this.centerElement(currentElement);
      

   }

}

export default Branding;