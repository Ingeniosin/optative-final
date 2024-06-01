import React, { useState } from 'react'

const Card = ({ title, children, image }) => (
  <div className='flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg mt-6'>
    <h3 className='text-2xl font-bold mb-4'>{title}</h3>
    <div className='grid grid-cols-2 gap-4'>
      <img
        className='mb-4 rounded-xl'
        src={image} alt={title} width={650}
      />
      <div
        className='text-gray-700' style={{
          overflow: 'auto',
          maxHeight: '400px'
        }}
      >{children}
      </div>
    </div>
  </div>
)

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='w-full mb-5 mt-5'>
      <button
        className='w-full text-left font-bold text-lg p-2 bg-blue-500 text-white rounded-t-lg'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className='p-4 bg-gray-100 rounded-b-lg'>
          {children}
        </div>
      )}
    </div>
  )
}

const VulnerableComponents = ({ data }) => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      {data.id === 1 && (
        <Card
          title='¿Qué son los componentes vulnerables?'
          image='https://www.perforce.com/sites/default/files/image/2020-09/image-blog-kw-top-10-security-vulnerabilities.jpg'
        >
          <p>
            <strong>Los componentes vulnerables</strong> son partes del software que contienen <strong>fallos de
              seguridad
                                                                                               </strong> y pueden ser explotados por atacantes para comprometer la integridad, confidencialidad o
            disponibilidad del sistema. Estos componentes pueden incluir <strong>bibliotecas, frameworks, módulos y
              dependencias
                                                                         </strong>.
          </p>
          <p>
            La importancia de abordar los componentes vulnerables radica en varias áreas clave:
          </p>
          <ul className='list-disc ml-6'>
            <li>
              <strong>Integridad del sistema:</strong> Los fallos en componentes vulnerables pueden permitir a los
              atacantes modificar datos o comportamientos del sistema, comprometiendo la integridad de las operaciones y
              resultados.
            </li>
            <li>
              <strong>Confidencialidad de la información:</strong> Los atacantes pueden explotar vulnerabilidades para
              acceder a información sensible y confidencial, poniendo en riesgo datos personales, financieros y
              empresariales.
            </li>
            <li>
              <strong>Disponibilidad del servicio:</strong> Las vulnerabilidades pueden ser utilizadas para causar
              interrupciones en el servicio, llevando a tiempo de inactividad y pérdida de acceso a recursos críticos,
              lo que puede afectar significativamente a la operatividad de la organización.
            </li>
            <li>
              <strong>Amplitud del impacto:</strong> Dado que los componentes vulnerables pueden ser utilizados en
              múltiples aplicaciones y sistemas, una única vulnerabilidad puede tener un efecto cascada, afectando a una
              amplia gama de productos y servicios.
            </li>
            <li>
              <strong>Reputación y confianza:</strong> La explotación de componentes vulnerables puede dañar la
              reputación de una organización y disminuir la confianza de clientes y socios, lo que puede tener
              consecuencias a largo plazo en términos de relaciones comerciales y oportunidades de negocio.
            </li>
          </ul>
          <p>
            Es fundamental identificar y mitigar estas vulnerabilidades para evitar ataques que puedan causar <strong>pérdidas
              de datos, interrupciones del servicio y otras consecuencias graves
                                                                                                              </strong>. Implementar un programa
            riguroso de gestión de vulnerabilidades, mantener los componentes actualizados y realizar auditorías de
            seguridad regularmente son prácticas esenciales para proteger los sistemas y la información.
          </p>

        </Card>
      )}

      {data.id === 2 && (
        <Card
          title='Tipos de componentes vulnerables'
          image='https://cdn.dribbble.com/users/1961677/screenshots/16537168/media/9a2e4217cc98433f8844c65b836eeb0f.png'
        >
          <p>
            Existen diversos tipos de componentes vulnerables que pueden afectar la seguridad de una aplicación. Algunos
            de los más comunes incluyen:
          </p>

          <Accordion title='Bibliotecas desactualizadas'>
            <p>
              Las bibliotecas desactualizadas a menudo contienen vulnerabilidades conocidas que los atacantes pueden
              explotar. Es crucial mantener todas las bibliotecas actualizadas a sus versiones más recientes y seguras.
            </p>
          </Accordion>

          <Accordion title='Componentes deprecados'>
            <p>
              Los componentes deprecados son aquellos que ya no son mantenidos por sus desarrolladores. Usar componentes
              deprecados puede dejar el sistema expuesto a vulnerabilidades sin solución.
            </p>
          </Accordion>

          <Accordion title='Módulos no seguros'>
            <p>
              Algunos módulos pueden contener fallos de seguridad inherentes o malas prácticas de codificación. Es
              importante revisar y auditar los módulos antes de integrarlos en el proyecto.
            </p>
          </Accordion>

          <p>
            Identificar y mitigar estos tipos de componentes vulnerables es esencial para mantener la seguridad de la
            aplicación.
          </p>
        </Card>
      )}

      {data.id === 3 && (
        <Card
          title='Actualización de componentes'
          image='https://imgix.datadoghq.com/img/blog/real-user-monitoring-with-datadog/datadog-real-user-monitoring.png?auto=format'
        >
          <p>
            Mantener los componentes actualizados es una práctica fundamental para la seguridad del software. Algunas de
            las mejores prácticas para la actualización de componentes incluyen:
          </p>
          <Accordion title='Monitoreo continuo'>
            <p>
              Utilizar herramientas de monitoreo que alerten sobre nuevas versiones y vulnerabilidades en los
              componentes utilizados.
            </p>
          </Accordion>
          <Accordion title='Actualización regular'>
            <p>
              Establecer un ciclo regular de actualización y mantenimiento para asegurar que todos los componentes estén
              en sus versiones más seguras y recientes.
            </p>
          </Accordion>
          <Accordion title='Pruebas de regresión'>
            <p>
              Realizar pruebas exhaustivas después de cada actualización para garantizar que los cambios no introduzcan
              nuevas vulnerabilidades o problemas en la aplicación.
            </p>
          </Accordion>
          <p>
            Estas prácticas ayudan a mantener la seguridad y estabilidad del sistema al día.
          </p>
        </Card>
      )}

      {data.id === 4 && (
        <Card
          title='Ejemplos de componentes vulnerables'
          image='https://cdn.arstechnica.net/wp-content/uploads/2021/12/cve-2021-44228-diagram.jpg'
        >
          <p className='mb-4 mt-10'>
            Existen varios ejemplos de componentes vulnerables que han causado problemas de seguridad significativos. A
            continuación, se presentan algunos casos notables:
          </p>
          <p className='mb-4'>
            <strong>Log4j:</strong> Una vulnerabilidad crítica en la biblioteca de registro Log4j permitió a los
            atacantes ejecutar código arbitrario en los sistemas afectados. Esta falla tuvo un impacto masivo en la
            industria.
          </p>
          <p className='mb-4'>
            <strong>Heartbleed:</strong> Una vulnerabilidad en la biblioteca de criptografía OpenSSL que expuso datos
            sensibles y claves privadas al permitir a los atacantes leer la memoria del servidor.
          </p>
          <p className='mb-4'>
            <strong>Struts2:</strong> Vulnerabilidades en el framework Apache Struts2 permitieron a los atacantes
            ejecutar comandos arbitrarios en los servidores afectados, resultando en múltiples brechas de datos.
          </p>
        </Card>
      )}
    </div>
  )
}

export default VulnerableComponents
