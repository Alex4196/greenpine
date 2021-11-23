/* 
import React from 'react'
import "./Contactanos.css"
const Footer = () => {
  const handleClick = () => {
    animateScroll.scrollToTop({ duration: 300 });
  }; 

  return (
    <footer>
    <div className="Container">
    <div  className="footer-Info"> 
            <h1> ¡Seguinos en Instagram! </h1>
            
            </div>
            <div className="footer-Contact "> 
               <h3> Contact me </h3>
            </div> 
              <div  className="footer-Sns" >
                 <div className="design-By" >
                 If you want to be in contact with me, these are my social networks!
                 </div> 
                  <h1></h1>
                   <div className="sns-Links" >
                     
                       <a href="https://linkedin.com/in/alexgoumaz/" target="_blank" >
                            <i  className="fab fa-linkedin linkedin" > </i>
                       </a>
                       <a href="https://github.com/Alex4196" target="_blank" >
                            <i  className="fab fa-github github"  > </i>
                       </a>
                       <a href="https://wa.me/541150046437" target="_blank" >
                            <i  className="fab fa-whatsapp whatsapp"  > </i>
                       </a>
                      
                   </div>
                 
              </div>
    </div>

       
    </footer>
  );
};

export default Footer;
 */
import React from 'react'
import "./Contactanos.css"
import { IoLogoInstagram } from "react-icons/io5";
const Footer = () => {
 /*  const handleClick = () => {
    animateScroll.scrollToTop({ duration: 300 });
  };  */

  return (
    <footer>
    <div className="Container">
    <div  className="footer-Info"> 
           
           
            <a className="sns-Links" href="https://www.instagram.com/the.green.pine/" target="_blank" >
                            <i  className="fab fa-instagram instagram"  > </i>
                       </a>
                       
                       <a className="sns-Links" href="https://wa.me/541150087146" target="_blank" >
                            <i  className="fab fa-whatsapp whatsapp"  > </i>
                       </a>
                       
                     
            
            </div>
            
            <p className="copy" > Copyright ©️ 2021 The Green Pine</p>
    </div>

   
    </footer>
  );
};

export default Footer;