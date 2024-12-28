import Carousel from 'react-bootstrap/Carousel';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <>
            <div className='contactSquare'>
                <div className='outSq'>
                    <div className='sqText'>
                        787-951-1551<br/>
                        <span style={{color: 'gray', fontSize:40}}>Mayaguez / San Juan <br/>
                        juan.gabriel.barbosa@outlook.com </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactMe;