import Card from 'react-bootstrap/Card';

import allSkills from './assets/allSkills.js'

import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css';

// https://www.npmjs.com/package/react-owl-carousel

const SkillsOWL = () => {

    return (
        <>
        <div style={{ backgroundColor: 'black'}}>
            <OwlCarousel className="owl-theme" loop={true} margin={10} items={5} dots={false} autoplay={true} 
            autoplayTimeout={3000} autoplaySpeed={7000} autoplayHoverPause={true} 
            responsive={{ 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 5 } }}> 
                {allSkills && allSkills.map((eachSkill, index) => (
                    <div className='item' key={index}>
                        <Card style={{ width: '138px'}} key={index} border="light" bg="blackBackground" text="white" className="text-center">
                            <Card.Img style={{ height: '100px'}} variant="top" src={eachSkill.src} />
                            <Card.Body>
                                <Card.Title>{eachSkill.name}</Card.Title>
                                {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </OwlCarousel>
            </div>
        </>
    );
}

export default SkillsOWL;