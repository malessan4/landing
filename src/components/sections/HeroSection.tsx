'use client';
import { motion } from 'framer-motion';
import Button from "@/components/Button";
import heroImage from '@/assets/images/heroimage.png';

export default function HeroSection() {
  return (
    <>
      {/* Espaciador para el navbar fijo */}
      <div className="w-full h-20" />

      {/* Imagen de fondo animada con zoom-out */}
      <motion.section
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="
          relative flex flex-col justify-center text-left w-full px-6
          min-h-[calc(100vh-80px)]
        "
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-white ml-4 md:ml-[10%] lg:ml-[15%] space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Bienvenidos a FolkodeGroup
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 40 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            Creamos soluciones digitales modernas y escalables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 60 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Button
              size="lg"
              className="px-10 py-6 text-2xl md:px-16 md:py-8 md:text-3xl"
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
