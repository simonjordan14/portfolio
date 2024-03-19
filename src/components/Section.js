import coding from '../imgs/coding.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAngular, faSass} from '@fortawesome/free-brands-svg-icons';

const Section = () => {
    return ( 
        <section className="section__about">
                            {/* <h3 className='section__about--title'>Get to know me</h3> */}
            <div className="row">
                <div className="left">
                    <div className="about__image">
                        <img src={coding} alt="coding" className='codingImg'
                            style={{
                                borderRadius: 25,
                                height: 500,
                                width: 500,
                                }}
                        />
                    </div>
                </div>
                <div className="right">
                    <h4>A self Made developer</h4>
                    <p>For the past 8 years I've been doing web development in my own time and practising developing websites.</p>
                    <p>Creating E-Commerce, Full CRUD(create, read, update, delete) web applications, portfolios and start up company websites using modern web technologies such as ReactJs and AngularJS. Styling done also using a modern approach with scss.</p>
                    <div className="boxes-container">
                        <div className="box">
                        <span><FontAwesomeIcon icon={faReact} spin className='reactIcon'/></span>
                        </div>
                        <div className="box">
                        <FontAwesomeIcon icon={faAngular} flip className='angularIcon'/>
                        </div>
                        <div className="box">
                        <FontAwesomeIcon icon={faSass} beatFade className='sassIcon'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Section;