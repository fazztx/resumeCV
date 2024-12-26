import Card from 'react-bootstrap/Card';

import allSkills from './assets/allSkills.js'
import Carousel from 'react-bootstrap/Carousel';

const Skills = () => {

    return (
        <>
        <div style={{ backgroundColor: 'black'}}>
            <Carousel>
                {allSkills && allSkills.map((eachSkill, index) => (
                    <Carousel.Item interval={3000}>
                        <Card style={{ width: '140px'}} key={index} border="light" className="text-center">
                            <Card.Img style={{ height: '100px'}} variant="top" src={eachSkill.src} />
                            <Card.Body>
                                <Card.Title>{eachSkill.name}</Card.Title>
                                {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
        </>
    );
}

export default Skills;