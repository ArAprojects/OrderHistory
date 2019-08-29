import React from 'react';
import './Card.css';

const Card = ( {purchaseData, deleteItem} ) => {
    const displayPurchases = purchaseData.map(card => {
      const { name, img, description, price, id  } = card;


      return (
          <div className="card" key={card.id}>
          {name && <h2>Item: {name}</h2>}
          <img className= "item-image" alt="item" src={img}></img>
          {description && <p>Description: {description}</p>}
          {price && <p>Price: ${price}</p>}
          <button onClick={() => deleteItem(card.id)} className="delete-button">Delete Item</button>
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
