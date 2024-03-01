import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import  FeedbackCard from '../components/FeedbackCard'

const Testimonials = () => {
  return (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute blue__gradient w-[60%] h-[60%] z-[0] -right-[50%] rounded-full'/>

      <div className="w-full flex justify-between items-center
         md:flex-row  flex-col sm:mb-18 
         mb-6 relative z-[1]">
          <h1 className={styles.heading2}>
          What people are <br className='sm:block hidden' /> saying about us
          </h1>
          
          <div className='w-full sm:mt-0 mt-6 '>
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>

       </div>

       <div className='flex flex-wrap
            sm:justify-start justify-center 
            w-full feedback-container relative z-[1] mt-5
                '>
           {feedback.map((card)=>(

                <FeedbackCard key={card.id}   {...card}/>
           
           ))}
       </div>

  </section>
  )
}

export default Testimonials