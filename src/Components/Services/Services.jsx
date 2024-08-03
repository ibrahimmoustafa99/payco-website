import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import img from './Assets/1.png'
import img1 from './Assets/2.png'
import img2 from './Assets/3.png'


function Services() {
  return (
    <div>
        <div className="flex justify-between items-center bg-gradient-to-b from-[#ED0303] to-[#870202] ">
            <div className=" mx-10">
                <p className='text-[58px] font-bold text-white'>
                    Payco Services <br/>Escrow Payment & <br/> Letters of Credit
                </p>
            </div>
            <img src={img} alt="" />
        </div>

        <div className="flex m-32 gap-10">
            <div className="rounded-2xl bg-gradient-to-b from-[#ED0303] to-[#870202] overflow-hidden flex-col group">
                <div className="">
                    <p className='text-[16px] text-white mx-8 mt-10 opacity-70'>delivery transactions</p>
                <div className="flex items-end">
                    <p className='text-[47px] text-white ml-8' >Escrow Payment</p>
                    <div className="text-red-600 text-justify mx-5 px-2 py-1 my-auto bg-white rounded-xl animte-bounce">
                        <IoIosArrowRoundForward />
                    </div>
                    
                </div>
                <p className='text-[16px] text-white mx-8 mt-10 '>Escrow payments are perfect for creating trust in payment-on-delivery transactions between parties that
                    are unfamiliar with each other. The buyer uploads funds to a secure escrow wallet,
                    and they are released to the seller on delivery of the goods.</p>
                </div>
                <div className='transition ease-in-out group-hover:scale-125 duration-300 origin-bottom'>
                    <img src={img1} alt="" />

                </div>
            </div>
            <div className="rounded-lg bg-gradient-to-b from-[#ED0303] to-[#870202] overflow-hidden flex flex-col justify-between group">
                <div className="">
                    <p className='text-[16px] text-white mx-8 mt-10 opacity-70'>international trade</p>
                <div className="flex items-end">
                    <p className='text-[47px] text-white ml-8'>Letters of Credit</p>
                    <div className="text-red-600 text-justify mx-5 px-3 py-1 my-auto bg-white rounded-xl animte-bounce text-clip transition duration-300 group-hover:font-condensed font-condensed group-hover:scale-x-125 origin-left ">
                        <IoIosArrowRoundForward  />
                    </div>
                </div>
                <p className='text-[16px] text-white mx-8 mt-10 '>
                Importers can use letters of credit to guarantee payment to an exporter on the successful delivery of goods. 
                These financial instruments are routinely used in international trade, providing security to both the importer and the exporter.
                </p>
                </div>
                <div className='transition ease-in-out duration-300 origin-bottom group-hover:scale-125 '>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
       
    </div>
    
  )
}

export default Services