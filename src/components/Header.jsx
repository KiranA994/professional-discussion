import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Header() {


  return (
    <>

    <nav className="navbar navbar-light" style={{borderBottom:'1px solid #ddd'}}>
  <div className="container-fluid d-flex justify-content-between">
  <img
              src="./logo.PNG"
              width="30"
              height="30"
              alt="React Bootstrap logo"
            />
    <div className='links justify-content-center' style={{marginLeft:'140px'}} >
    <a className="navbar-brand" href="#">Learn</a>
    <a className="navbar-brand" href="#">&#x2022; How do I participate?</a>
    <a className="navbar-brand" href="#">&#x2022; Universities</a>
    <a className="navbar-brand" href="#">&#x2022; Corporate</a>
    </div>

    <div className='d-flex justify-content-end align-items-center'>
    <div className='search-circle'> 
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'black'}} />
    </div>
    <button className='btn join-program' style={{backgroundColor:'black', color:'white',borderRadius:'90px'}}>Join Program</button>
    </div>

  </div>

    </nav>

    </>
  )
}

export default Header