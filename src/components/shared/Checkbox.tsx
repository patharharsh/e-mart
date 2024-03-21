import React from 'react'


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label ?: string
}

const Checkbox = ({label, ...props}: CheckboxProps) => {
  return (
    <div>
          <input type='checkbox' className='bodrer-1 checked:bg-[#00B207] text-[#00B207] focus:outline-none focus:ring-0' {...props} /> {label && <span className='text-base font-light ml-2'>{label}</span>}
    </div>
  )
}

export default Checkbox
