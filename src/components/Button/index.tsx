import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className="bg-blue-500 hover:bg-blue-800 text-white p-2 rounded">
    {children}
  </button>
)

export default Button
