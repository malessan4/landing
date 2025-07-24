import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import Tecnologias from "@/components/Tecnologias";
import QueHacemosSection from "@/components/QueHacemosSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import Unirte from "@/components/Unirte";
import TeamMemberSection from "@/components/TeamMembersSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-start">
      {/* ✅ Hero Section solo una vez */}
      <HeroSection />
      
      <div className="container mx-auto px-6 py-24">
        {/* ✅ Secciones principales */}
        <AboutSection />
        <QueHacemosSection />
        <TeamMemberSection />
        <Unirte />
        <Tecnologias />
        
        {/* ✅ Sección de pruebas de UI - mejor organizada */}
        <section className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Componentes de UI</h2>
          
          {/* Input y Textarea */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Input y Textarea</h3>
            <div className="space-y-4">
              <Input placeholder="Escribe algo aquí..." />
              <Textarea placeholder="Tu mensaje aquí..." />
            </div>
          </div>
          
          {/* Botones */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Botones</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Button className="btn-size-xs cursor-pointer">XS</Button>
              <Button className="btn-size-sm cursor-pointer">SM</Button>
              <Button className="btn-size-md cursor-pointer">MD</Button>
              <Button className="btn-size-lg cursor-pointer">LG</Button>
              <Button className="btn-size-xl cursor-pointer">XL</Button>
              <Button className="btn-size-2xl cursor-pointer">2XL</Button>
              <Button className="btn-size-3xl cursor-pointer">3XL</Button>
              <Button className="btn-size-4xl cursor-pointer">4XL</Button>
              <Button className="btn-size-5xl cursor-pointer">5XL</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

