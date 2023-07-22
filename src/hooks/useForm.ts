import { useState } from 'react';

export const useForm = (initialState:any) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }

  const handleInputChange = ({ target }:any) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  }

  const setEsta = (obj:any) => {
    setValues(obj)
  }

  return [values, handleInputChange, reset, setEsta];
}