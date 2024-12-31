import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ContactMe.css';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import the image
import flagPR from '../res/flagPR.png';

const ContactMe = () => {
  return (
    <>
      {/* <div className='contactSquare'>
          <div className='outSq'>
              <div className='sqText'>
                  787-951-1551<br/>
                  <span style={{color: 'gray', fontSize:40}}>Mayaguez / San Juan <br/>
                  juan.gabriel.barbosa@outlook.com </span>
              </div>
          </div>
      </div> */}
      <Col sm={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }}>
        <Card className="text-center" border="light" bsPrefix="custom-card">
          {/* <Card.Header>Featured</Card.Header> */}
          <Card.Body className="custom-card-body">
            {/* <Card.Title>787-951-1551</Card.Title> */}
            <Card.Text className="custom-card-text">
              787-951-1551 <br />
              juan.gabriel.barbosa@outlook.com
              {/* <a href="mailto:juan.gabriel.barbosa@outlook.com">juan.gabriel.barbosa@outlook.com</a> */}
            </Card.Text>
            <Button className="btn" variant="dark">
              <a
                href="https://www.linkedin.com/in/juan-gabriel-barbosa-toro-81a78611a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="gradientText">Visit My LinkedIn!</span>
              </a>
            </Button>
          </Card.Body>
          <Card.Footer className="custom-card-footer">
            Crafted in <img height={10} src={flagPR} alt="Puerto Rico Flag" />
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ContactMe;
