import ImageCat from '../../assets/images/cat.png'
import { PaperPlan, DownloadIcon, CopyIcon, LinkIcon } from '../../data/icons'
import styles from '../../styles/styles.module.css'
function Contact() {
    return (
        <section className='w-full h-auto py-[50px]'>
            <div className='contenedor'>
                <h2 className='font-tw-cen-mt text-[32px] mb-8 uppercase text-center text-black'>Contacto</h2>
                <p className={`${styles.correoReverse} text-center font-inter`}>
                    moc.liamg@zusagprasec
                </p>
                <div className='grid gap-3 mt-8 font-inter'>
                    <div className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3'><span>Enviar mensaje</span> <PaperPlan className='size-6' /></div>
                    <div className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3'><span>Copiar correo</span><CopyIcon className='size-6' /></div>
                    <div className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3'><span>Compartir</span><LinkIcon className='size-6' /></div>
                    <div className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3'><span>Descargar Información</span><DownloadIcon className='size-6' /></div>
                </div>

            </div>
        </section>
    )
}

export default Contact