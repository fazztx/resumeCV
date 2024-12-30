import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import allProjects from './assets/allProjects.js';
import './Portfolio.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Portfolio = () => {
    return (
        <>
            {allProjects && allProjects.map((eachProject, index) => (
                <Col sm={{ span: 12, offset: 0 }}
                        md={{ span: 6, offset: 3 }}>
                    <div className='block' key={index}>
                        {/* <Accordion> */}
                        
                        <Accordion bsPrefix='custom-accordion'>
                            <div className='eachP'>

                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header className="custom-accordion-header"><span className="gradientInvText">{eachProject.name}</span></Accordion.Header>
                                    <Accordion.Body className="custom-accordion-body">
                                        <Image className="pictureAcc" src={eachProject.picture} fluid/>
                                        <ul>
                                            {eachProject.description && eachProject.description.map((eachD, index) => (
                                                <li key={index}>{eachD}</li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </Accordion>

                    </div>
                </Col>
            ))}
        </>
    );
}

export default Portfolio;
