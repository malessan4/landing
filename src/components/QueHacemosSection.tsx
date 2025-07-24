'use client'
import ActividadCard from './ActividadCard';

interface Actividad {
  id: string; // Nuevo campo para key única
  mode: 'dark' | 'light';
  iconClass: string;
  title: string;
  items: string[];
}

const actividades: Actividad[] = [
  {
    id: "web-dev",
    mode: "dark",
    iconClass: "bi bi-code-slash",
    title: "Desarrollo Web Profesional",
    items: [
      "Aplicaciones web a medida con tecnologias modernas (React, Vue.js, Dango)",
      "Landing pages y sitios corporativos optimizados para SEO y conversión.",
      "E-commerce integrado (Tiendas online, pasarelas de pago, gestión de inventario)",
    ],
  },
  {
    id: "auto-product",
    mode: "light",
    iconClass: "bi bi-phone", 
    title: "Automatización y Productividad",
    items: [
      "Sistemas CRM/ERP adaptados a tus procesos (Gestion de Relaciones con Clientes/Planificación de Recursos Empresariales).",
      "Integración de APIs y flujos de trabajo automatizados.",
      "Herramientas internas para optimizar operaciones",
    ],
  },
  {
    id: "mobile-apps",
    mode: "dark",
    iconClass: "bi bi-phone",
    title: "Mobile Apps Híbridas",
    items: [
      "Aplicaciones multiplataforma (iOS/Android) con Flutter o React Native",
      "Prototipado rápido y diseño centrado en usuario",
    ],
  },
    {
    id: "consu-it",
    mode: "light",
    iconClass: "bi bi-phone",
    title: "Consultoría IT",
    items: [
      "Auditoria técnica y modernización de legacy systems",
      "Migración a la nube (AWS, Google Cloud, Azure.",
    ],
  },
    {
    id: "soft-social",
    mode: "dark",
    iconClass: "bi bi-phone",
    title: "Software para Impacto Social",
    items: [
      "Soluciones con propósito para ONGs y emprendimientos sostenibles.",
      "Plataformas educativas y de gestión comunitaria.",
    ],
  },
];

export default function QueHacemosSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        ¿Qué hacemos?
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {actividades.map((actividad) => (
          <ActividadCard key={actividad.id} {...actividad} />
        ))}
      </div>
    </section>
  );
}