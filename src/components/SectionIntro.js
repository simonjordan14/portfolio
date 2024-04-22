import coding from '../imgs/coding.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAngular, faSass} from '@fortawesome/free-brands-svg-icons';

const SectionIntro = () => {
    return ( 
        <section className="section__intro">
            <div className="row" id = "row__intro">
                <div className="left">
                    <div className="section__intro__image">
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
                    <h2>A self Made developer</h2>
                    <p>Creating E-Commerce, Full CRUD(create, read, update, delete) web applications, portfolios and start up company websites using modern web technologies.</p>
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
 
export default SectionIntro;