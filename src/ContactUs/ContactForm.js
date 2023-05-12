import React,{useState} from 'react'
import './ContactUs.css'
function ContactForm() {

    const [state, setState] = useState({
        name: "",
        phone: "",
        message: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };
   return (
    <>
    <section className='contact_form_main'>
        
        
       
        
        <form className='form-main' onSubmit={handleSubmit}>
        <h4 className='form-title'>نام خانوادگی</h4>
        <div className="form-control">
          
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <h4 className='form-title'>شماره تماس</h4>
        <div className="form-control">
          
          <input
            type="phone"
            name="phone"
            value={state.phone}
            onChange={handleInputChange}
          />
        </div>
        <h4 className='form-title'>پیام</h4>
        <div className="form-control-message">
          
        <textarea
        type="text"
        
        
        
        defaultValue=""
        rows={4}
        cols={40}
      />
         
        </div>
       <div className='form-btn-container'>
       <button className='form-btn' type="submit">ارسال</button>
       </div>
        
      </form>
    </section>
    </>
   );
}

export default ContactForm;