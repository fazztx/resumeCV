import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header.jsx';
import './HomePage.css'

// import Skills from './Skills.jsx';
import Work from './Work.jsx';


import Image from 'react-bootstrap/Image';

import AboutMe from './AboutMe.jsx';
import SkillsOWL from './SkillsOWL.jsx';
import Education from './Education.jsx';
import ContactMe from './ContactMe.jsx';

const HomePage = () => {


    return (
        <>

            <Container fluid='true'>

                <Header />

                <Row>
                        <Col>
                            <Image className="spiralImg" src="./res/spiralCode.gif" fluid='true' />
                        </Col>
                        <Col xs={8}>
                            <AboutMe />
                        </Col>
                </Row>

                <Row>
                    <div className='firstTitleSection'>
                        <section id='skills'>
                            <span className='gradientText'>Technical Skills</span>
                        </section>
                    </div>
                </Row>
                <Row>
                    <SkillsOWL />
                </Row>

                <Row>
                    <div className='titleSection'>
                        <section id='education'>
                            <span className='gradientText'>Education</span>
                        </section>
                    </div>
                </Row>
                <Row className='edRow'>
                    <Education />
                </Row>

                <Row>
                    <div className='titleSection'>
                        <section id='work'>
                            <span className='gradientText'>Work Experience</span>
                        </section>
                    </div>
                </Row>
                <Row className='edRow'>
                    <Work />
                </Row>

                {/* <Row>
                    <div className='titleSection'>
                        <section id='contactMe'>
                            <span className='gradientText'>Contact Me</span>
                        </section>
                    </div>
                </Row> */}
                {/* <Row >
                    <ContactMe/>
                </Row> */}


            </Container >



        </>
    );
}

export default HomePage;
