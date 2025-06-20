import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

export function About() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Success Rate" },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            About Me
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Crafting digital experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              passion & precision
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a full-stack developer who believes great software comes from understanding both the technical
            challenges and human needs behind every project.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column - Story */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  My journey began with a simple curiosity about how websites work. That curiosity evolved into a deep
                  passion for creating digital solutions that make people's lives easier and businesses more successful.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Today, I specialize in building scalable web applications using modern technologies. I've worked with
                  startups launching their first product and established companies modernizing their tech stack.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community through writing and mentoring.
                </p>
              </div>
            </Card>

            {/* Approach Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
                <p className="text-muted-foreground">
                  Every project starts with understanding the user's needs and creating solutions that provide real
                  value.
                </p>
              </Card>

              <Card className="p-6 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Architecture</h3>
                <p className="text-muted-foreground">
                  I write maintainable, scalable code that stands the test of time and grows with your business.
                </p>
              </Card>
            </div>
          </div>

          {/* Right Column - Stats & CTA */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-8 border-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <h3 className="text-2xl font-bold mb-8">By the numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-0 bg-black text-white">
              <h3 className="text-xl font-semibold mb-4">Let's work together</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-black hover:bg-gray-100">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Philosophy */}
        <Card className="p-12 border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">My Philosophy</h3>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              "Great software isn't just about clean code—it's about understanding the problem deeply, designing
              thoughtful solutions, and delivering experiences that users love."
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View my work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
