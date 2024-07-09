import React, { useState } from 'react'
import logoFull from '../images/logo-full.png'
import adminIcon from '../images/admin-icon.png'
import { BiMenu ,BiMenuAltRight} from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";




export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <header className=" h-20  border-b   ">
        {/* hamburger */}
      <div
        className={` absolute h-screen top-0 left-0  py-7  flex flex-col items-end  border rounded  bg-gradient-to-t to-[#F5F7FB] from-[#C6C6C7] shadow-lg shadow-stone-700 transition-all duration-700  ${
          isOpen ? 'w-64 px-4  responsiveHamburger' : 'w-20 px-7 '
        }`}
      >
        
          {/* logo and btn */}         
        {isOpen ? 
                <div className={`flex justify-end`}>
                    <img src={logoFull} alt="" style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300   opacity-100  `} />
                    <button className=' ' onClick={() => setIsOpen(false)} >
                    <BiMenuAltRight className='w-6 h-6 '/>
                </button>
                </div>
                
            :   <div className={`flex justify-end`}>
                    <img src={logoFull} alt="" style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300  opacity-0  `} />
                    <button className='' onClick={() => setIsOpen(true)} >
                    <BiMenu className='w-6 h-6 ' />
                 </button>
                 </div>
        }


        {/* yeni complaint */}
<div  className={`flex  flex-col mt-4 space-y-1 font-pop transition duration-700 py-4   `}>
              {isOpen ? 
                <div className={`flex text-nowrap  items-center p-4 bg-white border rounded shadow   hover:bg-[#E2E3E4] `}>
                    <button className='' onClick={() => setIsOpen(false)} >
                      <FaPlus className="mr-2"/>
                    </button>
                    <span style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300   opacity-100 text-[15px] `} >Yeni şikayət yarat</span>

                </div>
                
            :   <div className={`flex`}>
                    <button className='order-2 p-4 translate-x-2  bg-white border rounded shadow shadow-stone-400 w-12' onClick={() => setIsOpen(true)} >
                      <FaPlus className="mr-2"/>
                 </button>
                 <span style={{maxWidth:'unset'}} className={`order-1 w-44 transition-all duration-300   opacity-0 text-[15px] `} >Yeni şikayət yarat</span>

                 </div>
        }
  </div>

  {/* complaints */}
  <div  className={`flex  flex-col  space-y-1 font-pop transition duration-700 py-4  `}>
              {isOpen ? 
                <div className={`flex text-nowrap items-center p-4 bg-white border rounded shadow   hover:bg-[#E2E3E4] `}>
                    <button className=' ' onClick={() => setIsOpen(false)} >
                      <TfiMenuAlt className="mr-2"/>
                    </button>
                    <span style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300   'opacity-100 text-[15px] `} >Yeni şikayət yarat</span>

                </div>
                
            :   <div className={`flex`}>
                    <button className='order-2 p-4 translate-x-2  bg-white border rounded shadow shadow-stone-400 w-12' onClick={() => setIsOpen(true)} >
                      <TfiMenuAlt className="mr-2"/>
                 </button>
                 <span style={{maxWidth:'unset'}} className={`order-1 w-44 transition-all duration-300   opacity-0 text-[15px] `} >Yeni şikayət yarat</span>

                 </div>
        }
  </div>

{/* questions */}
  <div  className={`flex  flex-col  space-y-1 font-pop transition duration-700 py-4  `}>
              {isOpen ? 
                <div className={`flex text-nowrap items-center p-4 bg-white border rounded shadow   hover:bg-[#E2E3E4] `}>
                    <button className=' ' onClick={() => setIsOpen(false)} >
                      <TbHandClick className="mr-2"/>
                    </button>
                    <span style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300   'opacity-100 text-[15px] `} >Yeni şikayət yarat</span>

                </div>
                
            :   <div className={`flex`}>
                    <button className='order-2 p-4 translate-x-2  bg-white border rounded shadow shadow-stone-400 w-12' onClick={() => setIsOpen(true)} >
                      <TbHandClick className="mr-2"/>
                 </button>
                 <span style={{maxWidth:'unset'}} className={`order-1 w-44 transition-all duration-300   opacity-0 text-[15px] `} >Yeni şikayət yarat</span>

                 </div>
        }
  </div>
  
            


        

        
        
        
        {/* <div  className={`flex flex-col space-y-2 font-pop transition duration-700 py-4 ${isOpen ? 'opacity-100' : 'opacity-0'}`} >
      <button className="flex text-nowrap items-center p-4 bg-white border rounded shadow   hover:bg-[#E2E3E4] ">
        <FaPlus className="mr-2"/>
        <span className='text-[15px]'>Yeni şikayət yarat</span>
      </button>
      <button className="flex text-nowrap items-center p-4 bg-white border rounded shadow  hover:bg-[#E2E3E4]">
        <TfiMenuAlt className='mr-2' />
        <span className='text-[15px]'>Şikayətlər</span>
      </button>
      <button className="flex text-nowrap  items-center p-4 bg-white border rounded shadow hover:bg-[#E2E3E4] ">
        <TbHandClick className="mr-2"/>
        <span className='text-[12px]'>İstehlakçı təcrübəsi sorğusu</span>
      </button>
        </div> */}

      </div>
        
        {/* header */}
        <div  className=' h-20 ps-28 px-10 flex justify-between items-center'>
            <div>
            <img src={logoFull} alt="" className='w-56 h-12' />
            </div>
            <div className='cursor-pointer flex items-center'>
                <p className='text-base'>SİMRAN ABBASOV MAHİR OĞLU</p>
                <img src={adminIcon} alt="" className='w-[50px] h-[51px] ml-3' />
            </div>
        </div>
        
    </header>
  )
}


          {/* <div className={`flex   ${isOpen ? 'justify-end' : 'justify-center'}`}>
              <img src={logoFull} alt="" style={{maxWidth:'unset'}} className={` w-44 transition-all duration-300  ${isOpen ? 'opacity-100 ' : 'opacity-0 '} `} />
        {isOpen ? 
                <button className=' ' onClick={() => setIsOpen(false)} >
                    <BiMenuAltRight className='w-6 h-6 ' />
                </button>
                
            :
                    <button className='' onClick={() => setIsOpen(true)} >
                    <BiMenu className='w-6 h-6 ' />
                 </button>
        }
         </div> */}