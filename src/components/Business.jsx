 
import { features } from '../constants'
import Button from './Button'
import styles,{ layout } from '../style'

const FeatureCard=({ icon, title, content, index })=>{
  return(
     <div className={`flex p-6 rounded-[20px] flex-row  ${index !== features.length-1 ? 'mb-6' : 'mb-0' } feature-card  `}>
        <div className={`w-[64px] h-[64px]rounded-full  ${styles.flexCenter}`} >
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain feature-img'/>
        </div>

        <div className='flex-1 flex flex-col ml-3'>
              <h1 className='font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1'>{title}</h1>
              <p className='font-poppins text-dimWhite font-normal text-[16px] leading-[23px] mb-1'>{content}</p>
        </div>
     </div>
  )
}

const Business = () => {
  return (
    <section className={layout.section} id='features'>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>You do the business, <br  className='sm:block hidden' /> we’ll handle the money.</h2>
             <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
             <Button styles='mt-10' />
        </div>
         
         <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature,index)=>(
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
         </div>
        
    </section>
  )
}

export default Business