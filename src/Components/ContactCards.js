import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactCards extends React.Component {

   render() {
      return (
         <div className="card-group">
            <div className="card">
               <div className="card-body" id="contactCard">
                  <h4>TN Design & Construction</h4>
                  <p className="lead"><FontAwesomeIcon icon="map-marker-alt" /> 11550 Independent Hill Road<br/>Arrington TN 37014</p>
                  {/* <img src="letterT.png" width="100px" className="m-4" /> */}
                  <p className="lead"><FontAwesomeIcon icon="phone" /> 615-487-6869</p>
                  <p className="lead"><FontAwesomeIcon icon="envelope" />  mwnealtenn@gmail.com</p>
               </div>
            </div>
         </div>
      )
   }
}

export default ContactCards;
