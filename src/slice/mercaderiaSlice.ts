import { createSlice } from '@reduxjs/toolkit';
import {
  getDataTables, getDataTable, postDataTable, putDataTable, deleteDataTable 
} from '../api/mercaderia';

const initialState = {
  register: [],
  total: 0,
  isLoading:true,
  success:false,
};

const fetchDataTables = (search,pag,total,ruta) => async dispatch => {
  try {
    dispatch(setIsLoading(true))
    dispatch(setSuccess(false))
    const response = await getDataTables(search,pag,total,ruta);
    dispatch(totalDataTables(response.length))
    dispatch(setDataTables(response))
    dispatch(setIsLoading(false))
    dispatch(setSuccess(true))
    console.log(search);
  } catch (err) {
    dispatch(setSuccess(false))
    console.log(err);
  }
  return new Promise(resolve => {resolve('hola')});
};

const fetchDataTable = id => async () => {
  try {
    const response = await getDataTable(id);
    // return adaptedDataTable(response);
  } catch (err) {
    console.log(err);
  }
};

const addDataTable = (register) => async dispatch => {
  try {
    await postDataTable(register);
    dispatch(fetchDataTables('','','',''))
  } catch (err) {
    console.log(err);
  }
};

const editDataTable = (id,register) => async dispatch => {
  try {
    await putDataTable(id,register);
    dispatch(fetchDataTables('','','',''))
  } catch (err) {
    console.log(err);
  }
};

const removeDataTable = id => async dispatch => {
  await deleteDataTable(id);
  dispatch(fetchDataTables('','','',''))
};

const mercaderiaSlice = createSlice({
  name: 'DataTable',
  initialState,
  reducers: {
    totalDataTables: (state, action) => {
      state.total = action.payload;
    },
    setDataTables: (state, action) => {
      state.register = action.payload;
    },
    setIsLoading:(state,action)=>{
      state.isLoading=action.payload
    },
    setSuccess:(state, action)=>{
      state.success=action.payload
    },
  }
});

export { fetchDataTables, fetchDataTable, addDataTable, editDataTable, removeDataTable };
export const { totalDataTables, setDataTables, setIsLoading,setSuccess } = mercaderiaSlice.actions;
export default mercaderiaSlice.reducer;
