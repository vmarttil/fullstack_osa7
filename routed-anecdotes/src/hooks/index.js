import React, { useState } from 'react'

export const useField = (type) => {
  
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const parameters = {type, value, onChange}

  return {
    parameters,
    reset
  }
}
