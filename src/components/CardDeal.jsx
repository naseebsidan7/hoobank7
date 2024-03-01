import React from 'react'
import styles, { layout } from '../style'
import  Button  from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
     <section className={layout.section}>
          <div className={layout.sectionInfo}>
               <h1 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h1>
               <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsum veritatis aspernatur vero iste. Aliquid in autem facilis culpa dolor iusto deleniti fugit eius, rerum nostrum dicta exercitationem, minus odit!</p>
               <Button styles='mt-10' />
          </div>
          
          <div className={layout.sectionImg}>
               <img src={card} alt="card" className='w-[100%] h-[100%]' />
          </div>
     </section>
  )
}

export default CardDeal