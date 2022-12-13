import React from 'react';
import logo from '../assets/blockworks_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import searchIcon from '../assets/icons8-search.svg';
import MenuModal from '../components/MenuModal.jsx';


const HeaderBar = ({isMenuOpen, setIsMenuOpen}) => {

  const openMenuModal = () => {
    console.log('openMenuModal triggered')
    setIsMenuOpen(!isMenuOpen)
  }

    return (
    <div className="title-bar">
      <div className="left-menu">
        <ul className="menu-items">
          <li className="menu-li" onClick={openMenuModal}>
            <span>NEWS</span>
            {
              !isMenuOpen ? 
              <>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{marginLeft: '5px'}}
                />
                <MenuModal isMenuOpen={isMenuOpen}/>
              </>
                :
              <>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  style={{marginLeft: '5px'}}
                />
                <MenuModal isMenuOpen={isMenuOpen}/>
              </>
              }
          </li>
          <li>
            <span>NEWSLETTER</span>
          </li>
          <li>
            <span>PODCASTS</span>
          </li>
        </ul>
      </div>
      <div className="logo-div">
        <img src={ logo } alt='blockworks_logo'/>
      </div>
      <div className="right-menu">
      <ul className="menu-items">
          <li className="menu-li">
            <span>PRICES</span>
          </li>
          <li>
            <span>RESEARCH</span>
          </li>
          <li>
            <span>EVENTS</span>
          </li>
          <li>
            <span>WEBINAR</span>
          </li>
          <li>
            <img src={ searchIcon } alt="search-icon" className="search-icon"/>
          </li>
        </ul>
      </div>
    </div>
    
    )
}

export default HeaderBar;