import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FeaturedSection = ({featuredNews, isLoading, setIsLoading}) => {
  
  const [featured, setFeatured] = useState();

  useEffect(() => {
    axios.request(featuredNews)
    .then(response => {
        setFeatured(response.data.news);
        setIsLoading(!isLoading);
      })
    },[])

    return (
    <div className="featured-section">
      {
        isLoading ? (
          <> {
            isLoading && !featured?  (
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
      <div className="featured-container">
        {
          featured && !isLoading ? featured.map((featured) => (
            <div className='news-block'>
              <a href={featured.link} className='news-title'>
                <h3>{featured.title}</h3>
              </a>
                <p className='publisher'>{featured.publisher}</p>
              <img src={featured.thumbnail.resolutions[0].url} alt='img' className='featured-img'/>
                <div className="bottomBorder" style={{marginTop: '20px'}}></div>
            </div>
        ))
        :
        ''
      }
      </div>
    </div>
    
    )
}
export default FeaturedSection;