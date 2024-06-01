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

const LoggingMonitoringFaults = ({ data }) => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      {data.id === 1 && (
        <Card
          title='¿Qué son las fallas de registro y monitoreo?'
          image='https://www.immuniweb.com/images/blog/a09-2021-security-logging-and-monitoring-failures.jpg'
        >
          <p>
            Las <strong>fallas de registro y monitoreo</strong> se refieren a la falta de mecanismos adecuados para
            registrar eventos y monitorear actividades en una aplicación o sistema. Estas deficiencias pueden dificultar
            la detección de actividades sospechosas, errores y problemas de seguridad, lo que a su vez puede permitir
            que los ataques pasen desapercibidos.
          </p>
          <p>
            Un sistema de registro y monitoreo efectivo es fundamental para mantener la seguridad y operatividad de los
            sistemas. Los registros detallados permiten a los administradores identificar patrones inusuales, detectar
            intentos de intrusión y responder a incidentes de manera oportuna. Sin un registro adecuado, los ataques
            pueden no ser detectados hasta que ya han causado daños significativos.
          </p>
          <p>
            La <strong>importancia del registro y monitoreo</strong> radica en su capacidad para proporcionar una
            visibilidad completa sobre lo que está sucediendo dentro de un sistema. Esta visibilidad es crucial para la
            detección temprana de problemas, la resolución rápida de incidentes y la mejora continua de la seguridad.
            Los registros también son esenciales para la investigación posterior a un incidente, permitiendo a los
            equipos de seguridad analizar qué ocurrió, cómo ocurrió y qué medidas se pueden tomar para evitar futuros
            incidentes.
          </p>
          <p>
            Para implementar un sistema de registro y monitoreo efectivo, se deben considerar las siguientes
            estrategias:
          </p>
          <ul>
            <li>
              <strong>Implementación de registros detallados:</strong> Asegurarse de que todos los eventos relevantes,
              como accesos, cambios en la configuración, y acciones de los usuarios, sean registrados con detalles
              suficientes para su análisis posterior.
            </li>
            <li>
              <strong>Monitoreo en tiempo real:</strong> Utilizar herramientas que permitan el monitoreo en tiempo real
              de los eventos y actividades del sistema, alertando inmediatamente sobre comportamientos sospechosos o
              anómalos.
            </li>
            <li>
              <strong>Revisión y análisis regular de registros:</strong> Establecer procedimientos para la revisión
              periódica de los registros, buscando patrones inusuales o indicios de actividad maliciosa.
            </li>
            <li>
              <strong>Automatización de alertas:</strong> Configurar sistemas que automaticen la generación de alertas
              ante la detección de eventos críticos o sospechosos, para una respuesta rápida.
            </li>
            <li>
              <strong>Capacitación continua:</strong> Asegurar que los equipos de seguridad estén capacitados para
              interpretar los registros y utilizar las herramientas de monitoreo de manera efectiva.
            </li>
          </ul>
        </Card>
      )}

      {data.id === 2 && (
        <Card
          title='Tipos de fallas de registro y monitoreo'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WGo3X_cK9AiK2LynxZqYNoCOoyAJyLX1pg&s'
        >
          <p>
            Existen varios tipos de fallas de registro y monitoreo que pueden afectar la seguridad y el rendimiento de
            un sistema. Algunos de los más comunes incluyen:
          </p>

          <Accordion title='Falta de registro de eventos críticos'>
            <p>
              No registrar eventos críticos como intentos de inicio de sesión fallidos, cambios en la configuración o
              accesos a datos sensibles puede dejar a los administradores sin información crucial para detectar y
              responder a incidentes.
            </p>
          </Accordion>

          <Accordion title='Monitoreo insuficiente'>
            <p>
              Monitorear solo una parte del sistema o no monitorear en tiempo real puede permitir que actividades
              maliciosas pasen desapercibidas. Es importante tener una cobertura completa y en tiempo real del monitoreo
              del sistema.
            </p>
          </Accordion>

          <Accordion title='Alertas mal configuradas'>
            <p>
              Configurar incorrectamente las alertas puede resultar en una sobrecarga de información (falsos positivos)
              o en la falta de notificaciones importantes (falsos negativos). Las alertas deben estar bien calibradas
              para ser efectivas.
            </p>
          </Accordion>

          <p>
            Identificar y corregir estos tipos de fallas es esencial para mantener un sistema seguro y eficiente.
          </p>
        </Card>
      )}

      {data.id === 3 && (
        <Card
          title='Mejores prácticas de registro y monitoreo'
          image='https://www.manageengine.com/vulnerability-management/images/vulnerability-assessment-steps.png'
        >
          <p>
            Para prevenir fallas de registro y monitoreo, es crucial seguir las mejores prácticas en la implementación
            de estos mecanismos. Algunas recomendaciones incluyen:
          </p>
          <Accordion title='Implementar un sistema de registro centralizado'>
            <p>
              Utilizar un sistema centralizado para el registro de eventos puede facilitar el análisis y la correlación
              de datos, mejorando la capacidad de detectar incidentes de seguridad.
            </p>
          </Accordion>
          <Accordion title='Monitoreo continuo y en tiempo real'>
            <p>
              Implementar monitoreo continuo y en tiempo real permite una detección temprana de actividades sospechosas
              y una respuesta rápida a incidentes.
            </p>
          </Accordion>
          <Accordion title='Configurar alertas efectivas'>
            <p>
              Las alertas deben estar bien configuradas para detectar eventos críticos sin inundar a los administradores
              con falsos positivos. Ajustar las alertas para lograr un equilibrio adecuado es esencial.
            </p>
          </Accordion>
          <p>
            Siguiendo estas prácticas, se puede mejorar significativamente la seguridad y la operatividad del sistema.
          </p>
        </Card>
      )}

      {data.id === 4 && (
        <Card
          title='Ejemplos de fallas de registro y monitoreo'
          image='https://i.ytimg.com/vi/V4_mKDN-UWE/maxresdefault.jpg'
        >
          <p className='mb-4 mt-10'>
            Existen varios ejemplos de fallas de registro y monitoreo que han tenido un impacto significativo en la
            seguridad de sistemas y aplicaciones. A continuación, se presentan algunos casos notables:
          </p>
          <p className='mb-4'>
            <strong>Target:</strong> En 2013, Target sufrió una brecha de datos masiva en la que se comprometieron datos
            de millones de clientes. La falta de monitoreo adecuado permitió que los atacantes permanecieran en el
            sistema durante semanas sin ser detectados.
          </p>
          <p className='mb-4'>
            <strong>Equifax:</strong> En 2017, Equifax sufrió una brecha de datos en la que se expusieron datos
            personales de aproximadamente 147 millones de personas. La falta de registro y monitoreo adecuados
            contribuyó a la tardanza en la detección y respuesta al incidente.
          </p>
          <p className='mb-4'>
            <strong>Capital One:</strong> En 2019, una falla en el monitoreo permitió que un atacante exfiltrara datos
            de más de 100 millones de clientes durante un periodo prolongado antes de ser detectado.
          </p>
        </Card>
      )}
    </div>
  )
}

export default LoggingMonitoringFaults
