import Work from "../Misc/Work";
function Experience() {

    const dummy = {
        position: "Frontend Developer Intern", company: "Mondy India", location: "Remote", type: "Internship", duration: "Jan 2024 - Feb 2024"
    }
    return (<div className="my-16 px-3 font-sen text-white" id="experience">
        <p className="text-3xl font-bold text-blue-500">Work Experience</p>

        <div className="text-md  flex flex-col font-medium md:text-xl custom:text-lg">
            <Work {...dummy} />
            <Work {...dummy} />

        </div>
    </div>);
}

export default Experience;