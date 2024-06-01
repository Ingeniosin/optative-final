import React, { useState } from 'react'

const EncryptDecryptComponent = () => {
  const [text, setText] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  const [decryptedText, setDecryptedText] = useState('')
  const secretKey = 'mysecretkey'

  const handleEncrypt = () => {
    // Uso inseguro de cifrado con XOR
    let encrypted = ''
    for (let i = 0; i < text.length; i++) {
      encrypted += String.fromCharCode(text.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length))
    }
    setEncryptedText(encrypted)
  }

  const handleDecrypt = () => {
    // Uso inseguro de descifrado con XOR
    let decrypted = ''
    for (let i = 0; i < encryptedText.length; i++) {
      decrypted += String.fromCharCode(encryptedText.charCodeAt(i) ^ secretKey.charCodeAt(i % secretKey.length))
    }
    setDecryptedText(decrypted)
  }

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Encrypt and Decrypt Text</h1>
      <div className='mb-4'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='border p-2 w-full'
          placeholder='Enter text to encrypt'
        />
      </div>
      <button
        onClick={handleEncrypt}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Encrypt
      </button>
      <div className='mt-4'>
        <textarea
          value={encryptedText}
          readOnly
          className='border p-2 w-full'
          rows='4'
          placeholder='Encrypted text will appear here'
        />
      </div>
      <button
        onClick={handleDecrypt}
        className='bg-green-500 text-white px-4 py-2 rounded mt-4'
      >
        Decrypt
      </button>
      <div className='mt-4'>
        <textarea
          value={decryptedText}
          readOnly
          className='border p-2 w-full'
          rows='4'
          placeholder='Decrypted text will appear here'
        />
      </div>
    </div>
  )
}
const Card = ({ title, children, image }) => (
  <div className='flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg mt-6'>
    <h3 className='text-2xl font-bold mb-4'>{title}</h3>
    <div className='grid grid-cols-2 gap-4'>
      <img
        className='mb-4 rounded-xl'
        style={{
          maxHeight: '400px'
        }}
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

const CryptoFaults = ({ data }) => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      {data.id === 1 && (
        <Card
          title='¿Qué son las fallas criptográficas?'
          image='https://i.ytimg.com/vi/nnPIOqzzLfk/sddefault.jpg?v=63769d3b'
        >
          <p className='mb-2 mt-12'>
            <strong>Las fallas criptográficas</strong> son vulnerabilidades en los <strong>algoritmos de
              cifrado
                                                                                   </strong> o en su <strong>implementación</strong> que pueden ser explotadas para comprometer la
            seguridad de los datos protegidos. Estas fallas pueden permitir a los atacantes:
          </p>
          <ul className='list-disc ml-6'>
            <li>
              <strong>Descifrar información confidencial:</strong> Los atacantes pueden acceder a datos que deberían
              permanecer seguros y privados, exponiendo información sensible.
            </li>
            <li>
              <strong>Falsificar datos:</strong> La integridad de los datos puede ser comprometida, permitiendo que se
              alteren sin autorización.
            </li>
            <li>
              <strong>Suplantar identidades:</strong> Los atacantes pueden hacerse pasar por usuarios legítimos,
              accediendo a recursos y realizando acciones en su nombre.
            </li>
          </ul>
          <p>
            Las fallas pueden surgir por diversos motivos, tales como:
          </p>
          <ul className='list-disc ml-6'>
            <li>
              <strong>Debilidades inherentes en los algoritmos:</strong> Algunos algoritmos pueden tener
              vulnerabilidades conocidas que los hacen inseguros.
            </li>
            <li>
              <strong>Errores en la implementación del software:</strong> Incluso si un algoritmo es seguro, su
              implementación incorrecta puede introducir vulnerabilidades.
            </li>
            <li>
              <strong>Configuraciones incorrectas:</strong> Una mala configuración de los sistemas criptográficos puede
              hacer que estos sean ineficaces o incluso inseguros.
            </li>
          </ul>
          <p>
            Es crucial estar al tanto de estas vulnerabilidades para proteger adecuadamente los sistemas de información.
            Implementar las mejores prácticas y mantenerse actualizado sobre los últimos desarrollos en seguridad
            criptográfica es fundamental para mitigar los riesgos asociados.
          </p>
        </Card>
      )}

      {data.id === 2 && (
        <Card
          title='Tipos de fallas criptográficas'
          image='https://www.criptonoticias.com/wp-content/uploads/2017/05/bug-image-code-problem.jpg'
        >
          <p>
            Existen varios tipos de fallas criptográficas, cada uno con sus propias características y consecuencias.
            Algunos de los más comunes son:
          </p>

          <Accordion title='Fuerza bruta'>
            <p>
              La fuerza bruta es un método en el que los atacantes prueban todas las combinaciones posibles de claves
              hasta encontrar la correcta. Este tipo de ataque puede ser mitigado utilizando claves de longitud adecuada
              y algoritmos seguros.
            </p>
          </Accordion>

          <Accordion title='Criptoanálisis de texto plano elegido'>
            <p>
              En este tipo de ataque, el atacante obtiene tanto el texto cifrado como el texto plano correspondiente
              para realizar un análisis y encontrar la clave de cifrado. Es fundamental usar técnicas de cifrado que
              resistan este tipo de análisis.
            </p>
          </Accordion>

          <Accordion title='Errores de implementación'>
            <p>
              Los errores de implementación ocurren cuando los algoritmos criptográficos no se implementan correctamente
              en el software, lo que puede crear vulnerabilidades explotables. Es importante seguir las mejores
              prácticas y estándares al implementar cifrados.
            </p>
          </Accordion>

          <p>
            Estos son solo algunos ejemplos de los tipos de fallas criptográficas que existen. Es esencial mantenerse
            informado sobre las técnicas de ataque y las mejores prácticas de seguridad para proteger los sistemas.
          </p>
        </Card>
      )}

      {data.id === 3 && (
        <Card
          title='Prevención de fallas criptográficas'
          image='https://www.icann.org/sites/default/files/assets/root-zone-ksk-rollover-500x500-09may16-en.jpg'
        >
          <p>
            Para prevenir fallas criptográficas, es crucial seguir buenas prácticas de seguridad en el diseño e
            implementación de sistemas criptográficos. Algunas medidas a considerar incluyen:
          </p>
          <Accordion title='Uso de algoritmos robustos'>
            <p>
              Seleccionar algoritmos criptográficos que hayan sido ampliamente analizados y considerados seguros por la
              comunidad criptográfica.
            </p>
          </Accordion>
          <Accordion title='Implementación segura'>
            <p>
              Seguir estándares y guías de mejores prácticas para la implementación de algoritmos criptográficos,
              evitando errores comunes que puedan introducir vulnerabilidades.
            </p>
          </Accordion>
          <Accordion title='Gestión adecuada de claves'>
            <p>
              Implementar una gestión segura de claves, incluyendo la generación, almacenamiento y rotación de claves de
              manera segura.
            </p>
          </Accordion>
          <p>
            Estas son solo algunas de las medidas que se pueden tomar para prevenir fallas criptográficas. Es esencial
            estar al tanto de las últimas técnicas y recomendaciones de seguridad para mantener los sistemas protegidos.
          </p>
        </Card>
      )}

      {data.id === 4 && (
        <Card
          title='Ejemplos de fallas criptográficas'
          image='https://security.salesforce.com/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F81XL5fJ3SOy5oEKB0STw&w=1920&q=75'
        >

          <p className='mb-4'>
            El cifrado XOR es un ejemplo de un cifrado inseguro que puede ser vulnerable a ataques de criptoanálisis.
          </p>

          <p>
            El siguiente ejemplo muestra cómo se puede cifrar y descifrar un texto utilizando XOR con una clave secreta.
            sin embargo, este método es inseguro y no debe utilizarse en aplicaciones reales.
          </p>

          <EncryptDecryptComponent />

        </Card>
      )}
    </div>
  )
}

export default CryptoFaults
