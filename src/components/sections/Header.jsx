import ImagenClock from '../../assets/images/clock.png'
import ImagenProfile from '../../assets/images/profile.png'
import styles from '../../styles/styles.module.css'

function Header() {
  
  return (
    <section className='contenedor pt-5'>
      <div className='relative w-auto min-h-[300px]'>
        <img src={ImagenClock} className={`${styles.clock} opacity-20 w-[282px] h-auto`} alt='imagen reloj' />
        <img src={ImagenProfile} className={`${styles.profile} absolute w-[80px] h-[80px] rounded-full object-cover mx-auto top-[100px]`} />
      </div>
      <div className='relative -top-[100px]'>
         <h1 className='text-center text-4xl font-tw-cen-mt'><span className='uppercase'>cesar</span><span className='font-bold'>.jsx</span></h1>
         <p className='text-center text-sm mt-[50px] leading-[200%] font-inter'>Desarrollo interfaces frontend y disfruto haciendo landing pages con <strong className='font-bold'>Next.js, React y TailwindCSS.</strong> <span className='text-gris-primario'>Mi prioridad es crear sitios web actuales, rápidos y que se sientan bien al usarlos.</span></p>
      </div>
    </section>
  )
}

export default Header