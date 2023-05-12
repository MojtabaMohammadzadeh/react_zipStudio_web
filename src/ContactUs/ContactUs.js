import React from 'react'
import './ContactUs.css'
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane, faPhoneFlip,faEnvelope} from '@fortawesome/free-solid-svg-icons';
function ContactUs() {
    return ( 
        <>
        {/* **************section 01 ***************** */}
        <section className='main_parts'>

            {/* ***************Content 01****************** */}
            <div className='content_parts'>
              <ContactForm/>
            </div>

            {/* *************3D 01 ******************* */}
            <div className='three_D_parts'>
                
            <section className='contact_infos'>
                <h1>اطــلاعــات تمــــاس</h1>
                <div className ="frame">
                 <a href="#" className='btn'>
                <i  >
                <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{color: "#3b5998"}}/>
                </i>
                    </a>
                 <a href="#" className='btn' >
                <i  >
                <FontAwesomeIcon icon={faPhoneFlip} size="2x" style={{color: "#00acee"}}/>
                </i>
                </a>
                  <a href="#" className='btn'>
                <i  >
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: "#ea4c89"}}/>
                </i>
                </a>
                 
               
                    </div>
                </section>

            </div>

           

        </section>
        {/* *****************End Section 01********************* */}


       


        </>
     );
}

export default ContactUs;