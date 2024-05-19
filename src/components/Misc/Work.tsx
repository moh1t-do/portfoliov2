import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Work({ position, company, location, type, duration }: any) {
    return (<article className="pt-8 pb-2 border-b-[0.1px] border-gray-500 text-slate-300">
        <div className="flex justify-between items-center">
            <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        </div>
        <div className="flex justify-between pt-2">
            <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex items-center pr-5">
                    <FaBuilding size="16px" />
                    <p className="text-content text-xs md:text-sm font-light pl-1">{company}</p>
                </div>
                <div className="flex items-center">
                    <FaLocationDot size="16px" />
                    <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
                </div>
            </div>
            <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
        </div>
    </article>);
}

export default Work;