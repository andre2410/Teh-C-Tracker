import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TehCard from './components/TehCard';
import Footer from './components/Footer';

import './styles/layout.css';
import './styles/theme.css';
import config from './config/config'

const App = () => {
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
    <div className='container'>
      <header>
        <Header />
      </header>
      <div className="content">
        <aside className='aside' >
          <a id="a.button" className="button" href="/home">Home</a>
        </aside>
        <main>
          {data ? (
            <div>
              {data.map((item, index) => (
                <TehCard key={index} item={item} />
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
