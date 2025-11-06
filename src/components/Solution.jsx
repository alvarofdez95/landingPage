import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cog } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: MessageSquare,
      emoji: "💬",
      title: "Chatbots Inteligentes (Conversación)",
      description: "Desplegamos chatbots (basados en LLMs) que sí entienden. Se conectan a tu base de datos para resolver el 70% de las dudas de soporte, cualificar leads, gestionar reservas y se integran con herramientas internas como manuales o softwares específicos 24/7.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cog,
      emoji: "⚙️",
      title: "Agentes de Procesos (Ejecución)",
      description: "Creamos 'Empleados Digitales' que ejecutan tareas. Leen PDFs, entienden emails, contabilizan facturas en tu ERP, gestionan cobros sin intervención humana, nos adaptamos perfectamente a Verifactu y nos integramos con todo tipo de herramientas para mejorar tu productividad.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900/50 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No solo conectamos apps.<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Construimos "Cerebros" Digitales.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nuestras soluciones cubren todo el espectro de la automatización inteligente:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-2xl`} />
              
              <div className="relative bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}>
                    <span className="text-4xl">{solution.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {index === 0 ? "Módulo 1" : "Módulo 2"}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl px-8 py-6">
            <p className="text-lg text-blue-300 font-medium">
              🎯 Somos tu "Socio de IA" integral, no un simple constructor de bots
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;