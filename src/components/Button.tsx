import React from 'react'

const Button: React.FC = ({ children }) => (
  <button className="bg-blue-500 hover:bg-blue-800 text-white p-2 rounded">
    {children}
  </button>
)

export default Button
