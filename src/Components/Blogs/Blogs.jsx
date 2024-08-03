import React from 'react'
import img from './assets/Rectangle9776.png'
import img_1 from './assets/1.png'
import img_2 from './assets/2.png'
import img_3 from './assets/3.png'
import img_4 from './assets/4.png'
import img_5 from './assets/5.png'
import img_6 from './assets/6.png'
import img_7 from './assets/7.png'
import FAQ from './FAQS'


function Blogs() { 
  const topics=[
    'View all',
    'Blockchain',
    'Artificial Intelligence',
    'Trade Finance',
    'Fintech'
  ]
  const contant =[
    {
      imgsrc :img_1,
      type: 'Finance',
      head : 'Ensuring Transparency in Trade Finance',
      body : 'Learn how blockchain technology brings transparency to trade finance.'
    },
    {
      imgsrc :img_2,
      type: 'Trade Finance',
      head : 'The Future of International Trade',
      body : 'Explore how blockchain and AI are shaping the future of global trade.'
    },
    {
      imgsrc :img_3,
      type: 'Trade Finance',
      head : 'The Role of AI in Trade Finance',
      body : 'Discover how AI is revolutionizing the world of trade finance.'
    },
    {
      imgsrc :img_4,
      type: 'Trade Finance',
      head : 'The Future of Trade Finance',
      body : 'Explore how AI is reshaping the landscape of trade finance.'
    },
    {
      imgsrc :img_5,
      type: 'Trade Finance',
      head : 'Solving Trade Finance Challenges',
      body : 'Learn how Payco is addressing the longstanding issues in trade finance.'
    },
    {
      imgsrc :img_6,
      type: 'Trade Finance',
      head : 'The Benefits of Payco`s Platform',
      body : 'Discover the advantages of using Payco`s platform for trade finance.'
    },

  ]
  return (
    <div>
        <div className="mx-9 my-14">
            <p className='text-[#ED0303] text-[58px] font-medium'>Transforming Global Trade Finance</p>
            <p className='text-[23px]  font-normal text-[#5E5E5E] my-9'>Stay informed about the latest news, updates, and advancements in various fields, especially those related to transforming global trade finance. Connect with others and stay updated on the latest happenings and progressions in the world around you.</p>
            <div className="flex">
                <img src={img} alt="" />
                <div className="m-8 flex flex-col justify-around">
                    <p className='w-fit py-1 px-3 bg-gradient-to-b from-[#DC4F3B] to-[#DA291C] text-white rounded-3xl'>Blockchain</p>
                    <p className='text-[33px] font-medium bg-gradient-to-b from-[#DC4F3B] to-[#DA291C] bg-clip-text text-transparent'>How Blockchain is Transforming Trade Finance</p>
                    <p className='text-[16px] text-[#5E5E5E] font-normal'>
                        Explore the transformative potential of blockchain technology in modernizing and streamlining the trade finance industry. Uncover how blockchain is reshaping traditional processes and unlocking new opportunities for businesses in the global marketplace.
                    </p>
                    <div className="flex">
                      <div className="p-8 mt-8 mr-5 rounded-full bg-[#D9D9D9]"></div>
                      <div className=" mt-8">
                      <p className='text-[16px] mb-3 text-[#5E5E5E]'>Khalid Al-sharif</p>
                      <p className='text-[14px] text-[#5E5E5E]'>7 Jan 2024 <span className='ml-4'>8 minute read</span></p>
                    </div>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className="bg-[#EFEFEF] p-16 text-[14px] text-[#5E5E5E]">
          <div className="flex gap-8">
          {
            topics.map(topic =>{
              return(
                topic ==='View all' ? 
                <p className='text-[#DC4F3B]'> {topic} </p> :
                <p> {topic} </p>
              )
            } )
          }
          </div>
          <div className="grid grid-cols-3 gap-y-16 gap-x-8 my-8">
            {
             contant.map(element =>{
              return(
                <div className="">
                  <img src={element.imgsrc} alt="" />
                  <p className='my-6 px-4 py-1 rounded-2xl text-white bg-gradient-to-r from-[#DC4F3B] to-[#DA291C] w-fit'>{element.type}</p>
                  <p className='text-[19px] text-black font-semibold'>{element.head}</p>
                  <p className='text-[14px] font-normal'>{element.body}</p>
                </div>
              )
             })
            }
          </div>
        
        </div>
        <div className="flex gap-16 p-16 ">
            <div className="">
                <p className='text-[47px] font-semibold bg-gradient-to-r from-[#DC4F3B] to-[#DA291C] bg-clip-text text-transparent'>
                    Revolutionizing Trade Finance with Blockchain
                </p>
                <p className='font-normal text-[#5E5E5E]'>
                Keep yourself informed with the most recent news and insights about Payco and the trade finance industry by signing up for our blog newsletter. Stay ahead of the curve with our regular updates.
                </p>
            </div>
                <img src={img_7} alt="" />
            
        </div>
        <div className="p-16">
          <p className='text-[58px] text-black font-medium mx-auto text-center'>
            FAQs
          </p>
          <p className='text-center text-[23px] mt-4 text-[#5E5E5E]'>
          Discover instant answers to the most common questions with our comprehensive FAQ section. Whether you're seeking information on shipping, returns, or product details, our FAQ has got you covered. Save time and find the information you need without hassle. Our user-friendly interface makes it easy to navigate and locate the answers you're looking for.

          </p>
        </div>
        <FAQ />

    </div>
  )
}

export default Blogs