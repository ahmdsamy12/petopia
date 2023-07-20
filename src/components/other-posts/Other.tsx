import React from 'react'
import MainHeading from '../main-heading/MainHeading';
import img from "./../../images/Img (3).png";
import img1 from "./../../images/Img (4).png";
import img2 from "./../../images/Img (5).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import "./other.css";


const Otheri = () => {
  return (
    <div className='other'>
        <div className="container">
            <MainHeading parg='Other Posts' head='Other Posts'/>
            <div className='other-content'>
                <div className='other-box'>
                    <img src={img} alt="" />
                    <span><FontAwesomeIcon icon={faUser} /> by Corabelle Durrad</span>
                    <span> <FontAwesomeIcon icon={faCalendar} /> 02.01.2022</span>
                    <h3>5 Crazy Things Dogs Do When Left Alone At Home</h3>
                    <p>Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                </div>
                <div className='other-box'>
                    <img src={img1} alt="" />
                    <span> <FontAwesomeIcon icon={faUser} /> by Corabelle Durrad</span>
                    <span> <FontAwesomeIcon icon={faCalendar} /> 02.01.2022</span>
                    <h3>Your Dog Desperately Needs From You</h3>
                    <p>Amet porttitor eget dolor morbi non arcu risus quis varius  sodales ut etiam sit amet </p>
                </div><div className='other-box'>
                    <img src={img2} alt="" />
                    <span> <FontAwesomeIcon icon={faUser} /> by Corabelle Durrad</span>
                    <span> <FontAwesomeIcon icon={faCalendar} /> 02.01.2022</span>
                    <h3>Top Cat Foods to Consider If You Are a First Time Owner</h3>
                    <p>Vel eros donec ac odio tempor orci dapibus ultrices. Arcu felis bibendum ut tristique et egestas quis</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Otheri;