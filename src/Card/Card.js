import React from 'react';
import './Card.css';

const Card = ( {purchaseData} ) => {
    const displayPurchases = purchaseData.map(card => {
      const { name, img, description, price  } = card;


      return (
          <div className="card">
          {name && <p>Item: {name}</p>}
          <img className= "item-image" alt="item" src={img}></img>
          {description && <p>Description: {description}</p>}
          {price && <p>Price: ${price}</p>}
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
