import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

// --- CONFIGURACIÓN DE LA OFERTA ---
// Define la fecha y hora exactas en que finaliza la oferta.
// Formato: AAAA-MM-DDTHH:MM:SS
const OFFER_END_DATE = new Date('2025-12-01T19:00:00');

// URL de tu Calendly
const CALENDLY_URL = 'https://calendly.com/agentify/30min';

const FinalCTA = () => {
  // Estado para la lógica de la oferta (se calcula en el useEffect)
  const [isOfferActive, setIsOfferActive] = useState(false);
  // Estado para mostrar/ocultar Calendly
  const [showCalendly, setShowCalendly] = useState(false);

  // --- REFS PARA MEJORAS ---
  // Ref para evitar doble carga del script de Calendly en React 18
  const scriptLoadedRef = useRef(false);
  // Ref para gestionar el foco de accesibilidad (a11y)
  const calendlyTitleRef = useRef(null);

  // EFECTO 1: Comprobar si la oferta está activa al cargar la página
  useEffect(() => {
    // Comprueba la fecha actual contra la fecha límite
    setIsOfferActive(new Date() < OFFER_END_DATE);
  }, []); // El array vacío [] asegura que solo se ejecute una vez

  // EFECTO 2: Cargar el script de Calendly cuando el usuario hace clic
  useEffect(() => {
    // 1. No hacer nada si el usuario no ha hecho clic
    if (!showCalendly) return;

    // 2. CORRECCIÓN ROBUSTEZ: Si el script ya se cargó, no volver a cargarlo
    if (scriptLoadedRef.current) {
      // Si el script ya existe, solo nos aseguramos de que el widget se inicie
      const parentElement = document.getElementById('calendly-embed-widget');
      if (window.Calendly && parentElement && parentElement.innerHTML === '') {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: parentElement,
        });
      }
      return;
    }

    // 3. Marcar el script como "cargando" para evitar ejecuciones futuras
    scriptLoadedRef.current = true;

    // 4. Crear y añadir el script al DOM
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const parentElement = document.getElementById('calendly-embed-widget');

    // 5. Cuando el script esté cargado, inicializar el widget
    script.onload = () => {
      if (window.Calendly && parentElement) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: parentElement,
          prefill: {},
          utm: {}
        });
      }
    };

    // 6. Función de limpieza (se ejecuta si el componente se desmonta)
    return () => {
      // Limpiamos el widget, pero NO eliminamos el script
      // El script ya está cargado en la página y no queremos perderlo
      if (parentElement) {
        parentElement.innerHTML = '';
      }
    };
  }, [showCalendly]); // Este efecto depende SOLO de 'showCalendly'

  // Función que se ejecuta al hacer clic en el CTA
  const handleCTA = () => {
    setShowCalendly(true);

    // MEJORA ACCESIBILIDAD (a11y):
    // Mover el foco del usuario al nuevo contenido (el título de Calendly)
    // Usamos un setTimeout para dar tiempo a la animación de Framer Motion
    setTimeout(() => {
      if (calendlyTitleRef.current) {
        calendlyTitleRef.current.focus();
      }
    }, 500); // 500ms (ajustar si la animación dura más)
  };

  // --- CORRECCIÓN SINTAXIS: 'Icon' con mayúscula ---
  const guarantees = [
    {
      Icon: Shield, // Antes 'icon'
      text: "Sin compromiso"
    },
    {
      Icon: Clock, // Antes 'icon'
      text: "30 minutos"
    },
    {
      Icon: Users, // Antes 'icon'
      text: "Con un fundador"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          {/* --- CORRECCIÓN LÓGICA DE OFERTA --- */}
          {/* Este bloque solo se renderiza si la oferta está activa */}
          <AnimatePresence>
            {isOfferActive && (
              <motion.div
                key="offer-details"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-8">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span className="text-sm text-red-300 font-semibold uppercase tracking-wider">Última Oportunidad</span>
                </div>
                <p className="text-xl md:text-2xl text-slate-300 mb-4">
                  La oferta finaliza el <span className="font-bold text-red-400">1 de diciembre de 2025 a las 19:00</span>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {/* El título cambia si la oferta ha terminado */}
            {isOfferActive ? (
              <>
                ¿Quieres unirte a nuestro<br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Programa Charter?
                </span>
              </>
            ) : (
              "Agenda tu Diagnóstico de Automatización"
            )}
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Agenda tu Diagnóstico Gratuito de 30 minutos. Sin compromiso, sin riesgo.
          </p>

          {/* Lógica para cambiar entre el Botón y el Widget de Calendly */}
          <AnimatePresence mode="wait">
            {!showCalendly ? (
              // VISTA 1: BOTÓN (Calendly está oculto)
              <motion.div
                key="cta-button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  onClick={handleCTA}
                  // El botón se deshabilita si la oferta ha terminado
                  disabled={!isOfferActive}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/60 mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isOfferActive ? "Agendar mi Diagnóstico Gratuito" : "Programa Charter Cerrado"}
                  {isOfferActive && <ArrowRight className="ml-3 w-6 h-6" />}
                </Button>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  {guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      {/* --- CORRECCIÓN SINTAXIS JSX --- */}
                      <guarantee.Icon className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">{guarantee.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto"
                >
                  <p className="text-lg text-blue-200 leading-relaxed">
                    <span className="font-semibold">No es una demo de ventas.</span> Es una sesión de consultoría real 
                    con uno de los fundadores para construir tu plan de automatización.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              // VISTA 2: CALENDLY (showCalendly es true)
              <motion.div
                key="calendly-widget"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-16"
              >
                {/* --- MEJORA ACCESIBILIDAD (a11y) --- */}
                <h3 
                  ref={calendlyTitleRef} // 1. Asignar el ref
                  tabIndex={-1}           // 2. Hacerlo "focuseable"
                  className="text-3xl font-bold text-white mb-8 outline-none" // 3. Ocultar el outline
                >
                  Elige tu hora
                </h3>
                <div 
                  id="calendly-embed-widget"
                  style={{ minWidth: '320px', height: '700px', background: 'transparent' }}
                  className="rounded-2xl overflow-hidden" // Añadido para que el widget se vea mejor
                >
                  {/* El script se inyectará aquí al hacer clic */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-20 pt-10 border-t border-slate-700/50 text-center"
        >
          <p className="text-slate-500 text-sm">
            © 2025 Agentify S.L. Todos los derechos reservados.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default FinalCTA;