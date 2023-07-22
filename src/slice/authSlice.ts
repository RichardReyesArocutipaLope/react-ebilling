import { createSlice } from '@reduxjs/toolkit';
import { getLogin } from '../api/auth';

const initialState = {
  status: 'authenticated', // 'not-authenticated', 'authenticated'
  name:'',
  lastName:'',
  businessName:'',
  ruc:'',
  rol:'',
  id:'',
  error:0,
  errorMessage:'',
}

const fetchStartLogin = (email, password) => async dispatch => {
  try {
    const formData = new FormData();
    formData.append('nombreusuario', email);
    formData.append('claveusuario', password);
    const responseLogin = await getLogin(formData);
    const bodyLogin = await responseLogin.json();
    if (bodyLogin[0].IdUsuario){
      localStorage.setItem('email', `${email}`);
      localStorage.setItem('pass', `${password}`);
      dispatch(authLogin(bodyLogin[0]));
    } else {
      dispatch(setErrorMessage(bodyLogin))
      dispatch(setError())
    }
  } catch (err) {
    dispatch(setErrorMessage('Error 500'))
    dispatch(setError())
    console.log('error fetch login',err)
  }
}

const setLogout = () => dispatch => {
  try {
    localStorage.clear();
    dispatch(authLogout());
  } catch (err) {
    console.log(err);
  }
};

const checkingLogin = () => async dispatch => {
  try {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('pass');
    const formData = new FormData();
    formData.append('nombreusuario', email);
    formData.append('claveusuario', password);
    const responseLogin = await getLogin(formData);
    const bodyLogin = await responseLogin.json();
    console.log('checking',bodyLogin)
    if (bodyLogin[0].IdUsuario){
      localStorage.setItem('email', `${email}`);
      localStorage.setItem('pass', `${password}`);
      dispatch(authLogin(bodyLogin[0]));
    } else {
      dispatch(setNotAuthenticated())
    }
  } catch (err) {
    dispatch(setNotAuthenticated())
    console.log('error',err)
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.name = payload.NombreCompleto;
      state.lastName = payload.ApellidoCompleto;
      state.businessName = payload.RAZON_SOCIAL;
      state.ruc = payload.RUC_EMPRESA;
      state.rol = payload.NombreRol;
      state.id = payload.IdUsuario;
    },
    authLogout: (state) => {
      state.status = 'not-authenticated';
      state.name = '';
      state.rol = '';
      state.id = '';
      state.error = 0;
    },
    setError: (state) => {
      state.error += 1;
    },
    setCheking: (state) => {
      state.status = 'checking';
    },
    setNotAuthenticated: (state) => {
      state.status = 'authenticated';
    },
    setErrorMessage: (state,{ payload }) => {
      state.errorMessage=payload 
    }
  }
})

export { fetchStartLogin, setLogout, checkingLogin };
export const {authLogin, authLogout, setError,setCheking,setNotAuthenticated,setErrorMessage} = authSlice.actions;
export default authSlice.reducer;
