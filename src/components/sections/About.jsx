import ImagenMiniKurumi from '../../assets/images/mini_kurumi.png'
import styles from '../../styles/styles.module.css'
function About() {
  return (
    <section className='contenedor pb-[100px]'>
      <img src={ImagenMiniKurumi} className='size-[115px] mx-auto' alt='imagen kurumi' />
      <div className='flex flex-col gap-6 items-center mt-6 font-tw-cen-mt'>
        <a className={`text-[32px] ${styles.slaches}`}><strong className='font-bold'>/</strong><span className='text-black uppercase'>github</span></a>
        <a className={`text-[32px] ${styles.slaches}`}><strong className='font-bold'>/</strong><span className='text-black uppercase'>acerca</span></a>
        <a className={`text-[32px] ${styles.slaches}`}><strong className='font-bold'>/</strong><span className='text-black uppercase'>contacto</span></a>
      </div>
    </section>
  )
}

export default About