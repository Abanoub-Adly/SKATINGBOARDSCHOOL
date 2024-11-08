import React from 'react';
import './contactus.css'
import { Link } from 'react-router-dom';
export default function ContactUs() {
    return (
        <div className='contactus'>
        <h2>Contact Us</h2>
            <div className='container'>
                <div className='contactus-boxs'>
                    <div className='contactus-box'>
                        <div>
                            <input type='text' placeholder='Name*' />
                            <input type='text' placeholder='Phone Number*' />
                        </div>
                        <input type='text' placeholder='Email*' />
                        
                        <select>
                        <option value='Select Subject*'>Select Subject*</option>
                            <option value='a'>a</option>
                            <option value='b'>b</option>
                            <option value='c'>c</option>
                        </select>
                        
                        <textarea placeholder='Message' />
                        
                        <Link to={''} className='btn'>Send</Link>
                    </div>
                    <div className='map-box'>
                        <iframe
                            title="Google Map - Eiffel Tower Paris"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                            width="600"
                            height="450"
                            style={{ border: 0, width: '100%' }}
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
