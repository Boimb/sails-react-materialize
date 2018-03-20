import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      { year }
    </footer>
  )
}

export default Footer
