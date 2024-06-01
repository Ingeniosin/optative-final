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

const CSRF = ({ data }) => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      {data.id === 1 && (
        <Card
          title='¿Qué es la falsificación de solicitudes (CSRF)?'
          image='https://kinsta.com/wp-content/uploads/2022/11/CSRF-Attack-Okta.png'
        >
          <p>
            La <strong>falsificación de solicitudes en sitios cruzados (CSRF, por sus siglas en inglés)</strong> es un
            tipo de ataque en el que un atacante engaña a un usuario autenticado para que realice acciones no deseadas
            en una aplicación web. El atacante explota la confianza que la aplicación tiene en el usuario, utilizando
            esta relación para enviar solicitudes maliciosas en su nombre sin que el usuario lo note.
          </p>
          <p>
            Los ataques CSRF son especialmente peligrosos porque aprovechan la sesión autenticada del usuario. Esto
            significa que cualquier acción realizada por el atacante a través de CSRF es percibida por la aplicación
            como legítima, ya que se ejecuta bajo el contexto de la autenticación del usuario. Las consecuencias de
            estos ataques pueden ser graves y variadas, incluyendo la modificación de datos críticos, la transferencia
            de fondos, el cambio de configuraciones importantes, o incluso la eliminación de cuentas de usuario.
          </p>
          <p>
            La <strong>importancia de prevenir CSRF</strong> radica en su potencial para causar daños significativos
            tanto a los usuarios como a las organizaciones. Un ataque exitoso puede resultar en la pérdida de confianza
            de los usuarios, daños financieros directos, compromisos de seguridad a largo plazo y problemas legales
            debido a la falta de protección adecuada de los datos de los usuarios.
          </p>
          <p>
            Para mitigar los riesgos de CSRF, es esencial implementar medidas de seguridad robustas. Algunas de las
            estrategias más efectivas incluyen:
          </p>
          <ul>
            <li>
              <strong>Tokens de verificación únicos:</strong> Utilizar tokens CSRF únicos y específicos por sesión que
              deben ser enviados con cada solicitud. Esto asegura que la solicitud proviene del usuario autenticado y no
              de un atacante.
            </li>
            <li>
              <strong>Validación de las solicitudes entrantes:</strong> Verificar que las solicitudes provengan de la
              misma fuente desde la cual se generaron, utilizando encabezados HTTP referer u otros métodos de
              validación.
            </li>
            <li>
              <strong>Políticas de referencia estrictas:</strong> Implementar políticas de referencia para asegurarse de
              que las solicitudes provienen de dominios autorizados.
            </li>
            <li>
              <strong>Autenticación multifactor:</strong> Utilizar métodos adicionales de autenticación puede ayudar a
              reducir la efectividad de los ataques CSRF.
            </li>
          </ul>

        </Card>
      )}

      {data.id === 2 && (
        <Card
          title='Tipos de ataques CSRF'
          image='https://media.licdn.com/dms/image/D4E12AQFspRL8qvQ5-Q/article-cover_image-shrink_720_1280/0/1656172124708?e=2147483647&v=beta&t=namunot7OU-633FqhPX6P6CI9MaJFtxcLCNGRQysI-E'
        >
          <p>
            Existen varios tipos de ataques CSRF, cada uno con sus propias técnicas y objetivos. Algunos de los más
            comunes son:
          </p>

          <Accordion title='CSRF en formularios'>
            <p>
              Este tipo de ataque ocurre cuando un atacante logra que el usuario autenticado envíe un formulario con
              datos maliciosos. Puede ser a través de un enlace o un script que se ejecuta automáticamente en el
              navegador del usuario.
            </p>
          </Accordion>

          <Accordion title='CSRF en solicitudes GET'>
            <p>
              En este tipo de ataque, el atacante utiliza una solicitud GET para realizar acciones en nombre del
              usuario, como cambiar configuraciones o eliminar datos, simplemente engañando al usuario para que haga
              clic en un enlace malicioso.
            </p>
          </Accordion>

          <Accordion title='CSRF en solicitudes POST'>
            <p>
              Similar al ataque en solicitudes GET, pero utilizando una solicitud POST para enviar datos. Esto puede ser
              más dañino ya que las solicitudes POST a menudo se utilizan para realizar acciones críticas en la
              aplicación.
            </p>
          </Accordion>

          <p>
            Estos son solo algunos ejemplos de los tipos de ataques CSRF que existen. Es importante estar al tanto de
            estas técnicas para poder implementar medidas de protección adecuadas.
          </p>
        </Card>
      )}

      {data.id === 3 && (
        <Card
          title='Prevención de ataques CSRF'
          image='https://assets-global.website-files.com/5ff66329429d880392f6cba2/61f251b52a583fa4149b98c0_CSRF%20Preview.jpg'
        >
          <p>
            Para prevenir ataques CSRF, es importante seguir buenas prácticas de seguridad en el desarrollo de
            aplicaciones web. Algunas de las medidas que se pueden tomar incluyen:
          </p>
          <Accordion title='Uso de tokens CSRF'>
            <p>
              Incluir un token CSRF único y secreto en cada solicitud que realice el usuario. Este token debe ser
              validado por el servidor para asegurarse de que la solicitud es legítima.
            </p>
          </Accordion>
          <Accordion title='Verificación de origen y referer'>
            <p>
              Verificar las cabeceras Origin y Referer de las solicitudes para asegurarse de que provienen de la fuente
              esperada. Esto puede ayudar a prevenir solicitudes maliciosas enviadas desde otros sitios.
            </p>
          </Accordion>
          <Accordion title='Cookies con atributo SameSite'>
            <p>
              Configurar las cookies con el atributo SameSite para evitar que sean enviadas en solicitudes de origen
              cruzado. Esto puede reducir significativamente la efectividad de los ataques CSRF.
            </p>
          </Accordion>
          <p>
            Estas prácticas ayudan a proteger las aplicaciones web contra ataques CSRF y a mantener la seguridad de los
            usuarios.
          </p>
        </Card>
      )}

      {data.id === 4 && (
        <Card
          title='Ejemplos de ataques CSRF'
          image='https://terasolunaorg.github.io/guideline/5.0.1.RELEASE/en/_images/csrf_check_other_site.png'
        >
          <p className='mb-4 mt-10'>
            Existen varios ejemplos de ataques CSRF que han tenido un impacto significativo en la seguridad de
            aplicaciones web. A continuación, se presentan algunos casos notables:
          </p>
          <p className='mb-4'>
            <strong>GitHub:</strong> En 2012, GitHub sufrió un ataque CSRF que permitió a los atacantes agregar claves
            SSH a las cuentas de los usuarios sin su conocimiento. Este ataque se mitigó implementando tokens CSRF en
            todas las solicitudes.
          </p>
          <p className='mb-4'>
            <strong>PayPal:</strong> Un ataque CSRF en 2006 permitió a los atacantes transferir fondos desde las cuentas
            de los usuarios autenticados. PayPal solucionó este problema implementando medidas de protección contra
            CSRF.
          </p>
          <p className='mb-4'>
            <strong>Netflix:</strong> En 2008, un ataque CSRF permitió a los atacantes cambiar la configuración de las
            cuentas de los usuarios de Netflix, incluyendo la dirección de correo electrónico asociada a la cuenta.
          </p>
        </Card>
      )}
    </div>
  )
}

export default CSRF
