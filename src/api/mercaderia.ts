import axios from 'axios';

const getDataTables = (search='',pag,total,ruta) =>
  axios
    // .get(`http://192.168.18.9:8099/xpmegan/index.php/${ruta}?Data[textofiltro]=${search}&Data[pagina]=${pag}&Data[numerofilasporpagina]=${total}&Data[paginadefecto]=1`, {
    // })
    .get(`http://localhost:3000/resultado?q=${search}`, {
    })
    .then(res => res.data)
    .catch(error => console.log(error));

const getDataTable = id =>
  axios
    .get('http://localhost:3000/resultado' + id)
    .then(res => res.data)
    .catch(error => console.log(error));

const postDataTable = register =>
  axios
    .post('http://localhost:3000/resultado', register)
    .then(res => res.data)
    .catch(error => console.log(error));

const putDataTable = (id, register) =>
  axios
    .put('http://localhost:3000/resultado/' + id, register)
    .then(res => res.data)
    .catch(error => console.log(error));

const deleteDataTable = id =>
  axios
    .delete('http://localhost:3000/resultado/' + id)
    .then(res => res.data)
    .catch(error => console.log(error));

export { getDataTables, getDataTable, postDataTable, putDataTable, deleteDataTable };
