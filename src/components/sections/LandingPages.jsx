import { Link } from 'react-router'
import ImagenQueen from '../../assets/images/mini_queen.png'
import { LANDINGPAGES } from '../../data/data'
import { getIcon, Arrow } from '../../data/icons'

function LandingPages() {
    return (
        <section className='contenedor py-[100px]'>
            <div className='w-[227px] h-auto mx-auto'>
                <img src={ImagenQueen} alt='queen' className='w-full h-auto' />
            </div>
            <h2 className='text-[32px] font-tw-cen-mt uppercase text-black text-center mx-auto mt-5'>landingpages</h2>
            <p className='text-sm font-inter text-black mt-2 leading-[200%] text-center mb-10'><strong>Dicen que la práctica hace al maestro;</strong> aquí puedes ver la evolución de mi trabajo a través de cada landing page que he construido.</p>
            <div className='grid gap-5'>
                {LANDINGPAGES.map((landingpage) => (
                    <div key={landingpage.id} className='relative rounded-[6px] border border-gris-secundario min-h-24 px-5 py-6'>
                        
                        <div className='flex gap-2'>{landingpage.tecnologias.map((tecNombre) => {
                            const Icon = getIcon(tecNombre);
                            return (
                                <Icon width={20} height={20} key={tecNombre} />
                            )
                        })} </div>
                        <h4 className='text-base font-black font-inter text-black mt-2'>{landingpage.nombre}</h4>
                        <p className='text-xs font-inter text-gris-primario mt-2 leading-[180%] pr-2.5'>{landingpage.descripcion}</p>
                        
                        <Arrow width={15} height={15} className='absolute bottom-3 right-3' />
                        
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-10'>
                <a href='/landingpages' className='text-[13px] text-black border-b border-black pb-2 font-inter'>Mira el listado completo aqui</a>
            </div>
        </section>
    )
}

export default LandingPages