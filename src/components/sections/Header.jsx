import ImagenClock from '../../assets/images/clock.png'
import ImagenProfile from '../../assets/images/profile.png'
import styles from '../../styles/styles.module.css'

function Header() {
  
  return (
    <section className='contenedor pt-5 bg-yellow-50'>
      <div className='relative w-auto min-h-[300px] bg-blue-300'>
        <img src={ImagenClock} className='mx-auto opacity-20 absolute size-[282px]' alt='imagen reloj' />
        <img src={ImagenProfile} className={`${styles.profile} absolute w-[80px] h-[80px] rounded-full object-cover mx-auto top-[100px]`} />
      </div>
      <div className='relative -top-[100px] bg-pink-200'>
         <h1 className='text-center text-4xl'><span className='uppercase'>cesar</span><span className='font-bold'>.jsx</span></h1>
         <p className='text-center text-sm mt-[50px] leading-[200%]'>Desarrollo interfaces frontend y disfruto haciendo landing pages con Next.js, React y TailwindCSS. Mi prioridad es crear sitios web actuales, rápidos y que se sientan bien al usarlos.</p>
      </div>
    </section>
  )
}

export default Header