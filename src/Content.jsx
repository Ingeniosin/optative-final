import React from 'react'
import renders from './renders.jsx'

const Content = (a) => {
  const render = renders[a.data.id - 1]

  console.log(a)
  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      {
        render()
      }
    </div>
  )
}

export default Content
