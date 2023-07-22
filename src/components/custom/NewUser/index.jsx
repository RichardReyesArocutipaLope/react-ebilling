import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { SubNav } from '../../components/SubNav';
import { Form } from '../../components/Form';
import { useForm } from '../../hooks/useForm';
import { Validator } from '../../libs/validations';
import { InputText } from '../../components/InputText';
import { InputPassword } from '../../components/InputPassword';
import { InputSelect } from '../../components/InputSelect';
import { createAdaptedUserPost } from '../../adapters/users';
import './NewUser.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice';

const initialForm = {
  username: '',
  password: '',
  role: '',
  name: '',
  lastname: '',
  email: '',
  phone: '',
  status: '1'
};

const validationForm = form => {
  const dispatch = useDispatch();
  const validator = new Validator();

  validator.setRules({
    username: 'required',
    password: 'required',
    role: 'required',
    name: 'required',
    lastname: 'required',
    email: 'required|is_email',
    status: 'required'
  });

  validator.run(form);

  return validator.getErrors();
};

const callbackSubmit = async (form, setLoading) => {
  dispatch(addUser(form), setLoading);
};

const NewUser = () => {
  const { form, errors, loading, response, handleChange, handleSubmit } =
    useForm(initialForm, validationForm, callbackSubmit);

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    console.log('HAAAAAAA');
    const handleRoles = async () => {
      await axios
        .get('/api/rol', {
          withCredentials: 'include'
        })
        .then(res => setRoles(res.data))
        .catch(error => console.log(error));
    };

    handleRoles();
  }, []);

  const printRoles = [];

  roles.map(rol =>
    printRoles.push({
      id: rol.rol_denominacion,
      label: rol.rol_denominacion,
      value: rol.id_rol.toString()
    })
  );

  // console.log(printRoles);

  return (
    <React.Fragment>
      <Header></Header>
      <Nav />
      <SubNav />
      <div className="newuser">
        <h1 className="newuser__title">Nuevo Usuario</h1>
        <Card>
          <div className="newuser__content">
            <Form
              onSubmit={handleSubmit}
              btnText="Guardar"
              loading={loading}
              cancel
              columns="3"
              padding
            >
              <InputText
                label="Usuario"
                name="username"
                // placeholder="Usuario"
                onChange={handleChange}
                value={form.username}
                error={errors.username}
              />
              <InputPassword
                label="Contraseña"
                name="password"
                // placeholder="Contraseña"
                onChange={handleChange}
                value={form.password}
                error={errors.password}
              />
              {/* {console.log('WEYYYYYYYYY')} */}
              <InputSelect
                label="Rol"
                name="role"
                default="Seleccione una opción"
                options={printRoles}
                onChange={handleChange}
                value={form.role}
                error={errors.role}
              />
              <InputText
                label="Nombres"
                name="name"
                // placeholder="Nombres"
                onChange={handleChange}
                value={form.name}
                error={errors.name}
              />
              <InputText
                label="Apellidos"
                name="lastname"
                // placeholder="Apellidos"
                onChange={handleChange}
                value={form.lastname}
                error={errors.lastname}
              />
              <InputText
                label="Correo electrónico"
                name="email"
                // placeholder="Correo electrónico"
                onChange={handleChange}
                value={form.email}
                error={errors.email}
              />
              <InputText
                label="Número de télefono"
                name="phone"
                // placeholder="Número de télefono"
                onChange={handleChange}
                value={form.phone}
                error={errors.phone}
              />
              <InputSelect
                label="Estatus"
                name="status"
                options={[
                  {
                    id: 'active',
                    label: 'Activo',
                    value: '1'
                  },
                  {
                    id: 'inactive',
                    label: 'Inactivo',
                    value: '0'
                  }
                ]}
                onChange={handleChange}
                value={form.status}
                error={errors.status}
              />
            </Form>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export { NewUser };
