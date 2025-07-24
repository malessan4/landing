'use client';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {

  id: string;
  avatar: string;
  name: string;
  role: string;
  headline: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
    mode: 'dark' | 'light';
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    avatar: "/celi.jpg",
    name: "Celi",
    role: "Fullstack Developer",
    headline: "Innovación constante",
    description: "Construyendo soluciones con pasión por la tecnología.",
    technologies: ['React', 'Node.js', 'Tailwind', 'PostgreSQL'],
    links: {
      github: 'https://github.com/leo',
      linkedin: 'https://linkedin.com/in/leo',
      instagram: 'https://instagram.com/leo',
    },
     mode: "dark",
  },
  {

    id: "member-2",
    avatar: "https://i.pravatar.cc/150?img=60",
    name: "María",
    role: "UX/UI Designer",
    headline: "Diseño centrado",
    description: "Creando experiencias de usuario memorables y funcionales.",
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    links: {
      github: 'https://github.com/maria',
      linkedin: 'https://linkedin.com/in/maria',
    },
    mode: "dark",
  },
  {
    
    id: "member-3", 
    avatar: "https://i.pravatar.cc/150?img=45",
    name: "Carlos",
    role: "DevOps Engineer",
    headline: "Infraestructura sólida",
    description: "Automatizando procesos para despliegues eficientes y seguros.",
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    links: {
      github: 'https://github.com/carlos',
      linkedin: 'https://linkedin.com/in/carlos',
    },
    mode: "dark",
  },
  // Puedes agregar más miembros según necesites
];

export default function TeamMemberSection() {
  return (
   <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-black transition-colors">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white">
          Nuestro Equipo de desarrolladores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member) => (
           <div key={member.id} className="flex justify-center"> 
            <TeamMemberCard 
            {...member} 

            />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}