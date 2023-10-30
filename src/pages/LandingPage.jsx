import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import'./LandingPage.css'

function LandingPage() {
  return (
    <div className='a'  >
      
        <Container>
            <Row>
<Col>
<h1 className='mt-5 text-info'><b>MARVEL</b><span className='text-black'>HUB</span></h1>
<p className='text-lack fs-3'> <b>The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The franchise also includes and literature. The shared universe,  was established by crossing over common plot elements, settings, cast, and characters.
  </b></p>
<Link to={'/Home'}>
<Button variant="primary">Go somewhere</Button>

</Link>

</Col>
 <Col>
 <img  style={{height:'400px',marginTop:'50px'}} src="https://i.postimg.cc/ZK6b4ny5/Captain-America-Shield.webp" alt="" />
 </Col>

            </Row>
            <Row>
              <h1 className='text-black'>features</h1>
            <Col  className='mb-5'>
 <Card style={{ width: '18rem',height:'250px' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/tgNQPgsp/6bc2eff5635182fd9fb4d59fa4f617a5.gif" />
      <Card.Body>
        <Card.Title><b className='text-danger'>Iron Man</b></Card.Title>
      </Card.Body>
    </Card>
 </Col>
 <Col className='mb-5'>
 <Card style={{ width: '18rem',height:'250px' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/X79phwh8/Iron-Man-Tony-Stark-plus-Suits-MARK-7-iron-man-42871658-540-350.gif" />
      <Card.Body>
        <Card.Title><b className='text-danger'>Iron Man</b></Card.Title>
      </Card.Body>
    </Card>
 </Col>
 <Col  className='mb-5'>
 <Card style={{ width: '18rem',height:'250px' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/Y937czg5/main-qimg-7c40b524fa60afaf6bdf35c2a96ea68c.webp" />
      <Card.Body>
        <Card.Title><b className='text-danger'>Iron Man</b></Card.Title>
      </Card.Body>
    </Card>
 </Col>

            </Row>
        </Container>
    </div>
  )
}

export default LandingPage