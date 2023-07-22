class Rules {
    messages = {
      required: 'Campo requerido',
      is_email: 'No es una correo electrónico válido'
    };
  
    required(data) {
      data = data.toString();
      return data.trim() !== '';
    }
  
    is_email(data) {
      const expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
      data = data.toString();
      return expresion.test(data);
    }
  }
  
  export { Rules };
  