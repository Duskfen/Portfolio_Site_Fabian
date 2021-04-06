import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
import "./css/footerSubPage.css";
import "./css/SubPage.css";
import "./css/contact.css";

import Index from "./index"

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         returnToMainPage: false,
      }
   }

   render() {
      return (
         <React.Fragment>

            <div id="contactWrapper"  className="subWrapper">
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
                        <p id="contacttel"><a href="tel:+436502322462">+43 650&#8202;/&#8202;23 22 462</a></p>
                        <p id="contactmail"><a href="mailto:mail@fabianschwarzinger.work?subject=Erzähl%20mir%20was">mail@fabianschwarzinger.work</a></p>
                        <div id="contactText">
                           <p>Bindungen einzugehen kann schwierig sein, ich weiß.</p>
                           <p>Aber ich beiße nicht, versprochen.</p>
                           <p>Machen wir’s doch so: Sie schreiben »Erzähl mir was« in den</p>
                           <p>Betreff und ich schreibe Ihnen eine kleine Anekdote aus</p>
                           <p>meinem Leben zurück, dann ist das Eis schon mal gebrochen,</p>
                           <p>einverstanden?</p>
                        </div>
                     </div>
                  </section>

                  <footer className="FooterSubPage">
                     <div>
                        <div id="DetailsFooterBase">
                           <div id="DetailsFooterBaseTitle">
                              <p>KONTAKT</p>
                           </div>
                           <div className="detailsline"></div>
                        </div>
                     </div>
                  </footer>
               </div>
            </div>
            {this.state.returnToMainPage? <Index calledFromSubPage={true} currentProjectNumber={this.props.currentProjectNumber | 0} lastProjectNumber={this.props.lastProjectNumber | -1}></Index>:null}
         </React.Fragment>
      );
   }

   returnToMainPage = () => {
      this.setState({returnToMainPage:true});
      this.animateUnMount();
      setTimeout(() => document.querySelector("#contactWrapper").remove(),1000);
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

   animateMountFromAbout = () => {
      let wrapper = document.querySelector("#contactWrapper")

      wrapper.style="position:relative; bottom:100vh"
      let animation = wrapper.animate([
         { clipPath: "inset(0% 0% 100% 0%)"},
         { clipPath: "inset(0%)"}

      ], {duration: 1000, easing: "ease-in-out" })

      animation.onfinish = () =>  {
         wrapper.style = "";
         document.querySelector("#aboutWrapper").remove()
      };
   }

   componentDidMount() {
      if(this.props.calledFromAbout){
         this.animateMountFromAbout();
      }
      else this.animateMount();
   }
}

export default Contact;