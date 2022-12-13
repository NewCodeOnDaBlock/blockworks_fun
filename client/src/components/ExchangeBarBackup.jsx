import React from 'react';

const ExchangeBarBackup = ({coinData, isLoading}) => {

  return (
    <div className='exchange-bar'>
      <div id="priceticker-hugger">
          { coinData ? coinData.map(coin => {    
            return (
              <div id="price-ticker-body">
                  <span id="price-ticker-title">{coin.symbol ? coin.symbol.toUpperCase() : ''}</span> 
                  {isLoading
                    ? 
                    <span className="loading-circle" style={{marginLeft: '5px'}}></span>
                    :
                    <>
                      <p id="ticker" className="price-detail">${coin.current_price}</p>
                        { coin.market_cap_change_percentage_24h > 0.0 ?
                          <p className="price-detail" style={{color: '#014801'}}>
                            <b>
                              {
                                coin.market_cap_change_percentage_24h 
                                ? 
                                coin.market_cap_change_percentage_24h.toString().slice(0, 4) : '0'
                              }%
                            </b>
                          </p>  
                          :
                          <p className="price-detail" style={{color: '#a00303'}}>
                            <b>
                              {
                                coin.market_cap_change_percentage_24h 
                                ?
                                coin.market_cap_change_percentage_24h.toString().slice(0, 4) : '0'
                              }%
                            </b>
                          </p>  
                        }
                    </>
                    }        
              </div>
          )})
          : null
          }
        </div>
    </div>
  )
}

export default ExchangeBarBackup
