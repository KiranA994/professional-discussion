import { faAngleDown, faArrowRight, faLightbulb, faMagnifyingGlass, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Avatar from '@mui/material/Avatar';

function ContentThree() {
  return (
    <>
      <div className='p-4 mt-5 d-flex justify-content-between' style={{position:'relative'}}>

        <div className='d-flex align-items-center'>
          <p className='discussion'>LATEST DISCUSSION AS OF</p>
          <div className='red-box ms-2 mb-3'></div>
          <p className='date ms-2'>MARCH 12, 2024</p>
        </div>

        <div className='all-topics px-2 mb-3' style={{position:'absolute', left: '754px',top: '8px'}}>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: "#74C0FC", }} className='mt-3 ' />
          <p className='date mt-3 ms-2'>ALL TOPICS</p>
          <FontAwesomeIcon icon={faAngleDown} className='mt-3 ms-2' />
        </div>

      </div>

      <div className='row'>
        
        <div className="col-md-7">

        <div className='d-flex ms-4 search-topics' style={{cursor:'pointer'}}>
        <input type="text" placeholder="Search Topics" className="form-control w-100" style={{borderRadius: '27px'}} />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:'-30px', marginTop:'10px'}} />
      </div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person1.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What are the key principles of coding?</p>
        <p className='discussion'>Posted by Jishnu Ambadi</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>

      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person2.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>How does guide facilitate accurate medical billing?</p>
        <p className='discussion'>Posted by Sreelakshmi</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person3.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What are the major sections within the guide?</p>
        <p className='discussion'>Posted by Ambili</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person4.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>How often is the guide updated?</p>
        <p className='discussion'>Posted by Farzana</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person5.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What is the purpose of modifiers in coding?</p>
        <p className='discussion'>Posted by Neethu</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person6.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What are the differences between and ICD codes?</p>
        <p className='discussion'>Posted by Sagar</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person7.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What is the significance of Level II codes in CPT?</p>
        <p className='discussion'>Posted by Anton Joseph</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person8.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>How does guide handle telehealth services?</p>
        <p className='discussion'>Posted by Akhil Joy</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person9.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>How are codes categorized within the guide?</p>
        <p className='discussion'>Posted by Sruthi PP</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>


      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person10.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What are the implications of incorrect coding?</p>
        <p className='discussion'>Posted by Anna Chakko</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person11.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What is the purpose of the guide?</p>
        <p className='discussion'>Posted by Abhinav KS</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person12.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>How are  codes organized within the guide?</p>
        <p className='discussion'>Posted by Rotta Karuma</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <div className='d-flex justify-content-between mt-5 question-info'>
      <Avatar
        alt="Remy Sharp"
        src="./person13.png"
        sx={{ width: 43, height: 44 }}
        style={{backgroundColor: '#BBAEF0', marginLeft:'30px'}}
      />
     <div className='ms-4 flex-column'>
        <p className='question'>What is the role of modifiers?</p>
        <p className='discussion'>Posted by Richard Kiger</p>
     </div>

     <div className='responses d-flex px-2'>
     <FontAwesomeIcon icon={faMessage} style={{color: "#ba1717",}} className='mt-3 ms-2'/>
     <p className='resp mt-2 ms-1'>12 RESPONSES</p>
     </div>

     <div className='p-4'>
        <button className='btn view' 
        style={{marginTop:'-35px', backgroundColor:'#0A090E',color:'white', borderRadius:'5px'}}>View Answer</button>
      </div>

      </div>
      <div className='ms-4' style={{border:'1px solid #17132740'}}></div>

      <button className='btn btn-primary p-2 load ms-4 mt-4 mb-4'>Load More</button>

        </div>

        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className="row">
            <div style={{backgroundColor: '#FFEADE8C', width:'80%'}} className='p-4 join-community mask-group'>
              <p className='contributor mt-2'>Top Contributor</p>
              <span className='week d-flex justify-content-center'>this week</span>
              <img src="./Star.png" className='mt-2' alt="" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
              <p className='jishnu mt-2'>Jishnu Ambadi</p>
              <div style={{border:'1px solid #E4C9BB'}}></div>
              <p className='engage text-justify ms-5 mt-2'>You can be next one! Be a part of USA's 1st <br /> CPT Program Directory!</p>
              <button style={{border:'1px solid #FFF9E3', borderRadius:'42px', color:'#FFF9E3',display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
            className='btn mask-group-button p-3 mb-2'>Join Community & Ask <img src="./star-vector.png" alt="" className='mb-2' />
            </button>
            </div> 
          </div>
          <div className="row">
          <div className='mask-group-button mt-5 join-community mask-group' style={{width:'80%'}}>
            <div style={{marginLeft:'-62px'}} className='e-book'>
              <img src="./Ellipse1.png" alt="" style={{marginLeft:'150px'}} className='mt-5'/>
              <img src="./Ellipse2.png" alt="" style={{marginRight:'23px', marginTop:'-180px', marginLeft:'160px'}}/>
              <img src="./Mask-person.png" alt=""  style={{marginTop: '-280px', marginLeft:'150px'}}/>
            </div>

            <p className='forum text-center' style={{color:'white'}}>E-BOOK</p>
            <p className='contributor' style={{color:'white'}}>Charting Paths:Program Through a </p> 
            <span className='week d-flex justify-content-center mb-5'  style={{color:'white'}}>Student's Eyes</span>
            <button style={{border:'1px solid #FFF9E3', borderRadius:'42px', color:'#FFF9E3',display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
            className='btn mask-group-button p-3 mb-5'>Get the Guide <FontAwesomeIcon icon={faArrowRight} style={{color: "#FFF9E3",}} />
            </button>
          </div> 
          </div>
        </div>
      </div>

    </>
  )
}

export default ContentThree