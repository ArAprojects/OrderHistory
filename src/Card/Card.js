import React from 'react';
import './Card.css';

const Card = ( {purchaseData} ) => {
    const displayPurchases = purchaseData.map(card => {
      const { name, img, description, price  } = card;


      return (
          <div>
          {name && <p>Item: {name}</p>}
          <img className= "item-image" alt="" src={img}></img>
          {description && <p>description: {description}</p>}
          {price && <p>price: {pri}}
          </div>
      )
    });

    return (
    <div className="cardContainer">
      {displayPurchases}
    </div>
  );
}

export default Card;
