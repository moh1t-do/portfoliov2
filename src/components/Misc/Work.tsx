import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { workProps } from "@/@types/prop.types";

function Work({ position, company, location, type, weblink, duration }: workProps) {
    return (<article className="pt-8 pb-2 border-b-[0.1px] border-gray-500 text-slate-300">
        <div className="flex justify-between items-center">
            <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
            <div className="bg-green-100 text-left text-green-800 text-xs inline-block rounded-3xl px-3 py-1 min-w-20">
                {type}
            </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex items-center pr-5 min-w-40">
                    <FaBuilding size="16px" />
                    <Link className="text-content text-xs md:text-sm font-light pl-1" href={weblink} target="_blank">{company}</Link>
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