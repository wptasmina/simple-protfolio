import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Framer Motion", level: "Advanced" },
      ],
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable server-side solutions",
      icon: "⚡",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "GraphQL", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Streamlining development and deployment processes",
      icon: "🛠️",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Expert" },
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Linux", level: "Advanced" },
      ],
    },
    {
      title: "Design & UX",
      description: "Crafting intuitive and delightful user experiences",
      icon: "✨",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: "Advanced" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "Prototyping", level: "Advanced" },
        { name: "User Research", level: "Intermediate" },
        { name: "Design Systems", level: "Advanced" },
        { name: "Accessibility", level: "Advanced" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            Skills & Expertise
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              love working with
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of technologies and tools I use to build exceptional digital products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group p-8 border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    <span className="font-medium text-sm">{skill.name}</span>
                    <Badge className={`text-xs ${getLevelColor(skill.level)}`}>{skill.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section - Learning */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <h3 className="text-2xl font-bold mb-4">Currently Exploring</h3>
            <p className="text-muted-foreground mb-6">
              Always learning and staying ahead of the curve with emerging technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "Web3", "Rust", "WebAssembly", "Edge Computing"].map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-white/50 dark:bg-gray-800/50">
                  🌱 {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <p className="text-muted-foreground mb-6">
              Professional certifications and continuous learning achievements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">AWS Certified Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Google Cloud Professional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Meta Frontend Developer</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
