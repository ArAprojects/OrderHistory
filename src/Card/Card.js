import React from 'react';
import './Card.css';

const Card = ( {purchases} ) => {

  const cardPurchases = purchases.map(idea => {
    return (
      <Card
        title={purchases.name}
        description={purchases.img}
        price ={purchases.price}
        key={purchases.id}
      />
    )
  })

  return (
    <div className='card-container'>
      {cardPurchases}
    </div>
  )
}

export default Card;
