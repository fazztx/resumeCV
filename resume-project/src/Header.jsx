import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';


const Header = () => {

    return (
        <>
            <Navbar bg='gradientBackground' className='customHeader' variant='dark' expand='lg'>
                <Navbar.Brand id='myName'>Juan Gabriel Barbosa Toro</Navbar.Brand>
                <Nav className="links">
                    <Stack direction="horizontal" gap={2}>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <div className="vr" />
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <div className="vr" />
                        <Nav.Link href="#education">Education</Nav.Link>
                        <div className="vr" />
                        <Nav.Link href="#work">Work Experience</Nav.Link>
                        <div className="vr" />
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Stack>
                </Nav>
            </Navbar>

        </>
    )

}

export default Header;