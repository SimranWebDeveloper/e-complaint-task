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
        className={` absolute h-screen top-0 left-0  py-6  flex flex-col items-end  border rounded  bg-gradient-to-t to-[#F5F7FB] from-[#C6C6C7] shadow-lg shadow-stone-700 transition-all duration-700  ${
          isOpen ? 'w-64 px-4  responsiveHamburger' : 'w-20 px-4 '
        }`}
      >        
        {/* logo and btn */}         
        <div className={`${isOpen? 'w-full responsiveLogo':'w-44'}  flex justify-end `}>
            <img src={logoFull} alt="" style={{maxWidth:'unset'}} className={` w-44 mr-4 transition-all duration-300   ${isOpen ? 'opacity-100':'opacity-0'}  `} />
              <button className={`${isOpen ? '':'-translate-x-2'} `} onClick={() => setIsOpen(!isOpen)} >
                {isOpen ? <BiMenuAltRight className='w-6 h-6 '/>:<BiMenu className='w-6 h-6 '/>}
              </button>
        </div>

        {/* menus */}
        <div  className={`w-full flex flex-col space-y-2 mt-4 font-pop transition duration-700 py-4 relative  `}>
            
            <div className={`w-full flex  flex-nowrap ${isOpen ? 'items-start':'items-center'} bg-white py-4 border rounded shadow   hover:bg-[#E2E3E4]`}>
                <button className='px-[14px]'  >
                  <FaPlus className="mr-2"/>
                </button>
                <span style={{}}  className={`transition-all duration-700  text-nowrap ${isOpen ? 'opacity-100':'opacity-0'}  text-[15px] absolute left-8 px-3`} >Yeni şikayət yarat</span>
            </div>

            <div className={`w-full flex flex-nowrap  ${isOpen ? 'items-start':'items-center'} bg-white py-4 border rounded shadow   hover:bg-[#E2E3E4]`}>
                <button className='px-[14px]'  >
                <TfiMenuAlt className="mr-2"/>
                </button>
                <span style={{}}  className={`px-3 transition-all duration-700  text-nowrap ${isOpen ? 'opacity-100':'opacity-0'}  text-[15px] absolute left-8 px-3`} >Şikayətlər</span>
            </div>

            <div className={`w-full flex flex-nowrap  ${isOpen ? 'items-start':'items-center'} bg-white py-4 border rounded shadow   hover:bg-[#E2E3E4]`}>
                <button className='px-[14px]'  >
                <TbHandClick className="mr-2"/>
                </button>
                <span style={{}}  className={`px-2 transition-all duration-700  text-nowrap ${isOpen ? 'opacity-100':'opacity-0'}  text-[13px] absolute left-8 px-2`} >İstehlakçı təcrübəsi sorğusu</span>
            </div>

        </div>

      </div>
      
      {/* header */}
      <div  className='container-custom h-20  flex justify-between items-center'>
          <div>
          <img src={logoFull} alt="" className='sm:w-56 sm:h-12 w-40 h-8' />
          </div>
          <div className='cursor-pointer flex items-center'>
              <p className='text-base hidden md:block'>SİMRAN ABBASOV MAHİR OĞLU</p>
              <img src={adminIcon} alt="" className='w-[50px] h-[51px] ml-3' />
          </div>
      </div>
    </header>
  )
}


