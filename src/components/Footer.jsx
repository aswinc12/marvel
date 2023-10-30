 import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'
function Footer() {
  return (
    <div className='c' style={{height:'100%',backgroundColor:'grey'}} >
        <Row >
            <Col>
            <img
              alt=""
              src="https://i.postimg.cc/25hVBVdn/video-play-icon-11390.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
      <b className='fs-5 ms-3 mt-4 ' >    <span className='text-info'>MARVEL</span><span className='text-black'>Hub</span></b>
      <h5 className='text-black'> asperiores nam quis neque impedit et molestiae perferendis animi eveniet</h5>
           
            </Col>
            <Col className='p-3'>
            <h4 className='text-black'>Links</h4>
            <a className='fs-5' style={{textDecoration:'none',color:'black'}} href="">LandingPage</a><br></br>
            <a className='fs-5 ' style={{textDecoration:'none',color:'black'}} href="">Home</a><br />
            <a className='fs-5' style={{textDecoration:'none',color:'black'}} href="">Watch history</a>

            </Col>
            <Col className='text-black mt-3'>
            <h4>Guides</h4>
            <h5>react</h5>
            <h5>Bootstrap</h5>
<h5>Routing</h5>
            </Col>
         <Col  lg={3} md={6} sm={12} xs={12}>
            <h4  className='text-black'>Contact us</h4>
<input className='form-control' type="text" placeholder='enter email' /><br />
<button className='btn btn-danger'>send</button><br />
<i class="fa-brands fa-twitter ms-2"></i>
<i class="fa-brands fa-facebook ms-2"></i>
<i class="fa-brands fa-facebook ms-2"></i>
<i class="fa-brands fa-github ms-2"></i>
</Col>   
        </Row>
    </div>
  )
}

export default Footer