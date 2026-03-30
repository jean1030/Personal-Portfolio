export const TechIcon = ({ component} : { component: React.ElementType }) => {
    const IconComponent = component;
    return(
    <>
        <IconComponent className='size-10 fill-[url(#tech-icon-gradient)]'/>
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient">
                <stop offset="0%" stop-color="rgb(110 231 183)" />
                <stop offset="100%" stop-color="rgb(56 189 248)" />
            </linearGradient>
        </svg>
    </>
    )
}