import React from 'react'
import 'devextreme/dist/css/dx.material.blue.light.css'
import TabPanel from 'devextreme-react/tab-panel'
import Content from './navigation/Content.jsx'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 px-10'>
      <TabPanel
        className='dx-theme-background-color'
        width='100%'
        height='90vh'
        animationEnabled
        swipeEnabled
        dataSource={[
          { title: 'Inicio', id: 1 },
          { title: 'Inyección', id: 2 },
          { title: 'Fallas criptográficas', id: 3 },
          { title: 'Componentes vulnerables', id: 4 },
          { title: 'Falsificación de solicitudes', id: 5 },
          { title: 'Fallas registro y monitoreo', id: 6 }
        ]}
        tabsPosition='left'
        iconPosition='top'
        itemComponent={Content}
      />
    </div>
  )
}

export default App
