import React from 'react'
import './Contact.css'
import Rotate from 'react-reveal/Rotate'
import LightSpeed from 'react-reveal/LightSpeed'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <LightSpeed>
                            <img 
                            src='data:image/png;base64,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' 
                            alt='ocontact'
                            className='image'
                            />
                            </LightSpeed>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <Rotate>
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                        <div className='row'>
                        <div className='row'>
                        <h6>Contact With 
                            
                            
                            <BsLinkedin color='blue' size='30' className='ms-2' />
                            <BsGithub color='purple' size='30' className='ms-2' />
                            <BsTwitter color='light blue' size='30' className='ms-2' />
                        </h6>  
                        </div> 
                     <div className='row px-3 mb-4'>
                        <div className='line' />
                        <small className='or text-center'>OR</small>
                        <div className='line' />
                     </div>
                     <div className='row px-3'>
                        <input 
                        type='text'
                        name='name' 
                        placeholder='Enter your name' 
                        className='mb-3' 
                        />
                     </div>
                     <div className='row px-3'>
                        <input 
                        type='email'
                        name='email' 
                        placeholder='Enter your email' 
                        className='mb-3' 
                        />
                     </div>
                     <div className='row px-3'>
                        <textarea 
                        type='text'
                        name='msg' 
                        placeholder='Write your message' 
                        className='mb-3' 
                        />
                     </div>
                     <div className='row px-3'>
                        <button className='button' type='submit'>
                            SEND MESSAGE
                        </button>
                     </div>
                    </div>
                </div>
                </Rotate>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact