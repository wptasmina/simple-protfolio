
import { About } from "@/components/about"

import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Skills } from "../components/skills"

export default function Home() {
  return (
   <main className="min-h-screen bg-background">
      <Navigation />
     <div className="mt-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
     </div>
    </main>
  );
}
