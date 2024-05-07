import React from 'react';
import '../styles/cards.css';

const TehCard = ({ item }) => {
  return (
    <section className="card">
      <div className="card-image">
          <img src={`/images/${item.image}`} alt={''} />
      </div>
      <div className="card-content">
        <div>
          <strong>{item.name}</strong>
        </div>
        <div>{item.description}</div>
        <div>
          <strong>Type:</strong> {item.type}
        </div>
        <div>
          <strong>Price:</strong> {item.cost}
        </div>
        <div>
          <strong>Review Date:</strong> {item.date}
        </div>
        <div>
          <strong>Rating:</strong> {item.rating}
        </div>
        <div>
          <strong>Address:</strong> {item.address}
        </div>
      </div>
    </section>
  );
};

export default TehCard;
