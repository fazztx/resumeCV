import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import allProjects from './assets/allProjects.js';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            {allProjects && allProjects.map((eachProject, index) => (
                <div className='block' key={index}>
                    {/* <Accordion> */}
                        <Accordion bsPrefix='custom-accordion'>
                        <div className='eachP'>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header className="custom-accordion-header"><span className="gradientInvText">{eachProject.name}</span></Accordion.Header>
                                <Accordion.Body className="custom-accordion-body">
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
            ))}
        </>
    );
}

export default Portfolio;
