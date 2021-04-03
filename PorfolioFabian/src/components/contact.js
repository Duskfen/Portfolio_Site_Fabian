import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
import "./css/footerSubPage.css";
import "./css/SubPage.css";
import "./css/contact.css";

class Contact extends Component {
   render() {
      return (
         <div id="contactWrapper">
            <div id="projectDetailWrapper">
               <header>
                  <div id="head_items">
                     <a href="/">
                        <img src={full_logo} alt="logo" className="full_logo"></img>
                     </a>
                  </div>
               </header>

               <section className="main_aside">
                  <div>
                     <p><a href="tel:+436502322462">+43 650/23 22 462</a></p>
                     <p><a href="mailto:mail@fabianschwarzinger.work">mail@fabianschwarzinger.work</a></p>
                     <div>
                        <p>Bindungen einzugehen kann schwierig sein, ich weiß.</p>
                        <p>Aber ich beiße nicht, versprochen.</p>
                        <p>Machen wir’s doch so: Sie schreiben mir »Fakt bitte« in den</p>
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
      );
   }

   animateMount = () => {
      let wrapper = document.querySelectorAll("#contactWrapper #projectDetailWrapper > *:not(header)")
      wrapper.forEach((item) => {
         item.style = "position:relative";
         item.animate([
            { opacity: 0, top: "30px" },
            { opacity: 1, top: 0 }
         ], { duration: 1000, delay: 980 })
      })

   }

   componentDidMount() {
      this.animateMount();
   }
}

export default Contact;