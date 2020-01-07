import React from 'react';
import './Jumbotron.css';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';

class Jumbotron extends React.Component {

   constructor(props) {
      super(props);
      this.sectionStyle = {
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.jumboImg})`,
         height: "75vh",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
      }
   }

   render() {
      return (
         <div 
            id="jumbotron" 
            className="jumbotron jumbotron-fluid" 
            style={this.sectionStyle}
         >
            <div className="hero-text">
               <h1 className="display-4">
               Designing and Building your Dream Space
               </h1>
            </div>
         </div>
      )
   }
}

export default Jumbotron;
