import React from 'react'
import { Row, Col } from 'react-bootstrap';

function ContentTwo() {
  return (
    <>
    <div className='main-container p-4 mt-4'>
    <p className='forum text-center mt-5'>TOPICS</p>
    <p className='discuss text-center'>Most Searched Ones</p>
    <div className='d-flex justify-content-evenly serached-ones'>
        <div className='searched'>
            <p className='searched-content mt-5'>Eligibility</p>
        </div>
        <div className='searched'>
        <p className='searched-content mt-5'>F1 Visa Students</p>
        </div>
        <div className='searched'>
        <p className='searched-content mt-5'>Universities</p>
        </div>
    </div>
    <div className='d-flex justify-content-evenly serached-ones mt-5'>
        <div className='searched'>
        <p className='searched-content mt-5'>Admission</p>
        </div>
        <div className='searched'>
        <p className='searched-content mt-5'>Companies</p>
        </div>
        <div className='searched'>
        <p className='searched-content mt-5'>Jobs</p>
        </div>
    </div>
    <div className='d-flex mt-5 justify-content-center align-items-center'>
    <p className='engage text-center'>Didn’t find your topic?</p>
    <img src="./message-box.svg" alt="" className='ms-2 mb-3' />
    <p className='engage-italics text-center ms-2'>Start Discussing</p>
    </div>
    </div>
    </>
  )
}

export default ContentTwo