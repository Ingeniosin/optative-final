import TabPanel from 'devextreme-react/tab-panel'
import Inyect from './Inyect.jsx'
import React from 'react'
import Welcome from './Welcome.jsx'

const renders = [

  () => {
    return (
      <Welcome />
    )
  },

  () => {
    return (
      <TabPanel
        width='100%'
        height='100%'
        animationEnabled
        dataSource={[
          { title: '¿Que es?', icon: 'home', id: 1 },
          { title: 'Tipos de ataque', icon: 'home', id: 2 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={Inyect}
      />
    )
  }
]

export default renders
