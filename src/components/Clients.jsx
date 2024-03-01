import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`} id='clients'>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((x)=>(
         <div key={x.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mx-1`}>
            <img src={x.logo}  alt="client"  className='sm:w-[192px] w-[100px] object-contain glowUp cursor-pointer'/>
         </div>
      ))}
      </div>
    </section>
  )
}

export default Clients