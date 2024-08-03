import React from 'react'
import './style.css'
import './Assets/Rectangle9764.png'
import Faqs from './Faqs'
import FAQ from './FAQ'
import Form from './Form'


function ContactUs() {
  return (
    <>
        <div className='main-sec flex'>
            <div className="text-white content-center m-10 ">
              <p className='text-[50px]'>
                  Contact Us
              </p>
              <p>
                  We're here to help. Feel free to reach out with any<br /> questions or inquiries.
              </p>
            </div>
        </div>
        <div className="text-center m-10 ">
          <p className='text-[50px]'>FAQs</p>
          <p className='text-[#5E5E5E] m-6  mx-20'>
          Discover instant answers to the most common questions with our comprehensive FAQ section. Whether you're seeking information on shipping, returns, or product details, our FAQ has got you covered. Save time and find the information you need without hassle. Our user-friendly interface makes it easy to navigate and locate the answers you're looking for.
          </p>
        </div>
        <FAQ />
        <div className="">
          <p className='text-[45px] text-center mt-20'>
              Still have questions?
          </p>
          <p className='text-center text-[#5E5E5E] mx-20 mt-2'>
          Get in touch with our dedicated support team for any additional help you may need.
          Whether you have questions, need troubleshooting, or want to provide feedback, our knowledgeable team is here to assist you. Contact us for prompt and reliable support.
          </p>
        </div>
        <Form />

    </>
  )
}

export default ContactUs