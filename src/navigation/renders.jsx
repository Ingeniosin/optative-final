import TabPanel from 'devextreme-react/tab-panel'
import Inyect from '../vulnerabilities/Inyect.jsx'
import React from 'react'
import Welcome from './Welcome.jsx'
import CryptoFaults from '../vulnerabilities/CryptoFaults.jsx'
import VulnerableComponents from '../vulnerabilities/VulnerableComponents.jsx'
import CSRF from '../vulnerabilities/CSRF.jsx'
import LoggingMonitoringFaults from '../vulnerabilities/LoggingMonitoringFaults.jsx'

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
          { title: '¿Que es?', id: 1 },
          { title: 'Tipos de ataque', id: 2 },
          { title: 'Prevención', id: 3 },
          { title: 'Ejemplos', id: 4 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={Inyect}
        swipeEnabled
      />
    )
  },

  () => {
    return (
      <TabPanel
        width='100%'
        height='100%'
        animationEnabled
        dataSource={[
          { title: '¿Que es?', id: 1 },
          { title: 'Tipos de ataque', id: 2 },
          { title: 'Prevención', id: 3 },
          { title: 'Ejemplos', id: 4 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={CryptoFaults}
        swipeEnabled
      />
    )
  },

  () => {
    return (
      <TabPanel
        width='100%'
        height='100%'
        animationEnabled
        dataSource={[
          { title: '¿Que es?', id: 1 },
          { title: 'Tipos de ataque', id: 2 },
          { title: 'Prevención', id: 3 },
          { title: 'Ejemplos', id: 4 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={VulnerableComponents}
        swipeEnabled
      />
    )
  },

  () => {
    return (
      <TabPanel
        width='100%'
        height='100%'
        animationEnabled
        dataSource={[
          { title: '¿Que es?', id: 1 },
          { title: 'Tipos de ataque', id: 2 },
          { title: 'Prevención', id: 3 },
          { title: 'Ejemplos', id: 4 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={CSRF}
        swipeEnabled
      />
    )
  },

  () => {
    return (
      <TabPanel
        width='100%'
        height='100%'
        animationEnabled
        dataSource={[
          { title: '¿Que es?', id: 1 },
          { title: 'Tipos de ataque', id: 2 },
          { title: 'Prevención', id: 3 },
          { title: 'Ejemplos', id: 4 }
        ]}
        tabsPosition='top'
        iconPosition='top'
        itemComponent={LoggingMonitoringFaults}
        swipeEnabled
      />
    )
  }
]

export default renders
