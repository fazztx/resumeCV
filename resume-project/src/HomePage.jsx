import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header.jsx';
import './HomePage.css'

// import Skills from './Skills.jsx';
import Work from './Work.jsx';


import Image from 'react-bootstrap/Image';

import AboutMe from './AboutMe.jsx';
import Portfolio from './Portfolio.jsx';
import SkillsOWL from './SkillsOWL.jsx';
import Education from './Education.jsx';
import ContactMe from './ContactMe.jsx';

const HomePage = () => {


    return (
        <>

            <Container fluid='true'>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col sm={12} md={4} className="d-none d-md-inline-block">
                        <Image className="spiralImg" src="./res/spiralCode.gif" fluid='true'/>
                    </Col>
                    <Col sm={{ span: 12, offset: 0 }} md={{ span: 8, offset: 0 }}>
                        <section id='aboutMe'>
                            <AboutMe />
                        </section>
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
                <Row>
                    <Education />
                </Row>

                <Row>
                    <div className='titleSection'>
                        <section id='work'>
                            <span className='gradientText'>Work Experience</span>
                        </section>
                    </div>
                </Row>
                <Row>
                    <Work />
                </Row>

                <Row>
                    <div className='titleSection'>
                        <section id='portfolio'>
                            <span className='gradientText'>Projects</span>
                        </section>
                    </div>
                </Row>
                <Row className='portRow'>
                {/* sm={{ span: 12, offset: 0 }}
                md={{ span: 6, offset: 3 }}> */}
                    <Portfolio />
                </Row>

                <Row>
                    <div className='titleSection'>
                        <section id='contactMe'>
                            <span className='gradientText'>Contact Me</span>
                        </section>
                    </div>
                </Row>
                <Row className='divBck'>
                    <ContactMe />
                </Row>


            </Container >



        </>
    );
}

export default HomePage;
