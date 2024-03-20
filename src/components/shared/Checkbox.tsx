import React from 'react'


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label ?: string
}

const Checkbox = ({label, ...props}: CheckboxProps) => {
  return (
    <div>
        <input type='checkbox' className='bodrer-1 ' /> {label && <span className='text-base font-light'>{label}</span>}
    </div>
  )
}

export default Checkbox
