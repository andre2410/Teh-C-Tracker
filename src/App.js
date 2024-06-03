import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TehCard from './components/TehCard';
import Footer from './components/Footer';
import Home from './components/Home';
import Reviews from './components/Reviews'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './styles/layout.css';
import './styles/theme.css';
import config from './config/config'

//routes
import { HOME_ROUTE, REVIEWS_ROUTE } from './routes';

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
    <Router>
      <div className='container'>
        <header>
          <Header />
        </header>
        <div className="content">
          <aside className='aside' >
            <Link id="home" className="button" to={HOME_ROUTE}>Home</Link>
            <Link id="reviews" className="button" to={REVIEWS_ROUTE}>Reviews</Link>
          </aside>
          <main>
            <Routes>
              <Route exact path={HOME_ROUTE} component={Home}/>
              <Route path={REVIEWS_ROUTE} component={Reviews}/>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
