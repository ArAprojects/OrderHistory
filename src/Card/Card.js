import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ( {purchaseData, deleteItem} ) => {
    const displayPurchases = purchaseData.map(card => {
      const { name, img, description, price, id  } = card;


      return (
          <div className="card" key={card.id}>
            <img className= "item-image" alt="item" src={img}></img>
            <div className= "name-image-container">
            {name && <h2>Item: {name}</h2>}
            {description && <p>Description: {description}</p>}
            </div>
            <div className="button-price-container">
              {price && <h2>Price: ${price}</h2>}
              <button onClick={() => deleteItem(card.id)} className="delete-button">Remove</button>
            </div>
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

Card.propTypes = {
  purchaseData: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
};
