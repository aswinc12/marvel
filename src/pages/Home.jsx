import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import View from '../components/View'
import Categories from '../components/Categories'
import Add from '../components/Add'
import { Link } from 'react-router-dom'

function Home() {
  const [addUpdate,setaddUpdate]=useState({})
  return (
    
    <div className=' bg-black'>
    
      <Row>

        <Col> 

         <h2 className='text-dark ms-5'>MAKE <span className='text-info'>YOUR OWN</span>COLLECTION </h2>
         <h4 className='text-info ms-5'>The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics</h4>
        <div>
          <Link to={'/watch-history'} style={{textDecoration:'none'}}>
          <a className='text-dark fs-3 ms-5' style={{fontFamily:'monospace', textDecoration:'none'}} ><i class="fa-regular fa-clock fa-spin fs-5"></i><span className='text-dark'>History</span></a>

          </Link>
        </div>
</Col>
        <Col >
        <img style={{height:'400px', width:'400px',marginTop:''}} src="https://i.postimg.cc/xT4MYG7x/source.gif" alt="" />
        </Col>

      </Row>
        <Row>
          <Col lg={1}>
          <Add update={setaddUpdate}>

          </Add>
          </Col>
          <Col lg={7}>
          <View updateState={addUpdate}></View>
          </Col>
          <Col lg={4}>
          <Categories></Categories>
          </Col>

        </Row>
        
    </div>
    
  )
}

export default Home