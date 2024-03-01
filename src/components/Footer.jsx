import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col ` }>
          <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            
            <div className='flex-1 flex flex-col justify-start mr-10'>
               <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain ' />
               <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
            </div>

            <div className='flex flex-[1.5] flex-row w-full 
            justify-between flex-wrap md:mt-0 mt-10
            '>
             {footerLinks.map((footerlink)=>(
                 <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px] '>
                        <h4 className='font-poppins text-white font-medium 
                        text-[18px] leading-[27px]'>  {footerlink.title} </h4>
                        
                         <ul className='list-none mt-4'>
                         {footerlink.links.map((x, index)=>(
                             <li key={x.name} className={`font-poppins  
                                              font-normal text-[16px] 
                                              text-dimWhite leading-[24px] hover:text-secondary 
                                              cursor-pointer
                                    ${index !== footerlink.links.length-1 ? " mb-4 ": "mb-0" }
                              `}> 
                               {x.name}
                             </li>
                          ))}
                         </ul>
                 </div>
             ))}
            </div>
          </div>

          <div className='flex  justify-between w-full items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3E45]'>
              <p className='font-poppins text-white font-normal text-center
                        text-[18px] leading-[27px]'>2021 HooBank. All Rights Reserved.</p>
              <div className='flex flex-row md:mt-0 mt-6'>
                {socialMedia.map((social,index)=>(
                   <a href={social.link} target='_blank'>
                   <img key={social.id} src={social.icon} alt={social.id}  
                    className={`w-[21px] h-[21px] object-contain cursor-pointer socialGlowUp ${index !== socialMedia.length-1 ? "mr-6":"mr-0"} `}/>
                   </a>
                ))}
              </div>
          </div>
    </section>
  )
}

export default Footer