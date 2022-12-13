import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestNewsSection = ({latestNews, isLoading, setIsLoading}) => {
  const [cryptoNews, setCryptoNews] = useState();

  useEffect(() => {
    axios.request(latestNews)
    .then(response => {
        setCryptoNews(response.data.news);
        setIsLoading(!isLoading);
      })
    },[])

    return (
    <div className="latest-news-section">
      {
        isLoading ? (
          <> {
            isLoading && !cryptoNews ?  (
              <>
                <span className="loading-circle"></span>
              </>
            )
            : 
            <>
              <p>Loading, Please Wait...</p>
              <span className="loading-circle"></span>
            </>
          }
          </> 
        )
        : ''
      }
      <div className="description-container">
        {
          cryptoNews && !isLoading ? cryptoNews.map((news) => (
            <div className='news-block'>
              <a href={news.link} className='latest-news-link'>
                <h3>{news.title}</h3>
                {/* <img src={news.thumbnail.resolutions[1].url} alt='img' className='news-img'/> */}
              </a>
                <div className="bottomBorder"></div>
            </div>
        ))
        :
        ''
      }
      </div>
    </div>
    
    )
}
export default LatestNewsSection;