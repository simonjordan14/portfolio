import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSitemap, faGlobe, faUserTie} from '@fortawesome/free-solid-svg-icons';

import valletta from '../imgs/valletta.jpg';


const Services = () => {
    return ( 
        <section className="section__services">
            <div className="row" id = "services__row" style={{ backgroundImage: `linear-gradient(to bottom, rgba(90, 90, 90, 0.8), rgba(45, 45, 45, 0.8)), url(${valletta})` }}>
                {/* <h2 className="heading--secondary services--heading">What I offer?</h2> */}
                <div className="services">
                    <div className="service__box">
                        <div className="service__box--icon">
                            <FontAwesomeIcon icon={faSitemap} />
                        </div>
                        <p className="service__box--text">
                            Clear organized code, using an object oriented approach, including comments for any future continuety.
                        </p>
                    </div>
                    <div className="service__box">
                        <div className="service__box--icon">
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <p className="service__box--text">
                            Jack of all Trades - Knowledge and experience on various programming languages, and always up to date with new releases and creative ideas.
                        </p>
                    </div>
                    <div className="service__box">
                        <div className="service__box--icon">
                        <FontAwesomeIcon icon={faUserTie} />
                        </div>
                        <p className="service__box--text">
                            Clear communication, delivering within deadlines and having a proffessional attitude to meet the requirements.
                        </p>     
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default Services;