import React from 'react'
import Radio from './Radio'


interface RadioGroupProps {
    values : string[]
    name : string
    seletedValue?: string
    handleChange?: any
}

const RadioGroup = ({values, name, seletedValue, handleChange}: RadioGroupProps) => {
  return (
    <div>
      {values?.map((value : string, index: number) => <Radio key={index} label={value} name={name} value={value} checked={value === seletedValue} onChange={() => handleChange(value)}  />)}
    </div>
  )
}

export default RadioGroup
