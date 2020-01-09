import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {

   render() {
      return (
         <header>
            <nav className="navbar navbar-expand-md pt-1 pb-1">
               <div className="container">
                  <a href="#">
                     <img src="TNLogo.png" className="card-img-top w-25" alt="TN Design and Construction Logo" />
                  </a>
               </div>
               {/* Toggler/collapsibe Button */}
               {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
               </button> */}

               <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                  <a href="#what-we-do" className="btn text-nowrap text-muted pr-1" alt="What We Do" title="What We Do">
                     What We Do
                     </a>
                  <a href="#about" className="btn text-muted pr-1" alt="About" title="About">
                     About
                     </a>
                  <a href="#contact" className="btn text-muted pr-1" alt="Contact" title="Contact">
                     Contact
                     </a>
                  <a 
                     href="https://www.instagram.com/tndesignandconstruction/"
                     target="_blank"
                     className="btn text-muted"
                     alt="Instagram" 
                     title="Instagram"
                  >
                     <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
                  </a>
                  {/* <a href="#email" alt="email" title="Email" role="button">
                           <i className="fas fa-envelope-square fa-3x pr-2 text-white"></i>
                        </a> */}
               </div>
            </nav>
         </header>
      )
   }
}

export default Navbar;
