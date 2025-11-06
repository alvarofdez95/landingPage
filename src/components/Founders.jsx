import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: "CEO - El Estratega de Negocio",
      role: "Chief Executive Officer",
      description: "Experto en optimizar procesos y alinear la tecnología con el ROI real de la PYME.",
      image: "Professional CEO in modern office analyzing business metrics and ROI dashboards"
    },
    {
      name: "CTO - El Arquitecto de IA",
      role: "Chief Technology Officer",
      description: "Experto en LLMs, Flowise y en construir arquitecturas robustas (SaaS y On-Premise).",
      image: "Expert CTO working with AI architecture and LLM models on multiple screens"
    },
    {
      name: "COO - El Experto en Operaciones",
      role: "Chief Operating Officer",
      description: "Conoce el dolor real de la administración, las finanzas (Verifactu) y el soporte.",
      image: "COO managing operations and financial systems in professional setting"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creado por un equipo de expertos,<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              con un enfoque práctico y resultados probados.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Somos 3 socios que unimos la visión de negocio con la profundidad técnica. Equipo experto en IA con experiencia real en PYMES.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={`${founder.role} - Fundador de la startup`}
                   src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                
                <div className="p-6 -mt-20 relative z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
                      {founder.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">{founder.description}</p>
                  
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Ver perfil</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl px-8 py-6">
            <p className="text-lg text-green-300 font-medium">
              ✅ Equipo experto en IA con experiencia real en PYMES.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;