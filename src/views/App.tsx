
import { AppRoute } from '../routes/AppRoute';
import './custom.scss'
import './App.css'
import './responsive.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkingLogin } from "../slice/authSlice.js";
import { fetchDataTables } from '../slice/mercaderiaSlice';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkingLogin());
  }, [dispatch]);
  return (
    <>
      <AppRoute />
    </>
  )
}

