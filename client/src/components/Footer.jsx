import React, { useState } from 'react';
import ThankYouModal from './ThankYouModal';
import logo from '../assets/blocks png.png'

const Footer = ({isModalOpen, setIsModalOpen}) => {
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
    <div className='footer-container'>
      <div className='footer-section-one'>
        <div className='footer-section-one-left'>
          <form onSubmit={showThankYouModal}>
              <a href='https://blockworks.co/newsletter' style={{textDecoration: 'none'}}>
                <p style={{color: 'white'}}>Newsletter</p>
              </a>
              <h3 style={{color: 'white', letterSpacing: '1px'}}>Blockworks Daily Newsletter</h3>
              <p style={{color: 'white'}}>Get the daily newsletter that helps thousands of investors understand the markets.</p>
                <input
                  type="text"
                  placeholder='Email address'
                  onChange={e => setInput(e.target.value)}
                  value={input}
                  style={{width: '70%'}}
                />
                <button className='sub-btn'>SUBSCRIBE</button>
                <>
                  <span style={{color: 'white', fontSize: '8px', marginLeft: '5px'}}>{error}</span>
                </>
            </form>
            <ThankYouModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
        <div className='footer-section-one-right'>
            <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
