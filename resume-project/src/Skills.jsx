import Card from 'react-bootstrap/Card';

import allSkills from './assets/allSkills.js'

const Skills = () => {

    return (
        <>

            {allSkills && allSkills.map((eachSkill, index) => (
                <Card style={{ width: '150px' }} key={index} border="light" className="text-center"> 
                    <Card.Img variant="top" src={eachSkill.src}/>
                    <Card.Body>
                        <Card.Title>{eachSkill.name}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                    </Card.Body>
                </Card>

            ))}
        </>
    );
}

export default Skills;