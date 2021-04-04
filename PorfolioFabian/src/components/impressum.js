import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
import "./css/footerSubPage.css";
import "./css/SubPage.css";
import "./css/impressum.css"
import Index from "./index"

class Impressum extends Component {

   constructor(props) {
      super(props);
      this.state = {
         returnToMainPage: false
      }
   }

   render() {
      return (
         <React.Fragment>
            <div id="impressumWrapper"  className="subWrapper">
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
                        <p>Fabian Schwarzinger</p>
                        <p>Grafikdesigner</p>
                        <div>
                           <p>3920 Groß Gerungs</p>
                           <p>Wiesensfeld 20</p>
                           <p>Österreich</p>
                        </div>
                     </div>
                  </section>

                  <footer className="FooterSubPage">
                     <div>
                        <div id="DetailsFooterBase">
                           <div id="DetailsFooterBaseTitle">
                              <p>IMPRESSUM</p>
                           </div>
                           <div className="detailsline"></div>
                        </div>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.returnToMainPage? <Index calledFromSubPage={true}></Index>:null}
         </React.Fragment>
      );
   }

   returnToMainPage = () => {
      this.setState({returnToMainPage:true});

      this.animateUnMount();
      
      setTimeout(() => document.querySelector("#impressumWrapper").remove(),1000);
   }

   animateMount = () => {
      let main = document.querySelector(".main_aside")
      let footer = document.querySelector(".FooterSubPage")

      main.style = "position:relative";
      main.animate([
         { opacity: 0, top: "30px" },
         { opacity: 1, top: 0 }
      ], { duration: 500, delay: 980 })

      footer.style = "position:relative";
      footer.animate([
         { opacity: 0, top: "40px" },
         { opacity: 1, top: 0 }
      ], { duration: 1000, delay: 980 })

   }

   animateUnMount = () => {
      let main = document.querySelector(".main_aside")
      let footer = document.querySelector(".FooterSubPage")

      main.style = "position:relative;opacity:0";
      main.animate([
         { opacity: 0, top: "30px" },
         { opacity: 1, top: 0 }
      ], { duration: 400, direction: "reverse" })

      footer.style = "position:relative; opacity:0";
      footer.animate([
         { opacity: 0, top: "40px" },
         { opacity: 1, top: 0 }
      ], { duration: 800, direction: "reverse" })

   }

   componentDidMount() {
      this.animateMount();
   }
}

export default Impressum;