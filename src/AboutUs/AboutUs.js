import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return ( 
        <>
        {/* **************section 01 ***************** */}
        <section className='main_parts_about'>

            {/* ***************Content 01****************** */}
            <div className='content_parts'>
                <h3 className='title_content'>بی تعارف بگیم</h3>
                <p className='text_content'>راست حقیقتش بگذار بی تعارف بگیم. ما یک سری جوون
                عاشق برنامه نویسی و استارت آپ هستیم با کلی ایده‌های ناب. اینم یکی از ایده‌هامونه که 
                به مرحله اجرا رسوندیم. با خرید محصولاتمون شما هم به پیشبرد 
                اهدافمون برای رسیدن به جایگاهای بالا توی تکنولوژی ما رو کمک کردید. <br/> پس از این بابت ازتون ممنونیم &#128591;&#128522;</p>
                
               
            </div>

            {/* *************3D 01 ******************* */}
            <div className='three_D_parts_about'>
            <div className="wrapper">
            <div className="rings">
                <div className="ring ring1">
                <div className="ring ring2">
                <div className="ring ring3">
                <div className="ring ring4"></div>
                </div>
                </div>
                </div>
            </div>
            
            </div>
            </div>

           

        </section>
        {/* *****************End Section 01********************* */}


       


        </>
     );
}

export default AboutUs;