import React, { useState, useEffect } from 'react';
import config from '../config/config'
import TehCard from './TehCard';

const Reviews = () => {
    const [data, setData] = useState(null);
    // const dataLink = config.teh_C_API_Get;
    const dataLink = config.local_Get;
  
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
            {data ? (
              <div>
                {data.map((item, index) => (
                  <TehCard key={index} item={item} />
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
        </div>
    );
};

export default Reviews;