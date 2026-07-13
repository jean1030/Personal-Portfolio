export const TechIcon = ({ component} : { component: React.ComponentType<{ className?: string }> }) => {
    const IconComponent = component;
    return(
    <>
        <IconComponent className='size-7 sm:size-10 fill-[url(#tech-icon-gradient)]'/>
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient">
                <stop offset="0%" stop-color="rgb(239 191 213)" />
                <stop offset="100%" stop-color="rgb(157 97 253)" />
            </linearGradient>
        </svg>
    </>
    )
}