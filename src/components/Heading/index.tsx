import * as React from 'react'

export interface HeadingProps {
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => (
  <h2 className={`text-4xl font-bold leading-10 ${className}`}>{children}</h2>
)

export default Heading
