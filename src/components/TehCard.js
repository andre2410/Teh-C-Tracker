import React from 'react';

const TehCard = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={`public/images/${item.image}`} alt={''} />
      </div>
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
  );
};

export default TehCard;
