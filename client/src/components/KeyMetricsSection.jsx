import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsLetter from '../components/NewsLetter.jsx'



const KeyMetricsSection = ({
    keyMetrics,
    isLoading,
    setIsLoading,
    isModalOpen,
    setIsModalOpen
  }) => {
  const [keyMetricState, setKeyMetricState] = useState();
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    axios.request(keyMetrics)
    .then(response => {
        setKeyMetricState(response.data.data.coins);
        setIsLoading(!isLoading);
      })
    },[])

    return (
    <div className="key-metrics-section">
      <div className="key-metric-container">
        {
          keyMetricState && !isLoading ? keyMetricState.map((keyMetric) => (
            <div>
              <div className='metric-block'>
                <p style={{fontWeight: '500'}}>{keyMetric.name} Market Cap</p>
                <p style={{color: '#5834cc', fontWeight: '500'}}>{USDollar.format(keyMetric.marketCap.slice(0, 3))} B</p>
              </div>
            </div>
        ))
        :
        ''
      }
            <div className='metric-block'>
              <p style={{fontWeight: '500'}}>Ethereum Gas Price</p>
              <p style={{color: '#5834cc', fontWeight: '500'}}>13 gwei</p>
            </div>
            <div className='metric-block'>
              <p style={{fontWeight: '500'}}>Fear and Greed Index</p>
              <p style={{color: '#5834cc', fontWeight: '500'}}>27 (Fear)</p>
            </div>
            <div className='metric-block'>
              <p style={{fontWeight: '500'}}>Federal Reserve Balance Sheet</p>
              <p style={{color: '#5834cc', fontWeight: '500'}}>$8.58 T</p>
            </div>
      </div>
      <div>
        <NewsLetter isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
    )
}
export default KeyMetricsSection;