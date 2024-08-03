import React ,{ useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown  } from "react-icons/io";

function FAQ() {
    const questions=[
        {
            id:1,
            title:'Can I cancel my order?',
            contant:'Please let me know if any additional information is required from my end to process this cancellation.I would appreciate confirmation of this cancellation at your earliest convenience.'
        },
        {
            id:2,
            title:'How do I create an account?',
            contant:'Please let me know if any additional information is required from my end to process this cancellation.I would appreciate confirmation of this cancellation at your earliest convenience.'
        },
        {
            id:3,
            title:'How can I reset my password?',
            contant:'Please let me know if any additional information is required from my end to process this cancellation.I would appreciate confirmation of this cancellation at your earliest convenience.'
        },
        {
            id:4,
            title:'How do I contact customer support?',
            contant:'Please let me know if any additional information is required from my end to process this cancellation.I would appreciate confirmation of this cancellation at your earliest convenience.'
        },
        {
            id:5,
            title:'What payment methods you accept?',
            contant:'Please let me know if any additional information is required from my end to process this cancellation.I would appreciate confirmation of this cancellation at your earliest convenience.'
        },
    ]
    const [toggle, setToggle] = useState(false)
    const [id,setId] =useState(0)
  return (
    <div>
        <div className="w-fit mx-auto p-1 rounded-2xl bg-[#F2F2F2] mb-16">
            {   questions.map((q)=> {
                return(
                    <div className='mx-auto m-3 w-[500px]' key={q.id}>
                        <div className='flex justify-between'>
                        <p className='m-5'>
                            {q.title}
                        </p>
                        <div className="m-5">
                            {
                            toggle &&(q.id===id) ? <IoIosArrowUp onClick={()=> {
                                return(
                                setId(q.id),
                                setToggle(!toggle)
                    )
                            }}
                                />: <IoIosArrowDown onClick={()=> {
                                return(
                                setId(q.id),
                                setToggle(!toggle)
                    )
                            }}
                                />
                        }
                        </div>
                        
                    </div>
                    <p className={toggle &&(q.id===id) ? 'text-[#5E5E5E] mx-5':'hidden'}>
                        {q.contant}
                    </p>
                    </div>

                    
                
                )
            })
            }
            
        </div>
    </div>
  )
}

export default FAQ