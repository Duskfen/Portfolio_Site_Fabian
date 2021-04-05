import React, { Component } from 'react'

import Index from "./index"
import Contact from './contact'


import "./css/footerSubPage.css";
import "./css/SubPage.css";
import "./css/ueber_mich.css"

import full_logo from "./img/logo_full.svg"
const right_arrow = require("./img/arrow_right.svg")
const sexyBackgroundImage = require("./img/SexyBackgroundImage.jpg")
const Lebenslauf = require("./download/Schwarzinger_Lebenslauf.pdf")

class MainElements {
   constructor() {
      this.mainElements = [
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
                  Dann downloade doch <a className="linkInTextElement" href={Lebenslauf} download="Schwarzinger-Lebenslauf.pdf">hier </a>
                  meinen Lebenslauf oder schreibe mir gleich
                  eine <a href="mailto:mail@fabianschwarzinger.work" className="linkInTextElement">E-Mail </a>!
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
   getRealIndex(index){
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

      this.perCentStep = 100 / (this.state.textElements.mainElements.length - 1);
   }

   updateProgressBar = (index) => {
      document.querySelector("#aboutWrapper #DetailsProgressLine").style = `width: ${this.perCentStep * (index)}%`
   }

   animateNextElement = () => {
      let lastElement = document.querySelector("#aboutWrapper #lastTextElement")
      let currentElement = document.querySelector("#aboutWrapper #currentTextElement")

      if(this.state.currentTextElement > this.state.lastTextElement){
         lastElement.animate([
            { opacity: 1, left: lastElement.style.left, zIndex: 1 },
            { opacity: 0, left: lastElement.getBoundingClientRect().left - 300 + "px", zIndex: 1 }
         ], { duration: 1000, easing: "ease-out" })

         currentElement.animate([
            { opacity: 0, left: lastElement.getBoundingClientRect().left + 200 + "px" },
            { opacity: 1, left: lastElement.style.left }
         ], { duration: 1000, easing: "ease-out" })
      }
      else{
         lastElement.animate([
            { opacity: 1, left: lastElement.style.left, zIndex: 1 },
            { opacity: 0, left: lastElement.getBoundingClientRect().left + 200 + "px", zIndex: 1 }
         ], { duration: 1000, easing: "ease-out" })

         currentElement.animate([
            { opacity: 0, left: lastElement.getBoundingClientRect().left - 300 + "px" },
            { opacity: 1, left: lastElement.style.left }
         ], { duration: 1000, easing: "ease-out" })
      }
   }

   nextElement = (add = 1) => {
      //only if there are no running animations..
      if (document.querySelector("#aboutWrapper #lastTextElement").getAnimations().length <= 0) {
         this.setState({
            currentTextElement: this.state.currentTextElement + add,
            lastTextElement: this.state.currentTextElement
         }, () => {
            this.updateProgressBar(this.state.textElements.getRealIndex(this.state.currentTextElement));
            this.animateNextElement();
         })

      }
   }

   render() {
      return (
         <React.Fragment>
            <div id="aboutWrapper" onWheel={(e) => {
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
                        <a href="#" onClick={() => this.nextElement()} className="right_arrow"><img src={right_arrow}></img></a>
                     </div>
                  </header>

                  <section className="main_aside">
                     <div>
                        <div id="currentTextElement">
                           {this.state.textElements.getElementAt(this.state.currentTextElement)}
                           <p className="ElementLinkToNext"><a onClick={() => this.nextElement()}>nächste &gt;</a></p>
                        </div>
                        <div id="lastTextElement">
                           {this.state.textElements.getElementAt(this.state.lastTextElement)}
                           <p className="ElementLinkToNext"><a onClick={() => this.nextElement()}>nächste &gt;</a></p>
                        </div>
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

   goToKontaktPage = () => {
      this.setState({ goToContact: true })
   }

   returnToMainPage = () => {
      this.setState({ returnToMainPage: true });
   }


   animateMount = () => {
      let main = document.querySelector("#aboutWrapper .main_aside")
      let footer = document.querySelector("#aboutWrapper .FooterSubPage")

      main.style = "position:relative; opacity: 0";
      main.animate([
         { opacity: 0, top: "30px" },
         { opacity: 1, top: 0 }
      ], { duration: 500, delay: 1000 })
      setTimeout(() => main.style = "position:relative", 1001)

      footer.style = "position:relative; opacity: 0";
      footer.animate([
         { opacity: 0, top: "40px" },
         { opacity: 1, top: 0 }
      ], { duration: 1000, delay: 1000 })
      setTimeout(() => footer.style = "position:relative", 1001)
   }

   ScaleSexyImageAndText = () => {
      let body = document.body;
      let image = document.querySelector("#SexyBackgroundImage");
      let text1 = document.querySelector("#aboutWrapper .main_aside #lastTextElement");
      let text2 = document.querySelector("#aboutWrapper .main_aside #currentTextElement");
      let textwrapper = document.querySelector("#aboutWrapper .main_aside")

      if (image.clientWidth === 0) {
         setTimeout(this.ScaleSexyImageAndText, 30);
         return;
      }

      image.style = `left: ${body.clientWidth / 3 - image.clientWidth / 3}px`;

      text1.style = `left: ${((body.clientWidth / 3) * 2) - text1.clientWidth / 2}px;
      top: ${((image.clientHeight / 100) * 35) - textwrapper.getBoundingClientRect().top}px`

      text2.style = `left: ${((body.clientWidth / 3) * 2) - text2.clientWidth / 2}px;
      top: ${((image.clientHeight / 100) * 35) - textwrapper.getBoundingClientRect().top}px`
   }

   componentDidMount = () => {
      this.animateMount();
      document.querySelector("#aboutWrapper").style = "position:relative;top:-100vh";

      this.ScaleSexyImageAndText();
      window.addEventListener("resize", this.ScaleSexyImageAndText)
   }

   componentWillUnmount = () => {
      window.removeEventListener("resize", this.ScaleSexyImageAndText)
   }

}

export default Branding;