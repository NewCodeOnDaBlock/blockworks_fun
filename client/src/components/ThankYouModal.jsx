import React from 'react';
import TyModalBody from './TyModalBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const ThankYouModal = ({isModalOpen, setIsModalOpen}) => {

  const closeModal = () => {
    if(isModalOpen) {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <div className={`thankyou-modal ${isModalOpen ? 'active-modal' : ''}`}>
      <FontAwesomeIcon icon={faX} className='close-x' onClick={closeModal}/>
      <TyModalBody />
    </div>
  )
}

export default ThankYouModal
