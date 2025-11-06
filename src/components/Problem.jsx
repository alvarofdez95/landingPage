import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Users, Clock } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Errores Manuales",
      description: "Un '0' mal tecleado en una factura de Holded o un CIF incorrecto. Cuesta dinero directo.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Equipos Quemados",
      description: "Tu mejor talento está atrapado 8 horas al día en 'copiar y pegar' en lugar de aportar valor.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Clock,
      title: "Procesos Atascados",
      description: "El email de aprobación que frena un cobro. El ticket de soporte que espera 24 horas. La lentitud te hace perder clientes.",
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu mayor coste no es la nómina.<br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Es la fricción.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-slate-300 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;