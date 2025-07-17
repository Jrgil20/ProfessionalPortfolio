import { motion } from 'framer-motion';
import { Shield, Mail, Database, Eye, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                <Shield size={32} className="text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-700 mb-4">
              Última actualización: {lastUpdated}
            </p>
            <p className="text-neutral-600">
              Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información personal.
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
              {/* Información que recopilamos */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Mail size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Información que recopilamos
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    A través del formulario de contacto en este sitio web, recopilamos la siguiente información:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Nombre:</strong> Su nombre completo para poder dirigirnos a usted de manera personalizada</li>
                    <li><strong>Dirección de correo electrónico:</strong> Para responder a su consulta</li>
                    <li><strong>Asunto:</strong> El tema de su mensaje (opcional)</li>
                    <li><strong>Mensaje:</strong> El contenido de su consulta o comentario</li>
                  </ul>
                </div>
              </div>

              {/* Cómo usamos la información */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Database size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Cómo usamos su información
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>La información que recopilamos se utiliza exclusivamente para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Responder a sus consultas y mensajes</li>
                    <li>Proporcionar el servicio o información que solicita</li>
                    <li>Mejorar la calidad de nuestro servicio</li>
                    <li>Mantener comunicación profesional cuando sea necesario</li>
                  </ul>
                  <p className="mt-4">
                    <strong>No vendemos, alquilamos ni compartimos su información personal con terceros</strong> 
                    para fines comerciales o de marketing.
                  </p>
                </div>
              </div>

              {/* Formspree y servicios de terceros */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Formspree y servicios de terceros
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Este sitio web utiliza <strong>Formspree</strong> para procesar los formularios de contacto. 
                    Es importante que sepa que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Formspree recibe y almacena temporalmente</strong> la información que envía a través del formulario
                    </li>
                    <li>
                      <strong>No tengo control directo</strong> sobre cómo Formspree maneja sus datos internamente
                    </li>
                    <li>
                      Formspree puede almacenar su información en servidores ubicados en diferentes países
                    </li>
                    <li>
                      Los datos se transfieren a través de conexiones seguras (HTTPS) para proteger su privacidad
                    </li>
                  </ul>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Para obtener información completa sobre cómo Formspree maneja sus datos, 
                      le recomendamos revisar la{' '}
                      <a 
                        href="https://formspree.io/legal/privacy-policy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-yellow-900"
                      >
                        Política de Privacidad de Formspree
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seguridad de datos */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lock size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Seguridad de datos
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>Implementamos las siguientes medidas para proteger su información:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Uso de conexiones seguras (HTTPS) para todas las transmisiones de datos</li>
                    <li>Acceso limitado a la información personal solo a personal autorizado</li>
                    <li>Almacenamiento seguro de datos en servidores protegidos</li>
                    <li>Revisión regular de nuestras prácticas de seguridad</li>
                  </ul>
                </div>
              </div>

              {/* Retención de datos */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Eye size={24} className="text-primary-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Retención de datos
                  </h2>
                </div>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Conservamos su información personal solo durante el tiempo necesario para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Responder a su consulta</li>
                    <li>Cumplir con obligaciones legales</li>
                    <li>Resolver disputas</li>
                    <li>Hacer cumplir nuestros acuerdos</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Nota sobre Formspree:</strong> La retención de datos por parte de Formspree está 
                    sujeta a sus propias políticas. Puede consultar los detalles en su política de privacidad.
                  </p>
                </div>
              </div>

              {/* Sus derechos */}
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Sus derechos
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>Usted tiene derecho a:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Acceso:</strong> Solicitar información sobre qué datos tenemos sobre usted</li>
                    <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                    <li><strong>Eliminación:</strong> Solicitar la eliminación de sus datos personales</li>
                    <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                    <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
                  </ul>
                  <p className="mt-4">
                    Para ejercer estos derechos, puede contactarme a través del formulario de contacto 
                    o directamente por correo electrónico.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Cookies y tecnologías similares
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Este sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia. 
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo.
                  </p>
                  <p>
                    Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
                    la funcionalidad del sitio web.
                  </p>
                </div>
              </div>

              {/* Cambios en la política */}
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Cambios en esta política
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
                    Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.
                  </p>
                  <p>
                    Le notificaremos sobre cualquier cambio significativo en la forma en que tratamos 
                    su información personal.
                  </p>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Contacto
                </h2>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información, 
                    no dude en contactarme:
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <p className="font-medium">Formas de contacto:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>A través del formulario de contacto en este sitio web</li>
                      <li>Directamente por correo electrónico</li>
                      <li>A través de mis perfiles profesionales en redes sociales</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Disclaimer legal */}
              <div className="bg-neutral-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Aviso legal
                </h3>
                <p className="text-sm text-neutral-600">
                  Esta política de privacidad es informativa y no constituye asesoramiento legal. 
                  Para obtener asesoramiento legal específico sobre privacidad y protección de datos, 
                  consulte con un profesional legal calificado.
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

export default PrivacyPolicy; 