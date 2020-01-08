import React from 'react';
import './CardDeck.css';

class CardDeck extends React.Component {

   render() {
      return (
         <div className="pt-4">
            <div className="card-deck">
               <div className="card border-0" id="card1">
                  <img src="IMG_6885.JPG" className="card-img-top" alt="Custom staircase" />
                  <div className="card-body">
                     <h5 className="card-title">Indoor</h5>
                     <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="IMG_2782.JPG" className="card-img-top" alt="Custom landscaping with putting green" />
                  <div className="card-body">
                     <h5 className="card-title">Outdoor</h5>
                     <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
               <div className="card border-0">
                  <img src="IMG_6743.JPG" className="card-img-top" alt="Outdoor living room amongst the trees" />
                  <div className="card-body">
                     <h5 className="card-title">Blended</h5>
                     <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p className="card-text"><small className="text-muted">View More</small></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default CardDeck;
