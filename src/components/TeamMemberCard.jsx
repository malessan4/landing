'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Card from '@/ui/Card';

function TeamMemberCard({
  avatar,
  name,
  role,
  headline,
  description,
  technologies,
  links,
  mode = 'dark',
}) {
  const isDark = mode === 'dark';

  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-black' : 'text-black';
  const borderColor = isDark ? 'border-[#025159]' : 'border-[#86A869]';
  const highlightColor = isDark ? '#025159' : '#86A869';
  const techBg = isDark ? 'bg-[#B6D3DC] text-[#02414a]'  : 'bg-[#d8e2c3] text-[#4b5734]' ;
  const buttonBg = isDark ? 'bg-[#025159] hover:bg-[#013f49]' : 'bg-[#86A869] hover:bg-[#7a975c]' ;
  const iconColor = isDark ? 'text-black hover:text-[#025159]' : 'text-black hover:text-[#86A869]' ;
  const subtitleOpacity = isDark ? 'text-black opacity-70'  : 'text-black opacity-80' ;
  const descriptionOpacity = isDark ? 'text-black opacity-80' : 'text-black opacity-90' ;

  return (
    <div className="max-w-sm w-full font-['Roboto'] transition-all">
      <Card className={`${bgColor} border-[10px] ${borderColor} ${textColor}`}>
        <div className="flex flex-col items-center text-center">
          <div className={`w-28 h-28 rounded-full border-[4px] ${borderColor} ${bgColor} p-1 mb-6`}>
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h3 className={`text-2xl font-bold ${textColor}`}>{name}</h3>
          <p className={`text-sm ${subtitleOpacity} mt-1 mb-4`}>{role}</p>

          <h4 className="text-5xl font-extrabold mb-2" style={{ color: highlightColor }}>
            {headline}
          </h4>

          <p className={`text-sm ${descriptionOpacity} mb-6 max-w-xs`}>{description}</p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${techBg}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4 mb-6 text-xl">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className={iconColor} />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className={iconColor} />
              </a>
            )}
            {links.instagram && (
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className={iconColor} />
              </a>
            )}
          </div>

          <button
            className={`${buttonBg} text-white font-bold py-2 px-6 rounded-full text-sm transition`}
          >
            VIEW PROFILE
          </button>
        </div>
      </Card>
    </div>
  );
}

export default function TeamMemberCardDemo() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center gap-6 ${mode === 'dark' ? 'bg-neutral-900' : 'bg-gray-100'} transition-all p-6`}>
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Cambiar a modo {mode === 'dark' ? 'claro' : 'oscuro'}
      </button>

      <TeamMemberCard
        avatar="https://i.pravatar.cc/150?img=65"
        name="Leo "
        role="Fullstack Developer"
        headline="Innovación constante"
        description="Construyendo soluciones con pasión por la tecnología."
        technologies={['React', 'Node.js', 'Tailwind', 'PostgreSQL']}
        links={{
          github: 'https://github.com/leo',
          linkedin: 'https://linkedin.com/in/leo',
          instagram: 'https://instagram.com/leo',
        }}
        mode={mode}
      />
    </div>
  );
}
