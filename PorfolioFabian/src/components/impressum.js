import React, { Component } from 'react'
import full_logo from "./img/logo_full.svg"
import "./css/footerSubPage.css";
import "./css/SubPage.css";

class Impressum extends Component {
   render() {
      return (
         <div id="impressumWrapper">
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
                     <p>Fabian Schwarzinger</p>
                     <p>Grafiker</p>
                     <p>Österreich, 3920 Groß Gerungs Wiesensfeld 20</p>
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
      );
   }

   animateMount = () => {
      let wrapper = document.querySelectorAll("#impressumWrapper #projectDetailWrapper > *:not(header)")
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

export default Impressum;