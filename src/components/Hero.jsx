import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleCTA = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt. 🚀"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
      
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.2,
        duration: 0.6
      }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">AGENTIFY S.L.</span>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.7
      }} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Basta de tareas manuales.<br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Dale a tu equipo "Empleados Digitales"
          </span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5,
        duration: 0.7
      }} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Construimos Agentes de IA que ejecutan tus procesos (como facturación o cobros) 
          y potencian tus conversaciones (con chatbots que sí entienden).
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7,
        duration: 0.7
      }} className="flex flex-col items-center gap-4">
          <Button onClick={handleCTA} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
            Agendar mi Diagnóstico Gratuito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Plazas limitadas para nuestro "Programa Charter"
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="mt-20">
          <img className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-slate-700/50" alt="Dashboard de automatización con IA mostrando agentes digitales trabajando" src="https://horizons-cdn.hostinger.com/99228888-8b89-4fbe-8911-9681e729ef82/gemini_generated_image_3nbtw13nbtw13nbt-u88tU.jpg" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;