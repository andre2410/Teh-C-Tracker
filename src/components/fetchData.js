import React, { useState, useEffect } from 'react';
import './styles.css';

function GetData() {
  const [data, setData] = useState(null);
  const dataLink = 'https://teh-c-tracker-21d564b188f2.herokuapp.com/api/data'; //VERY SAFE INDEED

  useEffect(() => {
    fetch(dataLink)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [dataLink]);

  return (
      <div>
        <h1>Teh C Tracker</h1>
        {data ? (
          <div>
            {data.map((item, index) => (
              <div key={index} className="item-container">
                <div>
                  <strong>{item.name}</strong>
                </div>
                <div>
                  {item.description}
                </div>
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
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

export default GetData;
