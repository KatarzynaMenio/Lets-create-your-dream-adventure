import Carousel from 'react-bootstrap/Carousel';
import monumentValley from '../assets/Carousel/monument_valley.jpg'
import antylopeCanyon from '../assets/Carousel/antylope.jpg'
import miami from '../assets/Carousel/miami.jpg'
import grandCanyon from '../assets/Carousel/grand_canyon.jpg'
import nyc from '../assets/Carousel/nyc.png'
import horseshoe_bend from '../assets/Carousel/horseshoe_bend.png'
import Arrow from "./Arrow.jsx";

export default function LandingPage () {
    return (
        <div className="landing-page-container">
            <Carousel className="carousel-properties">
                <Carousel.Item>
                    <img src={monumentValley} alt="monument_valley" className="img-properties"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={antylopeCanyon} alt="antylope_canyon" className="img-properties"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={miami} alt="miami" className="img-properties"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={grandCanyon} alt="grand_canyon" className="img-properties"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={nyc} alt="nyc" className="img-properties"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={horseshoe_bend} alt="horseshoe_bend" className="img-properties" />
                </Carousel.Item>
            </Carousel>
            <Arrow />
        </div>
    );
}