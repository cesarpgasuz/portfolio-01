import ImagenKurumi from '../../assets/images/kurumi_01.png'
import styles from '../../styles/styles.module.css'
function Proyects() {

  const proyectos = [
    {
      id: 1,
      nombre: "Directorio Virtual Doctor Mora",
      url: "https://directorio-virtual-doctor-mora.vercel.app/",
    },
    {
      id: 2,
      nombre: "Doctor Mora Travel",
      url: "https://doctor-mora-travel.vercel.app/",
    },
    {
      id: 3,
      nombre: "Invitaciones Digitales",
      url: "https://invitaciones-digitales.vercel.app/",
    }
  ]

  return (
    <section className='bg-rosa-primario w-full h-auto'>
      <div className="contenedor min-h-[270px] w-full flex">
        <div className='relative w-1/2 min-h-[270px] flex shrink-0'>
          <img src={ImagenKurumi} className={`${styles.kurumiProyectos}`} alt='imagen kurumi' />
        </div>
        <div className='w-1/2'>
          <div className='relative -left-[35px] pt-[30px] min-w-[176px]'>
            <h2 className='text-[32px] font-tw-cen-mt uppercase text-black text-right font-bold'>Pro<span className='text-white'>yectos</span></h2>
            <p className='text-xs font-inter italic text-black mt-2 leading-[200%] hidden'>Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
            <div className='flex flex-col gap-4 mt-6'>
              {proyectos.map((proyecto) => (
                <a key={proyecto.id} className="text-[13px] text-white border-b border-black/30 border-dashed pb-2 text-right" href={proyecto.url} target="_blank" rel="noopener noreferrer">{proyecto.nombre}</a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Proyects