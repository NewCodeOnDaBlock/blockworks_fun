import React from 'react'
import logo from '../assets/blockworks_logo.png'

const TyModalBody = () => {

  
  return (
    <div className='modal-body'>
      <p style={{color: 'black'}}>
        THANKS FOR SUBSCRIBING TO:
        <img src={logo} alt='logo' style={{marginTop: '20px'}} />
      </p>
    </div>
  )
}

export default TyModalBody
