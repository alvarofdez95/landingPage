import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

const Offer = () => {
  const benefits = [
    "Implementación completa valorada en 3.500€",
    "6 meses de soporte técnico gratuito",
    "Acceso prioritario a nuevas funcionalidades",
    "Tu historia de éxito destacada en nuestra web"
  ];

  return (
    <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Oportunidad Exclusiva</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Oportunidad:<br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              El Programa Charter
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 md:p-12"
        >
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
              Esta es una oferta de prelanzamiento que <span className="font-bold text-blue-400">desaparece en 14 días</span>. 
              No volveremos a ofrecer estas condiciones. Los afortunados mantendrán este precio para siempre, 
              como premio a la confianza depositada en nosotros desde el principio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tu Inversión</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Una cuota de compromiso única, mucho más económica que nuestra tarifa habitual de implementación. 
                ¡Un precio para siempre por tu confianza inicial!
              </p>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Condiciones Irrepetibles
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tu Retorno</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-red-300 flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              La oferta acaba el 1 de diciembre de 2025 a las 19:00
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;