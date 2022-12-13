import React, { useState } from 'react';
import ThankYouModal from './ThankYouModal';

const NewsLetter = ({isModalOpen, setIsModalOpen}) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  
  const showThankYouModal = (e) => {
    e.preventDefault();
    if(input === '') {
      setError('Sorry Input Must Be Valid')
    } else {
      setIsModalOpen(!isModalOpen)
      setInput('')
    }
  }



  return (
    <div className='newsletter-container'>
          <form onSubmit={showThankYouModal}>
            <a href='https://blockworks.co/newsletter' style={{textDecoration: 'none'}}>
              <p>Newsletter</p>
            </a>
            <h3 style={{color: 'black', letterSpacing: '1px'}}>Blockworks Daily</h3>
            <p style={{color: '#939FB9'}}>Get the daily newsletter that helps thousands of investors understand the markets.</p>
              <input type="text" placeholder='Email address' onChange={e => setInput(e.target.value)} value={input}/>
              <button className='sub-btn'>SUBSCRIBE</button>
              <>
                <span style={{color: 'red', fontSize: '8px'}}>{error}</span>
              </>
          </form>
          <ThankYouModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default NewsLetter
