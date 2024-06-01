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

const Inyect = ({ data }) => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      {data.id === 1 && (
        <Card
          title='¿Qué es la inyección de código?'
          image='https://cristianthous.com/wp-content/uploads/2022/02/Code-injection-e1580817731194-772x386.jpg'
        >
          <p>
            <strong>La inyección de código</strong> es una técnica de ataque que consiste en insertar <strong>código
              malicioso
                                                                                                      </strong> en una aplicación o sistema para obtener acceso no autorizado o robar información. Los
            atacantes suelen utilizar esta técnica para explotar <strong>vulnerabilidades</strong> en aplicaciones web y
            bases de datos.
          </p>
          <p>
            La inyección de código es de suma importancia por varias razones:
          </p>
          <ul className='list-disc ml-6'>
            <li>
              <strong>Acceso no autorizado:</strong> Los atacantes pueden obtener acceso a datos y sistemas que deberían
              estar protegidos, comprometiendo la seguridad y privacidad de la información.
            </li>
            <li>
              <strong>Robo de información:</strong> La información confidencial, como datos personales y financieros,
              puede ser robada y utilizada para actividades maliciosas, incluyendo fraude y robo de identidad.
            </li>
            <li>
              <strong>Pérdida de datos:</strong> Los ataques de inyección de código pueden resultar en la pérdida de
              datos críticos, lo que puede afectar la operatividad de la organización y su capacidad para realizar
              negocios.
            </li>
            <li>
              <strong>Corrupción de archivos:</strong> La integridad de los datos puede verse comprometida, con archivos
              corrompidos que pueden ser difíciles o imposibles de recuperar.
            </li>
            <li>
              <strong>Exposición de información confidencial:</strong> Los datos sensibles pueden quedar expuestos, lo
              que puede llevar a daños reputacionales y legales para la organización.
            </li>
          </ul>
          <p>
            La importancia de prevenir la inyección de código radica en la necesidad de proteger la integridad,
            confidencialidad y disponibilidad de los sistemas de información. Implementar buenas prácticas de seguridad,
            como la validación y sanitización de entradas, el uso de consultas parametrizadas y la auditoría regular de
            código, es esencial para mitigar el riesgo de estos ataques.
          </p>

        </Card>
      )}

      {data.id === 2 && (
        <Card
          title='Tipos de inyección de código'
          image='https://cdn-jbepd.nitrocdn.com/YEoqpMyeldTEanvDimcCnYAayuKHUkHT/assets/images/optimized/rev-f8e038d/qawerk.es/wp-content/uploads/2021/07/Cover-1024x576.png'
        >
          <p>
            Existen varios tipos de inyección de código, cada uno con sus propias técnicas y consecuencias. Algunos de
            los tipos más comunes son:
          </p>

          <Accordion title='Inyección de SQL'>
            <p>
              La inyección de SQL es un tipo de ataque en el que un atacante inserta código SQL malicioso en un campo
              de entrada para manipular la base de datos y obtener información sensible. Este tipo de ataque puede
              tener consecuencias graves, como la pérdida de datos, la corrupción de archivos y la exposición de
              información confidencial.
            </p>
          </Accordion>

          <Accordion title='Inyección de JavaScript'>
            <p>
              La inyección de JavaScript es un tipo de ataque en el que un atacante inserta código JavaScript malicioso
              en un campo de entrada que se ejecuta en el navegador del usuario. Este tipo de ataque puede tener
              consecuencias graves, como el robo de cookies, la redirección a sitios maliciosos y la ejecución de
              scripts maliciosos en el navegador del usuario.
            </p>
          </Accordion>

          <Accordion title='Inyección de HTML'>
            <p>
              La inyección de HTML es un tipo de ataque en el que un atacante inserta código HTML malicioso en un campo
              de entrada que modifica la página web y redirige a los usuarios a sitios maliciosos. Este tipo de ataque
              puede tener consecuencias graves, como el robo de información confidencial, la ejecución de scripts
              maliciosos y la redirección a sitios de phishing.
            </p>
          </Accordion>

          <p>
            Estos son solo algunos ejemplos de los tipos de inyección de código que existen. Es importante estar al
            tanto de las diferentes técnicas de ataque para protegerse de posibles vulnerabilidades en sus aplicaciones
            y sistemas.
          </p>
        </Card>
      )}

      {data.id === 3 && (
        <Card
          title='Prevención de la inyección de código'
          image='https://easydmarc.com/blog/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/06/What-is-SQL-Injection-SQLi-and-How-to-Prevent-It_-1-1.jpg.webp'
        >
          <p>
            Para prevenir la inyección de código, es importante seguir buenas prácticas de seguridad en el desarrollo de
            aplicaciones y sistemas. Algunas medidas que se pueden tomar para protegerse de este tipo de ataques son:
          </p>
          <Accordion title='Validar y sanitizar la entrada de datos'>
            <p>
              Asegurarse de que los datos proporcionados por los usuarios sean seguros y no contengan código malicioso.
            </p>
          </Accordion>
          <Accordion title='Utilizar parámetros en las consultas SQL'>
            <p>
              En lugar de concatenar cadenas de texto para construir consultas SQL, se deben utilizar parámetros para
              evitar la inyección de código.
            </p>
          </Accordion>
          <Accordion title='Escapar los caracteres especiales'>
            <p>
              Al mostrar datos en una página web, es importante escapar los caracteres especiales para evitar la
              ejecución de código malicioso.
            </p>
          </Accordion>
          <p>
            Estas son solo algunas de las medidas que se pueden tomar para prevenir la inyección de código. Es
            importante estar al tanto de las últimas técnicas de ataque y seguir las mejores prácticas de seguridad para
            protegerse de posibles vulnerabilidades.
          </p>
        </Card>
      )}

      {data.id === 4 && (
        <Card
          title='Ejemplos de inyección de código'
          image='./sql.png'
        >

          <p className='mb-4 mt-10'>
            La <strong>inyección de código</strong> es una de las vulnerabilidades más críticas en el desarrollo de
            software y aplicaciones web. Este tipo de ataque permite a los <strong>atacantes</strong> maliciosos
            introducir código no autorizado en un programa, alterando su comportamiento original y permitiendo la
            ejecución de acciones perjudiciales. La inyección de código puede adoptar diversas formas, siendo las más
            comunes la <strong>inyección SQL</strong>, la inyección de comandos del sistema operativo y la inyección de
            scripts en lenguajes como JavaScript o PHP.
          </p>
          <p className='mb-4'>
            En el caso de la <strong>inyección SQL</strong>, los atacantes pueden manipular consultas a la base de datos
            a través de entradas del usuario, accediendo o alterando datos sensibles sin autorización. Un ejemplo típico
            es cuando un campo de entrada no es debidamente validado y permite que un atacante inserte código SQL
            malicioso, como una condición que siempre es verdadera, comprometiendo así la seguridad de la base de datos.
          </p>
          <p className='mb-4'>
            La inyección de comandos del sistema operativo es igualmente peligrosa, ya que permite a los atacantes
            ejecutar comandos arbitrarios en el servidor que aloja la aplicación vulnerable. Esto puede resultar en la
            obtención de datos confidenciales, la manipulación de archivos o incluso el control total del servidor.
          </p>
          <p className='mb-4'>
            La <strong>inyección de scripts</strong> en lenguajes como JavaScript puede llevar a ataques de Cross-Site
            Scripting (XSS), donde el atacante introduce código malicioso que se ejecuta en el navegador de los
            usuarios, robando información sensible como cookies de sesión o redirigiendo a los usuarios a sitios web
            maliciosos.
          </p>

        </Card>
      )}
    </div>
  )
}

export default Inyect
