import { motion } from 'framer-motion';
import { ShieldAlert, Ban, Mail, Info, UserCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const lastUpdated = '17/07/2025';

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <FileText size={32} className="text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Términos de Servicio
            </h1>
            <p className="text-lg text-neutral-700 mb-4">
              Última actualización: {lastUpdated}
            </p>
            <p className="text-neutral-600">
              Por favor, lea estos términos cuidadosamente antes de utilizar este sitio web.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Uso permitido */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Uso permitido
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Este sitio web está destinado exclusivamente para fines personales, informativos y profesionales relacionados con el portafolio de su autor.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Puede navegar, consultar y contactar al autor a través del formulario de contacto.</li>
                    <li>Puede compartir enlaces al sitio siempre que no se altere su contenido ni se haga un uso indebido.</li>
                  </ul>
                </div>
              </div>

              {/* Prohibiciones y uso malicioso */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Ban size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Prohibiciones y uso malicioso
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>Está estrictamente prohibido:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Utilizar el formulario de contacto para enviar spam, mensajes masivos, publicidad no solicitada o contenido malicioso.</li>
                    <li>Intentar suplantar la identidad de otras personas o del propietario del sitio.</li>
                    <li>Intentar acceder, manipular o dañar el sitio web, su código o sus datos.</li>
                    <li>Realizar scraping, extracción masiva de datos o uso automatizado del sitio sin autorización expresa.</li>
                    <li>Utilizar la información de contacto o cualquier dato del sitio para fines ilícitos, comerciales no autorizados o para acosar al propietario.</li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                    <p className="text-red-800">
                      El uso indebido del formulario o del sitio puede resultar en el bloqueo de acceso y, si corresponde, en acciones legales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Uso de la información publicada */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Info size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Uso de la información publicada
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>No está permitido copiar, reproducir o redistribuir el contenido del sitio para fines comerciales sin autorización.</li>
                    <li>La información publicada es para consulta y referencia, y puede estar sujeta a derechos de autor.</li>
                    <li>El uso de datos de contacto para listas, bases de datos o envíos masivos está prohibido.</li>
                  </ul>
                </div>
              </div>

              {/* Limitación de responsabilidad */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Limitación de responsabilidad
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    El propietario del sitio no se hace responsable por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>El uso indebido que terceros puedan hacer de la información publicada.</li>
                    <li>Daños o perjuicios derivados del acceso o uso del sitio.</li>
                    <li>Enlaces externos o servicios de terceros (como Formspree) utilizados para el funcionamiento del sitio.</li>
                  </ul>
                </div>
              </div>

              {/* Cambios en los términos */}
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Cambios en los términos
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    El propietario se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en esta página.
                  </p>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Mail size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Contacto
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Si tiene dudas sobre estos términos o detecta un uso indebido del sitio, puede contactarme a través del formulario de contacto o por correo electrónico.
                  </p>
                </div>
              </div>

              {/* Disclaimer legal */}
              <div className="bg-neutral-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Aviso legal
                </h3>
                <p className="text-sm text-neutral-600">
                  Estos términos son informativos y no constituyen asesoramiento legal. Para situaciones específicas, consulte con un profesional legal calificado.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 