import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLaptopCode, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../sass/main.css'


const Header = () => {
    return ( 
        <div className="header">
            <div className="header__right">
            <div className="header__text">
                <h1>Hi, my name is<br /> Simon Jordan</h1>
                <h2>& I'm a web Developer</h2>
                <span><FontAwesomeIcon icon={faCoffee}  className='icon'/></span>
                <span><FontAwesomeIcon icon={faLaptopCode} className='icon'/></span>
            </div>

            <div className="header__icon">
                <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </div>
        </div>
            <div className="header__left">
                &nbsp;
            </div>
        </div>

     );
}
 
export default Header;