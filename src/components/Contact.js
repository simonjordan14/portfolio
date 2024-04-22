import React from "react";
import valletta from '../imgs/valletta.jpg'
import sunset from '../imgs/sunset.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faLocationDot} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    return ( 
        <section className="section__contact">
            {/*             <div className="row" id = "services__row" style={{ backgroundImage: `linear-gradient(to bottom, rgba(90, 90, 90, 0.8), rgba(45, 45, 45, 0.8)), url(${valletta})` }}>
 */}
            <div className="row" id = "contact__row">
                <div className="blue">
                    <div className="contact__form__container">
                        <div className="contact__form--left">
                                <h4>Contact Information</h4>
                                <p><FontAwesomeIcon icon={faPhone} /> <span className="card-text">+356 77119511</span> <br /> 
                                <FontAwesomeIcon icon={faEnvelope} /> <span className="card-text">simon_jordan@live.com</span> <br />
                                <FontAwesomeIcon icon={faLocationDot} /> <span className="card-text">Malta</span>
                                </p>
                        </div>

                        <div className="contact__form--right">
                        <form action="#" className="contact__form">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Full Name"/>
                            <label htmlFor="email">Email</label>
                            <input type="email" name = "email" placeholder="email"/>
                            <div>
                            <textarea name="" id="" cols="60" rows="10"></textarea>
                            </div>
                            </form>
                        </div>  
                    </div>
                </div>
                <div className="white"></div>
            </div>
        </section>
     );
}
 
export default Contact;