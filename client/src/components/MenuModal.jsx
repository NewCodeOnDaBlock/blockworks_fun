import React from 'react'
import MenuModalBody from './MenuModalBody'

const MenuModal = ({isMenuOpen}) => {
  return (
    <div className={`menu-modal ${isMenuOpen ? 'active-menu-modal' : ''}`}>
      <MenuModalBody />
    </div>
  )
}

export default MenuModal
