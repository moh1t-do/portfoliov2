import { workProps } from "@/@types/prop.types";
import Work from "../Misc/Work";
function Experience() {

    const workExps: workProps[] = [{
        position: "Frontend Developer Intern", company: "Mondy India", location: "Remote", type: "Internship", weblink: "https://www.mondy.in/", duration: "Jan 2024 - Feb 2024"
    },
    { position: "Backend Developer", company: "Shinnextream", location: "Remote", type: "Freelancing", weblink: "https://www.shinnextream.in/", duration: "May 2023 - June 2023" }]
    return (<div className="my-16 px-3 font-sen text-white" id="experience">
        <p className="text-3xl font-bold text-blue-500">Work Experience</p>

        <div className="text-md  flex flex-col font-medium md:text-xl custom:text-lg">

            {workExps.map((workexp, i) => <Work key={i} {...workexp} />)}

        </div>
    </div>);
}

export default Experience;