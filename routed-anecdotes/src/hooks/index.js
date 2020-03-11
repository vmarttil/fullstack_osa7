import React, { useState } from 'react'

export const useField = () => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    value,
<<<<<<< HEAD
    onChange, 
    reset
=======
    setValue,
    onChange
>>>>>>> 9dd5916267fdbee0770b4f9e9bf0e56687e4ebda
  }
}