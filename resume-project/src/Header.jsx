import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import './Header.css';

const Header = () => {

    return (
        <>
            {/* Navbar with custom styling*/}
            <Navbar bg='gradientBackground' className='customHeader' variant='dark' expand='md'>
                <Col md={{ span: 1, offset: 0 }} 
                sm = {{span: 12, offset: 0}}
                className='bgbrand'>
                    <Navbar.Brand id='myName' href='#aboutMe'>Juan Gabriel Barbosa Toro</Navbar.Brand>
                </Col>
                {/* Part of menu that collapses after certain breakpoints */}
                <Col md={{ span: 10, offset: 1 }} className='bgcol'>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="links">
                            <Stack direction="horizontal" gap={2}>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <div className="vr" />
                                <Nav.Link href="#education">Education</Nav.Link>
                                <div className="vr" />
                                <Nav.Link href="#work">Work Experience</Nav.Link>
                                <div className="vr" />
                                <Nav.Link href="#portfolio">Projects</Nav.Link>
                                <div className="vr" />
                                <Nav.Link href="#contactMe">Contact Me</Nav.Link>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
                {/* End of collapse */}
            </Navbar>
            {/* End of Navbar */}
        </>
    )

}

export default Header;