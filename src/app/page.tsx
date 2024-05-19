import { Header, About, Skills, Projects, Contact, NowPlaying, Experience } from "@/components"

export default function Home() {
  return (
    <>
      
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />

      <div className="flex justify-center">
        {/* <NowPlaying /> */}
      </div>
    </>
  );
}
