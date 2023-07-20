import React from 'react'
import MainHeading from '../main-heading/MainHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./contacts.css";

const Contacts = () => {
    return (
        <div className='contact'>
            <div className="container">
                <MainHeading parg='OUR CONTACTS' head='Contacts' />
                <h3>Massa enim nec dui nunc mattis enim ut tellus</h3>
                <div className='contact-content'>
                    <div className='contact-box'>
                        <FontAwesomeIcon icon={faPhone} />
                        <h3>Phone</h3>
                        <p>(913) 756-3126 <br />
                            (921) 557-1203</p>
                    </div>
                    <div className='contact-box'>
                        <FontAwesomeIcon icon={faMailBulk} />
                        <h3>Email</h3>
                        <p>petopia@example.com <br />
                            petopia@email.com</p>
                    </div><div className='contact-box'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h3>Address</h3>
                        <p>17 Parkman Place, 2122 <br />United States </p>
                    </div><div className='contact-box'>
                        <FontAwesomeIcon icon={faClock} />
                        <h3>Open Hours</h3>
                        <p>Mon - Fri: 7am - 6pm <br />
                            Saturday: 9am - 4pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;