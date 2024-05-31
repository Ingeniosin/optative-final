import React from 'react'

const Inyect = ({ data }) => {
  return (
    <div
      className='p-4' style={{
        overflow: 'auto',
        height: '100%'
      }}
    >
      <p>
        {data.id === 1 && (
          <>

            <h3 className='text-lg'>¿Qué es la inyección de código?</h3>

            <p className='mt-2'>
              La inyección de código es una técnica de ataque que consiste en insertar <strong>código
                malicioso
                                                                                       </strong> en
              aplicación o sistema para obtener acceso no autorizado o robar información.
              Los atacantes suelen utilizar esta técnica para explotar vulnerabilidades en aplicaciones web y bases de
              datos.
            </p>

            <p className='mt-2'>
              Algunos ejemplos comunes de inyección de código son la inyección de <strong>SQL</strong>, la inyección
              de <strong>JavaScript</strong> y la inyección de <strong>HTML</strong>.
              Estos ataques pueden tener consecuencias graves, como la pérdida de datos, la corrupción de archivos y la
              exposición de información confidencial.
            </p>

            <img
              src='https://cristianthous.com/wp-content/uploads/2022/02/Code-injection-e1580817731194-772x386.jpg'
              alt='SQL Injection' className='mt-4'
            />

          </>

        )}
      </p>
    </div>
  )
}

export default Inyect
