import React from 'react'

function GridCard({ className, children }) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default GridCard