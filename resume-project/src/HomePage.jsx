import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header.jsx';
import './HomePage.css'

import Skills from './Skills.jsx';

import Image from 'react-bootstrap/Image';

import AboutMe from './AboutMe.jsx';

const HomePage = () => {


    return (
        <>

            <Container fluid='true'>
                    <Row>
                        <Col>
                            {/* COL 1 of 1 */}
                            <Header/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image className="spiralImg" src="./res/spiralCode.gif" fluid='true'/>
                        </Col>
                        <Col xs={8}>
                            <AboutMe/>
                        </Col>
                    </Row>

                    <Row>
                        <Skills/>

                    </Row>
                        
            </Container >
            
            

        </>
    );
}

export default HomePage;
