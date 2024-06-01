import React from 'react'

const Welcome = () => {
  return (
    <div className='p-4 overflow-auto h-full bg-gray-100'>
      <h3 className='text-lg font-bold'>
        Bienvenido al Blog de Seguridad Informática
      </h3>
      <p className='mt-4 text-lg'>
        En este blog, encontrarás una amplia gama de información sobre <strong>seguridad
          informática
                                                                       </strong>, <strong>ciberseguridad</strong> y otros temas relacionados. Nuestro objetivo es
        proporcionarte las herramientas y el conocimiento necesarios para proteger tu información y mantener tus datos
        seguros en un entorno digital cada vez más complejo y desafiante.
      </p>
      <p className='mt-4 text-lg'>
        A través de que es, tipos, como mitigar, y algunos ejemplos, te ofrecemos recursos valiosos para entender las
        amenazas actuales y las mejores prácticas para mitigarlas. Ya seas un profesional de TI, un empresario, o
        simplemente alguien interesado en la seguridad digital, aquí encontrarás contenido útil y relevante para mejorar
        tu seguridad en línea.
      </p>
      <p className='mt-4 text-lg'>
        ¡Gracias por visitarnos, esperamos que encuentres nuestro contenido informativo y útil para fortalecer tu
        seguridad digital!
      </p>

      <div className='flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg mt-6'>
        <img
          className='mt-4 rounded-xl'
          src='https://cronuts.digital/wp-content/uploads/2024/01/KM3D.png'
          alt='Seguridad Informática' width={650}
        />
      </div>

    </div>
  )
}

export default Welcome
