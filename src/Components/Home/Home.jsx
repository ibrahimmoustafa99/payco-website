import React from 'react'
import img_1 from './Assets/1.png'
import img_2 from './Assets/2.png'
import img_3 from './Assets/3.png'
import img_4 from './Assets/4.png'
import img_5 from './Assets/5.png'
import img_6 from './Assets/6.png'
import img_7 from './Assets/7.png'
import img_8 from './Assets/8.png'

import './stylee.css'

function Home() {
    const imgs=[
        img_1,
        img_2,
        img_3
    ]


return (
    <div>
        <div className="text-center m-8">
            <p className='text-[#ED0303] font-bold text-[47px] mb-8'>
                Make Faster, Cheaper and More Secure Business payments on the blockchain
            </p>
            <p className='text-[#5E5E5E] text-[23px] mb-8 '>
            At Payco, we use the latest digital technologies to revolutionize the way businesses handle payments.
            We’re a fully regulated Swiss financial intermediary, compliant with the stringent due diligence
            and anti-money laundering requirements mandated by the Swiss Federal Financial Market Supervisory Authority (FINMA) and supervised by the Financial Services Standards Association (VQF).
            </p>
            <button className='py-3 px-7 text-[18px] font-medium bg-[#ED0303] text-white rounded-3xl hover:scale-105 hover:bg-[#C60000] duration-300'>
                Get Started
            </button>
        </div>
        <div>
            <p className='text-center text-[#656565] text-[24px] mt-32'>
                Partners
            </p>
            <div className="partners">
                <div className="partners-slide w-fit">

                    <img src={img_1} alt="" />
                    <img src={img_2} alt="" />
                    <img src={img_3} alt="" />

                </div>
                <div className="partners-slide">
                    <img src={img_1} alt="" />
                    <img src={img_2} alt="" />
                    <img src={img_3} alt="" />
                </div>

          
            </div>
            <div className="flex justify-around bg-gradient-to-r from-[#F10101] to-[#8B0101]  absolute">
                <div className='flex flex-col justify-center text-start mx-16' >
                    <p className="font-medium text-[33px] text-white m-2" >New Technology-Enabled Payment Methods for Business</p>
                    <p className='text-[19px] text-white m-2' >We’re changing payment methods to make business easier for you.</p>
                    <p className='text-white m-2 text-[14px]'>We use blockchain technology, artificial intelligence and stable cryptocurrencies to make the easiest, fastest, most affordable and most secure payment systems available our payment systems could save you time, money and stress remittance payments for commonplace business payments Escrow payments and UCP600 compliant letters of credit for more complicated transactions Business runs smoother with Payco. Everything from basic invoice payments to conditional cross-border payments between unfamiliar parties is better with Payco. </p>
                    <button className='py-4 px-11 mr-auto bg-white rounded-full mt-11'> Get Started Now </button>
                </div>
                <img src={img_4} alt="" className=''/>
            </div>
                <img src={img_5} alt="" className='relative bottom-14 right-5 ' />
                <img src={img_6} alt="" className='relative top-20 left-[650px]'/>
                <img src={img_7} alt="" className='relative left-[650px] bottom-36 '/>
                <img src={img_8} alt="" className='relative left-[1100px] bottom-80   '/>

    
            
        </div>
    </div>
)
}

export default Home