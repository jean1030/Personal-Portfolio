import Phone from '../assets/phone'
import Folder from '../assets/folder'
import StarIcon from '../assets/starIcon'
import { HeroOrbit } from '../components/heroOrbit'
import SparkleIcon from '../assets/sparkleIcon'
import SnowFlake from '../assets/snowflake'
import Orb from '../components/orb'
import TextType from '../assets/textType'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (!target) return

    const headerOffset = 110
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  return (
    <div id='home' className='scroll-mt-28 py-28 md:py-44 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='relative flex flex-col items-center justify-center'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Orb />
          
          {/*<div className='size-[620px] hero-ring'></div>
          <div className='size-[820px] hero-ring'></div>
          <div className='size-[1020px] hero-ring'></div>
          <div className='size-[1220px] hero-ring'></div>*/}

          <HeroOrbit size={800} rotation={-72}>
            <StarIcon className='size-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20}>
            <StarIcon className='size-12' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98}>
            <StarIcon className='size-8' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={430} rotation={-14}>
            <SparkleIcon className='size-8 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={900} rotation={-30}>
            <SparkleIcon className='size-12' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-50}>
            <SparkleIcon className='size-8 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}>
            <SparkleIcon className='size-5 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className='size-10 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className='size-14 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85}>
            <SnowFlake className='size-3' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41}>
            <SnowFlake className='size-5' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={700} rotation={-5}>
            <SnowFlake className='size-6 opacity-20' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={800} rotation={125}>
            <SnowFlake className='size-6' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={990} rotation={110}>
            <SparkleIcon className='size-14 opacity-10' fill='#6DE4B5'/>
          </HeroOrbit>
          <HeroOrbit size={860} rotation={155}>
            <StarIcon className='size-12' fill='#6DE4B5'/>
          </HeroOrbit>
        </div>

        {/* Content wrapper - positioned on top of the Orb */}
        <div className='relative z-10 container mx-auto'>
          <div className='flex flex-col items-center'>
              <div className='bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg'>
                  <div className='bg-green-500 size-2.5 rounded-full relative'><div className='bg-green-500 absolute inset-0 animate-ping-large rounded-full'></div></div>
                  <div className="text-sm font-medium">Available for new opportunities!</div>
              </div>
          </div>
          
          <div className='max-w-lg mx-auto'>
              <h1 className="font-[calistoga] text-3xl md:text-5xl text-center mt-8 tracking-wide">Hi! I'm Jennifer Antonette Tiongson</h1>
              <TextType 
                text={["Web Developer", "Mobile App Developer", "Full-stack Developer"]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor
                initialDelay={100}
                cursorCharacter="|"
                cursorClassName='text-emerald-300'
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                className='mt-4 block w-full text-center bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold text-lg md:text-xl'
              />
              <p className="mt-4 text-center text-white/60">I specialize in transforming ideas into functional digital experiences across web and mobile.</p>
          </div>
      
          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
              <button
                type='button'
                onClick={() => scrollToSection('projects')}
                className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:text-white transition duration-300'
              >
                <Folder stroke='white' width={20} height={20}/><span className='font-semibold'>Explore My Work</span>
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('contact')}
                className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:text-white transition duration-300'
              >
                <Phone stroke='white' width={20} height={20}/><span className='font-semibold'>Let's Connect</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}
