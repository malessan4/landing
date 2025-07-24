// Componentes de secciones
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import QueHacemosSection from "@/components/QueHacemosSection";
import Tecnologias from "@/components/Tecnologias";
import ProyClientes from "@/components/ProyectoClientes";
import IconosTecnologias from "@/components/IconosTecnologias";

// Componentes de UI
import Button from "@/components/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";

// Componentes adicionales
import ContactFormSection from "@/components/ContactFormSection";
import ContactCard from "@/components/ContactDatos";
import TeamMemberCard from "@/components/TeamMemberCard";
import Unirte from "@/components/Unirte";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      <HeroSection />
      
      <div className="container mx-auto px-6 py-24 space-y-20">
        <ProyClientes />
        <AboutSection />
        <QueHacemosSection />
        
        <div className="grid gap-12 md:grid-cols-2">
          <TeamMemberCard />
          <Unirte />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactCard />
          <ContactFormSection />
        </div>
        
        <section className="space-y-12">
          <Tecnologias />
          <IconosTecnologias />
        </section>
        
        <UIShowcaseSection />
      </div>
    </main>
  );
}

// Componente para mostrar los componentes de UI
function UIShowcaseSection() {
  return (
    <section 
      className="mt-16 p-8 bg-gray-50 dark:bg-slate-800 rounded-lg transition-colors duration-300"
      aria-labelledby="ui-components-heading"
    >
      <h2 
        id="ui-components-heading"
        className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        Componentes de UI
      </h2>
      
      <div className="space-y-12">
        <InputTextareaShowcase />
        <ButtonsShowcase />
      </div>
    </section>
  );
}

// Componente para mostrar Input y Textarea
function InputTextareaShowcase() {
  return (
    <div>
      <h3 
        className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
        id="input-textarea-heading"
      >
        Input y Textarea
      </h3>
      <div className="space-y-4" aria-labelledby="input-textarea-heading">
        <LabeledInput 
          label="Campo de texto" 
          placeholder="Escribe algo aquí..."
        />
        <LabeledInput
          as="textarea"
          label="Área de texto"
          placeholder="Tu mensaje aquí..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

// Componente para mostrar los botones
function ButtonsShowcase() {
  const buttonSizes = [
    { size: 'xs', variant: 'primary' },
    { size: 'sm', variant: 'primary' },
    { size: 'md', variant: 'primary' },
    { size: 'lg', variant: 'primary' },
    { size: 'xl', variant: 'secondary' },
    { size: '2xl', variant: 'secondary' },
    { size: '3xl', variant: 'accent' },
    { size: '4xl', variant: 'accent' },
    { size: '5xl', variant: 'accent' }
  ];

  return (
    <div>
      <h3 
        className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
        id="buttons-heading"
      >
        Botones
      </h3>
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        aria-labelledby="buttons-heading"
      >
        {buttonSizes.map(({ size, variant }) => (
          <Button
            key={size}
            variant={variant}
            size={size}
            className="transition-all hover:scale-105"
            aria-label={`Botón tamaño ${size.toUpperCase()}`}
          >
            {size.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}

// Componente reutilizable para inputs con label
function LabeledInput({ as = 'input', label, ...props }) {
  const Component = as === 'textarea' ? Textarea : Input;
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-1">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 sr-only"
      >
        {label}
      </label>
      <Component 
        id={inputId}
        {...props}
        className={`w-full ${props.className || ''}`}
        aria-label={label}
      />
    </div>
  );
}