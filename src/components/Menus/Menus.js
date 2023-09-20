import React from 'react';
import './Menus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll'
import { FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector,  } from 'react-icons/fc';
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <Zoom>
        <div className='navbar-profile-pic'>
        <img 
        src="https://pbs.twimg.com/profile_images/1677187171621429248/GsSzAtF5_400x400.jpg" 
        alt="profile pic" 
        />     
        </div>     
        </Zoom>
        <Fade left>
        <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <Link 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100} 
                    >
                    <FcHome />
                    Home
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}
                    >
                    <FcAbout />
                    About
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='education' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}
                    >
                    <FcReadingEbook />
                    Education
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='techstack' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcBiotech />
                    Tech Stack
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='projects' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcVideoProjector />
                    Projects
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='workexp' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcPortraitMode />
                    Work Experience
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={100}>
                    <FcContacts />
                    Contact
                    </Link>
                    </div>
            </div>
        </div>
        </Fade>
        </>
    ) : (
        <>
         <div className='nav-items'>
            <div className='nav-item'>
                <div className='nav-link'>
                <Link 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcHome />
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcAbout />
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='education' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcReadingEbook />
                    </Link>
                    </div>
                    
                    <div className='nav-link'>
                    <Link 
                    to='techstack' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcBiotech />
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='projects' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcVideoProjector />
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='workexp' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcPortraitMode />
                    </Link>
                    </div>
                    <div className='nav-link'>
                    <Link 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    >
                    <FcContacts />
                    </Link>
                    </div>
            </div>
        </div>
        </>
    )}
    </>
  );
};

export default Menus;
