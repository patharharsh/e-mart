import React from 'react'

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label ?: string
}

const Radio = ({label, ...props}: RadioProps) => {
  return (
    <div className='mb-2 flex items-center gap-2'>
        <input type='radio' className='checked:bg-[#00B207] text-[#00B207] focus:ring-[#00B207] focus:outline-none p-2 ' {...props} /> {label && <span className='text-base font-light ml-1'>{label}</span>}
    </div>
  )
}

export default Radio
