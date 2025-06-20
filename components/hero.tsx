"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I&apos;m
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">John Doe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Full Stack Developer & UI/UX Designer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, modern
            design, and innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-background text-foreground">
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
