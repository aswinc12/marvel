import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <div className='b'>
              <Navbar >
        <Container>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <Navbar.Brand >
            <img
              alt=""
              src="https://i.postimg.cc/25hVBVdn/video-play-icon-11390.png"
              width="80"
              height="65"
              className="d-inline-block align-top"
            />
      <b className='fs-2 ms-3 mt-4 text-info'>  MARVEL <span className='text-black'>HUB</span></b>
          </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header