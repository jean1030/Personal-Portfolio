import { Fragment } from "react/jsx-runtime";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({ items, className } : { className: string, items: { name: string; iconType: React.ComponentType<{ className?: string }> }[] }) => {
    return(
        <div className={`${className}`}>
            <div className={`grid grid-cols-2 md:grid-cols-4 py-0.5 gap-6`}>
                {[...new Array(1)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map((tool, index) => (
                            <div key={index} className='inline-flex items-center gap-4 py-2 px-3 outline outline-2  outline-white/10 rounded-lg'>
                                <TechIcon component={tool.iconType}/>
                                <span className='font-semibold sm:text-base text-sm'>{tool.name}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}