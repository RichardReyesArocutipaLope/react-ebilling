import { useState } from 'react';

export const useForm2 = (initialForm) => {

  let valueInputs = {}
  initialForm.forEach((items) => {
    items.forEach((input) => {
      valueInputs = {
        ...valueInputs,
        [input.name]: input.value
      }
    })
  })

  const [valueForm, setValueForm] = useState(valueInputs);

  const handleChange = e => {
    const { name, value } = e.target;
    setValueForm({
      ...valueForm,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const resetValues = () => {
    let valueInputs = {}
    initialForm.forEach((items) => {
      items.forEach((input) => {
        valueInputs = {
          ...valueInputs,
          [input.name]: input.value
        }
      })
    })

    setValueForm(valueInputs)
    console.log('reseteado');
  }

  return {
    valueForm,
    handleChange,
    handleSubmit,
    resetValues
  };
};
