import ImageKurumi02 from '../../assets/images/kurumi_02.png'
import { SKILLS } from '../../data/data'
import { getIcon } from '../../data/icons'
import styles from '../../styles/styles.module.css'

function Skills() {
  return (
     <section className='bg-gris-fondo w-full h-auto py-[40px] relative overflow-hidden'>
          <div className="contenedor min-h-[380px] flex">
            
           
              <div className='w-3/4 min-w-[216px] pt-[30px] relative z-10'>
                <h2 className='text-[32px] font-tw-cen-mt uppercase text-black text-left font-bold'>TECNOLOGIAS</h2>
                <p className='font-inter text-sm mt-2.5 mb-4 leading-[200%]'>Estas son las herramientas y tecnologías que utilizo en mi dia a dia.</p>
                <div className='flex flex-wrap gap-2'>
                    {SKILLS.map((skill) => {
                        const Icon = getIcon(skill.icon)
                        return (
                            <div key={skill.name} className='flex items-center bg-white border border-gris-secundario py-2.5 px-2 gap-2 rounded-sm' >
                                <Icon className='w-5 h-5' /><strong className='text-black font-inter text-xs'>{skill.name}</strong>
                                </div>
                        )
                    })}
                </div>
              </div>
    
           
            <div className={`w-1/4 relative min-h-[270px] flex shrink-0 ${styles.kurumiSkills}`}>
              <img src={ImageKurumi02} alt='imagen kurumi' />
            </div>
          </div>
        </section>
  )
}

export default Skills