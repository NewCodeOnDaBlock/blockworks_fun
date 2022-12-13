import React, { useState, useEffect } from 'react';
import Home from './components/Home'
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/app.scss'
import coins from './coindata.js'



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [coinData, setCoinData] = useState([{}])
  const [isLoading, setIsLoading] = useState(true);
  const key = process.env.REACT_APP_API_KEY;
  const latestNews = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/auto-complete',
    params: {q: 'latest', region: 'US'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  const featuredNews = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/auto-complete',
    params: {q: 'coinbase', region: 'US'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  const keyMetrics = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '3',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.get(coins)
        .then(response => {
            setCoinData(response.data);
        })
    }, [])

    const closeModalFromBg = () => {
      if(isModalOpen) {
        setIsModalOpen(!isModalOpen)
      } else if (isMenuOpen) {
        setIsMenuOpen(!isMenuOpen)
      }
    }
    

  return (
    <BrowserRouter>
    {
      isModalOpen ?
      <div 
          className={`modal-background ${isModalOpen ? 'active-modal-background' : '' }`} 
          onClick={closeModalFromBg}
        ></div>
        :''
    }
    {
      isMenuOpen ?
      <div 
          className={`menu-background ${isMenuOpen ? 'active-menu-background' : '' }`} 
          onClick={closeModalFromBg}
        ></div>
        :''
    }
        <Link to="/"></Link>
        <Switch>
        <Route path="/">
          <Home 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            coinData={coinData}
            latestNews={latestNews}
            featuredNews={featuredNews}
            keyMetrics={keyMetrics}
          />
          
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
