import React, { useState, useEffect } from 'react';
import axios from 'axios';

const localLink = 'http://localhost:3100/api/data';

const GetData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(localLink); //local for now
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div>
          <h1>Teh C Tracker</h1>
          <ul>
            {data.map(item => (
              <li key={item._id}>
                <p>{item.name}</p>
                <p>{item.cost}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
                <p>{item.type}</p>
                <p>{item.rating}</p>
                <p>{item.address}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default GetData;