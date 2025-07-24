"use client";
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiGraphql, SiKotlin,
  SiHtml5, SiDjango, SiFlask, SiOpenai, SiPostgresql, SiJavascript,
  SiVuetify, SiSqlite, SiFastapi, SiNestjs, SiMysql, SiAstro, SiAngular,
  SiGnubash, SiC, SiCplusplus, SiPython, SiCss3, SiTypescript, SiMongodb
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaGlobe, FaAndroid, FaApple, FaRegClock, FaTv, FaRocket } from "react-icons/fa";

const technologyCategories = [
  {
    icon: FaGlobe,
    name: "Website",
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiCss3, name: "CSS3" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiAstro, name: "Astro" },
      { icon: SiAngular, name: "Angular" },
      { icon: SiVuetify, name: "Vuetify" }
    ]
  },
  {
    icon: FaAndroid,
    name: "Android",
    technologies: [
      { icon: SiKotlin, name: "Kotlin" },
      { icon: SiPython, name: "Python" },
      { icon: SiJava, name: "Java" }
    ]
  },
  {
    icon: FaApple,
    name: "iOS",
    technologies: [
      { icon: SiSwift, name: "Swift" },
      { icon: SiPython, name: "Python" }
    ]
  },
  {
    icon: FaRegClock,
    name: "Watch",
    technologies: [
      { icon: SiSwift, name: "Swift" },
      { icon: SiKotlin, name: "Kotlin" }
    ]
  },
  {
    icon: FaTv,
    name: "TV",
    technologies: [
      { icon: SiAndroid, name: "Android TV" },
      { icon: SiApple, name: "tvOS" }
    ]
  },
  {
    icon: FaRocket,
    name: "IA",
    technologies: [
      { icon: SiPython, name: "Python" },
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: SiPytorch, name: "PyTorch" },
      { icon: SiOpenai, name: "OpenAI" }
    ]
  }
];

const backendTechnologies = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiDjango, name: "Django" },
  { icon: SiFlask, name: "Flask" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiGraphql, name: "GraphQL" }
];

const databaseTechnologies = [
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiSqlite, name: "SQLite" }
];

const otherTechnologies = [
  { icon: SiGnubash, name: "Bash" },
  { icon: VscTerminalPowershell, name: "PowerShell" },
  { icon: SiC, name: "C" },
  { icon: SiCplusplus, name: "C++" }
];

export default function Tecnologias() {
  return (
    <section className="py-16 bg-tertiary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Tecnologías en las que Trabajamos
        </h2>

        {/* Categorías principales */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {technologyCategories.map((category, index) => (
            <TechnologyCard 
              key={index}
              icon={category.icon}
              name={category.name}
              technologies={category.technologies}
            />
          ))}
        </div>

        {/* Tecnologías adicionales */}
        <div className="space-y-12">
          <TechnologySection 
            title="Backend Technologies"
            technologies={backendTechnologies}
          />
          <TechnologySection 
            title="Database Systems"
            technologies={databaseTechnologies}
          />
          <TechnologySection 
            title="Other Technologies"
            technologies={otherTechnologies}
          />
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ icon: Icon, name, technologies }) {
  return (
    <div className="group relative flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
      <div className="mb-4 p-3 bg-white/20 rounded-full">
        <Icon className="text-4xl text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-2">
          {technologies.map((tech, i) => (
            <div key={i} className="flex items-center space-x-2">
              <tech.icon className="text-lg" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechnologySection({ title, technologies }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
            <tech.icon className="text-2xl" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
