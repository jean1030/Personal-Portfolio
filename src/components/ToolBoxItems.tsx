import { Fragment } from "react/jsx-runtime";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({ items, className, itemsWrapperClassName } : { className: string, itemsWrapperClassName: string, items: { name: string; iconType: React.ElementType }[] }) => {
    return(
        <div className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
            <div className={`flex flex-none py-0.5 gap-6 pr-6 ${itemsWrapperClassName}`}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map((tool, index) => (
                            <div key={index} className='inline-flex items-center gap-4 py-2 px-3 outline outline-2  outline-white/10 rounded-lg'>
                                <TechIcon component={tool.iconType}/>
                                <span className='font-semibold'>{tool.name}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}