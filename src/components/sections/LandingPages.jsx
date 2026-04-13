import ImagenQueen from '../../assets/images/mini_queen.png'
import { LANDINGPAGES } from '../../data/data'
import { getIcon } from '../../data/icons'

function LandingPages() {
    return (
        <section className="contenedor py-[100px]">
            <div className='w-[227px] h-auto mx-auto'>
                <img src={ImagenQueen} alt='queen' className='w-full h-auto' />
            </div>
            <h2 className='text-[32px] font-tw-cen-mt uppercase text-black text-center mx-auto mt-5'>landingpages</h2>
            <p className='text-sm font-inter text-black mt-2 leading-[200%] text-center'><strong>Dicen que la práctica hace al maestro;</strong> aquí puedes ver la evolución de mi trabajo a través de cada landing page que he construido.</p>
            <div className='grid gap-5'>
                {LANDINGPAGES.map((landingpage) => (
                    <div key={landingpage.id} className='rounded-[6px] border border-gris-secundario flex justify-between'>
                        <h4 className='text-sm font-inter text-black mt-2'>{landingpage.nombre}</h4>
                        <div className='flex'>{landingpage.tecnologias.map((tecNombre) => {
                            const Icon = getIcon(tecNombre);
                            return (
                                <Icon width={30} height={30} key={tecNombre} />
                            )

                        })} </div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LandingPages