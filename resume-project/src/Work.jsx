import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";

const Work = () => {
    const description = "Responsible for the creation and maintenance of on-the-job trainings, curriculum \
    development and compliance monitoring within the system. Manage the configuration and \
    customization of the system to meet the organization's requirements."
    return (
        <>

                <Col>
                    <ListGroup as={"ul"} className="workInfo">
                        <ListGroupItem className="eachLi" variant="light"><span className="gradientInvText">QA Training Support Specialist</span></ListGroupItem>
                        <ListGroupItem className="eachLi" variant="light">February 2022 – December 2024</ListGroupItem>
                        <ListGroupItem className="eachLi" variant="light">{description}</ListGroupItem>
                    </ListGroup>
                </Col>


        </>
    );
}

export default Work;