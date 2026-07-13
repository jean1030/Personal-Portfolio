import SparkleIcon from "../assets/sparkleIcon";
import StarIcon from "../assets/starIcon";
import SnowFlake from "../assets/snowflake";
import { HeroOrbit } from "./heroOrbit";
import Particles from "./particles";

export default function Bg() {
    return (
        <div className='fixed inset-0 h-full w-full pointer-events-none'>
            <HeroOrbit size={800} rotation={-72}>
                <StarIcon className='size-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={550} rotation={20}>
                <StarIcon className='size-12' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={590} rotation={98}>
                <StarIcon className='size-8' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={430} rotation={-14}>
                <SparkleIcon className='size-8 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={900} rotation={-30}>
                <SparkleIcon className='size-12' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={800} rotation={-50}>
                <SparkleIcon className='size-8 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={440} rotation={79}>
                <SparkleIcon className='size-5 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={530} rotation={178}>
                <SparkleIcon className='size-10 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={710} rotation={144}>
                <SparkleIcon className='size-14 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={720} rotation={85}>
                <SnowFlake className='size-3' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={520} rotation={-41}>
                <SnowFlake className='size-5' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={700} rotation={-5}>
                <SnowFlake className='size-6 opacity-20' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={800} rotation={125}>
                <SnowFlake className='size-6' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={990} rotation={110}>
                <SparkleIcon className='size-14 opacity-10' fill='#EFBFD5'/>
            </HeroOrbit>
            <HeroOrbit size={860} rotation={155}>
                <StarIcon className='size-12' fill='#EFBFD5'/>
            </HeroOrbit>

            <Particles
                particleColors={["#9D61FD"]}
                particleCount={200}
                particleSpread={20}
                speed={0.1}
                particleBaseSize={120}
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className='absolute inset-0'
            />
        </div>
    )
}