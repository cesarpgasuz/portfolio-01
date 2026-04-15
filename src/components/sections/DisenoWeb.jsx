import ImageKurumiWall from '../../assets/images/kurumi_wall_02.png'

function DisenoWeb() {
  return (
    <section className='w-full h-auto py-[50px]'>
        <div className='contenedor'>
            <h2 className='text-[32px] font-tw-cen-mt uppercase text-black text-center'>Diseño Web</h2>
            <p className='text-sm font-inter text-black mt-2 leading-[200%] text-center'>Aquí puedes ver una colección de todos los diseños web que he realizado y que poco a poco he llevado a código.</p>
            <div className='w-full min-w-[283px] h-auto mx-auto mt-10 relative'>
                <img src={ImageKurumiWall} alt='kurumi wall' className='w-full h-auto rounded-md' />
                <div className='absolute inset-0 bg-linear-to-t from-[#3469AE] to-[#000000] opacity-[0.18] pointer-events-none'></div>
                <h4 className='absolute left-1/2 -translate-x-1/2 bottom-9 text-2xl text-white z-10'>Behance</h4>
            </div>
        
        </div>
        </section>
  )
}

export default DisenoWeb