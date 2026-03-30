import Phone from '../assets/phone'
import { CONTACT_MAILTO } from '../constants/contact'

export default function Contact() {
  return (
    <section id='contact' className='scroll-mt-28 min-h-[50vh] py-16 pt-12 lg:min-h-[55vh] lg:py-24 lg:pt-20 flex items-center'>
      <div className='container mx-auto'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between'>
            <div>
              <h2 className='font-[calistoga] text-2xl md:text-3xl'>Let’s Build Something Together</h2>
              <p className='text-sm md:text-base mt-2'>Whether it’s a project, opportunity, or collaboration, I’m just one message away.</p>
            </div>
          
            <a
              href={CONTACT_MAILTO}
              className='hover:bg-gray-700 hover:border-gray-700 hover:text-white transition duration-300 inline-flex items-center gap-2 border border-gray-900 px-6 h-12 bg-gray-900 rounded-xl text-white'
            >
              <Phone stroke='white' width={20} height={20}/><span className='font-semibold'>Let's Connect</span>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  )
}
