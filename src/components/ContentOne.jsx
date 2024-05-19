import { faLightbulb, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '@mui/material/Avatar';



function ContentOne() {
  return (
    <>
    <p className='forum text-center mt-5'>FORUM</p>
    <p className='discuss text-center'>Discuss & Evolve</p>
    <p className='engage text-center'>Engage with Fellow Professionals: Join the  Program Forum Discussion!</p>
    <div className='d-flex justify-content-center'>
        <input type="text" placeholder='Search Topics' className='form-control w-25 topics p-2'/>
        <div className='topic-search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'white'}}  />
        </div>
    </div>
    <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex'>
            <img src="./message.png" alt="" />
            <p className='start-discuss ms-2 mt-3'>START DISCUSSING</p>
        </div>
        <div className='ms-5 mt-3'>&#x2022;</div>
        
        <div className='d-flex'>
            <div className='view-topics ms-5 mt-2'>
            <FontAwesomeIcon icon={faLightbulb} style={{color: "#74C0FC",}} />
            </div>
            <p className='start-discuss ms-2 mt-3'>VIEW TOPICS</p>
        </div>       
    </div>
    <div className='d-flex justify-content-center mt-2 ms-5'>
        <img src="./arrow.png" alt="" className='arrow' style={{marginLeft:'-8px'}} />
    </div> 
    <div className='d-flex avatar-block' style={{marginTop:'200px'}}>
    <Avatar
        className='avatar-logos'
        alt="Remy Sharp"
        src="./av1.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#FFF3EC'}}
      />
    <Avatar
     className='avatar-logos avatar-two'
        alt="Remy Sharp"
        src="./av2.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#6FDDFC', marginTop:'-40px', marginLeft:'-40px'}}
      />
      <img className='how' src="./how.png" alt="" width={'60px'} height={'20px'} style={{marginLeft:'290px',marginTop:'20px', position:'absolute', zIndex:'1'}}/>
    <Avatar
     className='avatar-logos avatar-three'
        alt="Remy Sharp"
        src="./av3.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#B190B6', marginTop:'-100px', marginLeft:'60px'}}
      />
    <Avatar
     className='avatar-logos avatar-four'
        alt="Remy Sharp"
        src="./av4.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#FBEEAC', marginTop:'40px', marginLeft:'-40px'}}
      />
      <img className='that-it' src="./that's it.png" alt="" width={'80px'} height={'20px'} style={{marginLeft:'500px',marginTop:'180px', position:'absolute', zIndex:'1'}}/>
    <Avatar
     className='avatar-logos avatar-five'
        alt="Remy Sharp"
        src="./av5.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#BBAEF0', marginTop:'-80px', marginLeft:'60px'}}
      />
    <Avatar
     className='avatar-logos avatar-six'
        alt="Remy Sharp"
        src="./av6.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#FCCC60', marginTop:'-40px', marginLeft:'-40px'}}
      />
          <img className='hey' src="./hey.png" alt="" width={'80px'} height={'20px'} style={{marginLeft:'1000px',marginTop:'-40px', position:'absolute', zIndex:'1'}}/>
    <Avatar
     className='avatar-logos avatar-seven'
        alt="Remy Sharp"
        src="./av7.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#FBFFF1', marginTop:'-100px', marginLeft:'40px'}}
      />
    <Avatar
     className='avatar-logos avatar-eight'
        alt="Remy Sharp"
        src="./av8.png"
        sx={{ width: 182, height: 182 }}
        style={{backgroundColor: '#93CAFF'}}
      />
      <img className='awsome' src="./awesome.png" alt="" width={'80px'} height={'20px'} style={{marginLeft:'1290px',marginTop:'120px', position:'absolute', zIndex:'1'}}/>
    </div>
    </>
  )
}

export default ContentOne