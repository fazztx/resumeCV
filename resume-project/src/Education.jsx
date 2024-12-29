import Stack from "react-bootstrap/esm/Stack";
import allEd from './assets/allEd.js';
import Col from 'react-bootstrap/Col';

import './Education.css'


import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";

const Education = () => {
    return (
        <>

            {allEd && allEd.map((eachEd, index) => (

                <Col md={{ span: 4, offset: 1+index }}> 
                    <ListGroup as={"ul"} key={index} className="edInfo">
                        <ListGroupItem className="eachLi" variant="light"><span className="gradientInvText">{eachEd.title}</span></ListGroupItem>
                        <ListGroupItem className="eachLi" variant="light">{eachEd.university}</ListGroupItem>
                        <ListGroupItem className="eachLi" variant="light">{eachEd.GPA}</ListGroupItem>
                    </ListGroup>
                </Col>


            ))}

        </>
    );
}

export default Education;