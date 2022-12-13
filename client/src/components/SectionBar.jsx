import React from 'react';


const SectionBar = (props) => {


    return (
    <div className="section-bar">
        <div className="latest-news">
            <span className='section-title'><b>LATEST NEWS</b></span>
        </div>
        <div className="featured">
            <span className='section-title'><b>FEATURED</b></span>
        </div>
        <div className="key-metrics">
            <span className='section-title'><b>KEY METRICS</b></span> 
        </div>
    </div>
    
    )
}

export default SectionBar;