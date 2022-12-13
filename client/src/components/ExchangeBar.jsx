import React from 'react';


const ExchangeBar = ({isLoading ,setIsLoading}) => {

  let ws = new WebSocket('wss://stream.binance.com:443/ws/btcusdt@trade');
  let lastbtcPrice = null;
  let ethws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
  let lastethPrice = null;
  let solws = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
  let lastsolPrice = null;
  let shibws = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
  let lastshibPrice = null;
  let adaws = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
  let lastadaPrice = null;
  let xrpws = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
  let lastxrpPrice = null;
  let dogews = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
  let lastdogePrice = null;
  let maticws = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
  let lastmaticPrice = null;
  let dotws = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
  let lastdotPrice = null;
  let ltcws = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
  let lastltcPrice = null;
  let linkws = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade');
  let lastlinkPrice = null;
  let etcws = new WebSocket('wss://stream.binance.com:9443/ws/etcusdt@trade');
  let lastetcPrice = null;
  let algows = new WebSocket('wss://stream.binance.com:9443/ws/algousdt@trade');
  let lastalgoPrice = null;
  let avaxws = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
  let lastavaxPrice = null;

  ws.onmessage = (e) => {  
          if(e.data) {
            setIsLoading(!isLoading)
            let coinObject = JSON.parse(e.data);
            let btcprice = parseFloat(coinObject.p).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            document.querySelector("#btc-ticker").innerText = btcprice;
            document.querySelector("#btc-ticker").style.color = !lastbtcPrice || lastbtcPrice === btcprice ? 'black' : btcprice > lastbtcPrice ? 'green' : 'red';
            lastbtcPrice = btcprice;
          } else {
            setIsLoading(true)
          }
  }
  
  ethws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
      let coinObjecteth = JSON.parse(e.data);
      let ethprice = parseFloat(coinObjecteth.p).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      document.querySelector("#eth-ticker").innerText = ethprice;
      document.querySelector("#eth-ticker").style.color = !lastethPrice || lastethPrice === ethprice ? 'black' : ethprice > lastethPrice ? 'green' : 'red';
      lastethPrice = ethprice;
    } else {
      setIsLoading(true)
    }
  }
  
  solws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectsol = JSON.parse(e.data);
    let solprice = parseFloat(coinObjectsol.p).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    document.querySelector("#sol-ticker").innerText = solprice;
    document.querySelector("#sol-ticker").style.color = !lastsolPrice || lastsolPrice === solprice ? 'black' : solprice > lastsolPrice ? 'green' : 'red';
    lastsolPrice = solprice;
    } else {
      setIsLoading(true)
    }
  }
  
  shibws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectshib = JSON.parse(e.data);
    let shibprice = parseFloat(coinObjectshib.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 8 });
    document.querySelector("#shib-ticker").innerText = shibprice;
    document.querySelector("#shib-ticker").style.color = !lastshibPrice || lastshibPrice === shibprice ? 'black' : shibprice > lastshibPrice ? 'green' : 'red';
    lastshibPrice = shibprice;
    } else {
      setIsLoading(true)
    }
  }
  
  adaws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectada = JSON.parse(e.data);
    let adaprice = parseFloat(coinObjectada.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#ada-ticker").innerText = adaprice;
    document.querySelector("#ada-ticker").style.color = !lastadaPrice || lastadaPrice === adaprice ? 'black' : adaprice > lastadaPrice ? 'green' : 'red';
    lastadaPrice = adaprice;
    } else {
      setIsLoading(true)
    }
  }
  
  xrpws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectxrp = JSON.parse(e.data);
    let xrpprice = parseFloat(coinObjectxrp.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#xrp-ticker").innerText = xrpprice;
    document.querySelector("#xrp-ticker").style.color = !lastxrpPrice || lastxrpPrice === xrpprice ? 'black' : xrpprice > lastxrpPrice ? 'green' : 'red';
    lastxrpPrice = xrpprice;
    } else {
      setIsLoading(true)
    }
  }
  
  dogews.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectdoge = JSON.parse(e.data);
    let dogeprice = parseFloat(coinObjectdoge.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#doge-ticker").innerText = dogeprice;
    document.querySelector("#doge-ticker").style.color = !lastdogePrice || lastdogePrice === dogeprice ? 'black' : dogeprice > lastxrpPrice ? 'green' : 'red';
    lastxrpPrice = dogeprice;
    } else {
      setIsLoading(true)
    }
    
  }
  
  maticws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectMatic = JSON.parse(e.data);
    let maticprice = parseFloat(coinObjectMatic.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#matic-ticker").innerText = maticprice;
    document.querySelector("#matic-ticker").style.color = !lastmaticPrice || lastmaticPrice === maticprice ? 'black' : maticprice > lastmaticPrice ? 'green' : 'red';
    lastmaticPrice = maticprice;
    } else {
      setIsLoading(true)
    }
  }
  
  dotws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectDot = JSON.parse(e.data);
    let dotprice = parseFloat(coinObjectDot.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#dot-ticker").innerText = dotprice;
    document.querySelector("#dot-ticker").style.color = !lastdotPrice || lastdotPrice === dotprice ? 'black' : dotprice > lastdotPrice ? 'green' : 'red';
    lastdotPrice = dotprice;
    } else {
      setIsLoading(true)
    }
  }
  
  ltcws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectLtc = JSON.parse(e.data);
    let ltcprice = parseFloat(coinObjectLtc.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#ltc-ticker").innerText = ltcprice;
    document.querySelector("#ltc-ticker").style.color = !lastltcPrice || lastltcPrice === ltcprice ? 'black' : ltcprice > lastltcPrice ? 'green' : 'red';
    lastltcPrice = ltcprice;
    } else {
      setIsLoading(true)
    }
  }
  
  linkws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectLink = JSON.parse(e.data);
    let linkprice = parseFloat(coinObjectLink.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#link-ticker").innerText = linkprice;
    document.querySelector("#link-ticker").style.color = !lastlinkPrice || lastltcPrice === linkprice ? 'black' : linkprice > lastlinkPrice ? 'green' : 'red';
    lastlinkPrice = linkprice;
    } else {
      setIsLoading(true)
    }
  }
  
  etcws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectEtc = JSON.parse(e.data);
    let etcprice = parseFloat(coinObjectEtc.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#etc-ticker").innerText = etcprice;
    document.querySelector("#etc-ticker").style.color = !lastetcPrice || lastetcPrice === etcprice ? 'black' : etcprice > lastetcPrice ? 'green' : 'red';
    lastetcPrice = etcprice;
    } else {
      setIsLoading(true)
    }
  }
  
  algows.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectAlgo = JSON.parse(e.data);
    let algoprice = parseFloat(coinObjectAlgo.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#algo-ticker").innerText = algoprice;
    document.querySelector("#algo-ticker").style.color = !lastalgoPrice || lastetcPrice === algoprice ? 'black' : algoprice > lastalgoPrice ? 'green' : 'red';
    lastalgoPrice = algoprice;
    } else {
      setIsLoading(true)
    }
  }
  
  avaxws.onmessage = (e) => {
    if(e.data) {
      setIsLoading(!isLoading)
    let coinObjectAvax = JSON.parse(e.data);
    let avaxprice = parseFloat(coinObjectAvax.p).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 });
    document.querySelector("#avax-ticker").innerText = avaxprice;
    document.querySelector("#avax-ticker").style.color = !lastavaxPrice || lastavaxPrice === avaxprice ? 'black' : avaxprice > lastavaxPrice ? 'green' : 'red';
    lastavaxPrice = avaxprice;
    } else {
      setIsLoading(true)
    }
}

// useEffect(() => {
//   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=decentraland&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//       .then(response => {
//         setCoinData(response.data)
//         console.log(coinData);
//       })
// }, [])


return (
    <div className="exchange-bar">
      <div id="priceticker-hugger">
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">BTC/USDT</span> 
                        {isLoading 
                          ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="btc-ticker" className="price-detail"> </p>  
                          }        
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">ETH/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="eth-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">SOL/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="sol-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">SHIB/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="shib-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">ADA/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="ada-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">XRP/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="xrp-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">DOGE/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="doge-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">MATIC/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="matic-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">DOT/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="dot-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">LTC/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="ltc-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">LINK/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="link-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">ALGO/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="algo-ticker" className="price-detail"> </p>
                        }
                    </div>
                    <div id="price-ticker-body">
                        <span id="price-ticker-title">AVAX/USDT</span>
                        {isLoading ? 
                          <span className="loading-circle"></span>
                          :
                          <p id="avax-ticker" className="price-detail"> </p>
                        }
                    </div>
                </div>
    </div>   
    )
}

export default ExchangeBar;