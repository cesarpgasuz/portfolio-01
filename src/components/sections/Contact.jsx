import { useState } from 'react'
import { PaperPlan, DownloadIcon, CopyIcon, LinkIcon } from '../../data/icons'
import ImageCat from '../../assets/images/cat.png'
import styles from '../../styles/styles.module.css'

const CURRENT_YEAR = new Date().getFullYear();

function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "cesarpgasuz@gmail.com";
    const webUrl = "https://cesarpgasuz.dev";

    // 1. Enviar Mensaje (Abre el gestor de correo)
    const handleSendMessage = () => {
        window.location.href = `mailto:${email}?subject=Contacto desde tu Portfolio`;
    };

    // 2. Copiar Correo al portapapeles
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset del mensaje tras 2s
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    // 3. Compartir (Usa el menú nativo del celular o PC)
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Portafolio de Cesar Garcia',
                    text: 'Echa un vistazo al portafolio de este Desarrollador Frontend.',
                    url: webUrl,
                });
            } catch (err) {
                console.log('Error al compartir:', err);
            }
        } else {
            // Fallback si el navegador no soporta Share API (ej. algunos navegadores de escritorio)
            alert("Copiado al portapapeles para compartir");
            navigator.clipboard.writeText(webUrl);
        }
    };

    // 4. Descargar vCard (La que ya teníamos)
    const handleDownloadVCard = () => {
        const vCardContent = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "FN:Cesar Pablo Garcia Suarez",
            "TITLE:Frontend Developer",
            "TEL;TYPE=CELL:4191389032",
            `EMAIL;TYPE=INTERNET:${email}`,
            `URL:${webUrl}`,
            "END:VCARD"
        ].join("\n");

        const blob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Contacto_Cesar_Garcia.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <section className='w-full h-auto py-[50px]'>
            <div className='contenedor'>
                <h2 className='font-tw-cen-mt text-[32px] mb-8 uppercase text-center text-black'>Contacto</h2>
                <p className={`${styles.correoReverse} text-center font-inter`}>
                    moc.liamg@zusagprasec
                </p>
                
                <div className='grid gap-3 mt-8 font-inter'>
                    {/* ENVIAR MENSAJE */}
                    <div 
                        onClick={handleSendMessage}
                        className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3 cursor-pointer hover:bg-gray-200 transition-all active:scale-[0.98]'
                    >
                        <span>Enviar mensaje</span> 
                        <PaperPlan className='size-6' />
                    </div>

                    {/* COPIAR CORREO */}
                    <div 
                        onClick={handleCopyEmail}
                        className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3 cursor-pointer hover:bg-gray-200 transition-all active:scale-[0.98]'
                    >
                        <span>{copied ? '¡Copiado!' : 'Copiar correo'}</span>
                        <CopyIcon className='size-6' />
                    </div>

                    {/* COMPARTIR */}
                    <div 
                        onClick={handleShare}
                        className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3 cursor-pointer hover:bg-gray-200 transition-all active:scale-[0.98]'
                    >
                        <span>Compartir</span>
                        <LinkIcon className='size-6' />
                    </div>

                    {/* DESCARGAR INFORMACIÓN */}
                    <div 
                        onClick={handleDownloadVCard}
                        className='bg-gris-secundario text-xs rounded-md flex justify-between items-center px-3.5 py-3 cursor-pointer hover:bg-gray-200 transition-all active:scale-[0.98]'
                    >
                        <span>Descargar Información</span>
                        <DownloadIcon className='size-6' />
                    </div>
                </div>

                <div className='pt-[80px]'>
                    <img src={ImageCat} alt='imagen de una gato' className='size-[83px] mx-auto' />
                    <p className={`text-center text-sm text-black mt-6 `}>Copyright © {CURRENT_YEAR} - cesarpgasuz.dev</p>
                    <p className='text-center text-sm text-gris-primario mt-2'>Hecho en Guanajuato, México</p>
                </div>



            </div>
        </section>
    );
}

export default Contact;