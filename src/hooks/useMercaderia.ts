import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addDataTable, editDataTable, fetchDataTables, removeDataTable } from '../slice/mercaderiaSlice';
import { RootState, useAppDispatch } from '../store/store';


export const useMercaderia = () => {
    /**
     * *******************HOOK USEMERCADERIA*******************
     * 
     * ***CONSTANTES***
     * |totalRegistersByPage|: numero de registros que tiene una tabla(sirve para la paginación)
     * |data|: va a el estado global y trae datos para la tabla
     * 
     * ***ESTADOS***
     * |loading|: estado de carga de los registros (true o false)
     * |mercaderias|: registros devueltos del servidor
     * |totalMercaderia|: total de registros devueltos
     * |search|: filtro de tabla, indica la busqueda del usuario
     * 
     * ***UseEFFECT***
     * |useEffect 1|: manda a hacer la peticion y actualiza el estado global ((FALTA MEJORAR MUCHO))
     * |useEffect 2|: asigna los datos del estado global a nuestros estados ((FALTA MEJORAR MUCHO))
     * 
     * ***FUNCIONES***
     * |transformaMercaderia|: selecciona los datos que queremos para nuestra tabla
     * |registerEdit|: edita un registro
     * |registerRemove|: elimina un registro
     */

    const dispatch = useAppDispatch();
    const data = useSelector((state: RootState) => state.dataTable);
    const totalRegistersByPage = 10

    const [totalMercaderia, setTotalMercaderia] = useState(0)
    const [loading, setLoading] = useState(true);
    const [mercaderias, setMercaderias] = useState([])
    const [search, setSearch] = useState('');

    const transformaMercaderia = (mercaderia) => {
        const mercaderiaArr = mercaderia.map((item) => {
            return {
                // codigo: item.CodigoMercaderia, DESCOMENTAR LUEGO
                codigo: item.id,// BORRAR LUEGO
                description: item.NombreProducto,
                unidad: item.AbreviaturaUnidadMedida,
                marca: item.NombreMarca,
            }
        })
        return mercaderiaArr;
    }

    //useEffect 1
    useEffect(() => {
        dispatch(fetchDataTables(search, '', '', ''))
    }, [search.length])

    //useEffect 2
    useEffect(() => {
        setMercaderias(transformaMercaderia(data.register))
        setTotalMercaderia(data.total)
        setLoading(data.isLoading)
    }, [data.register])


    const insertRegister=(register)=>{
        dispatch(addDataTable(register))
    }
    const editRegister = (id,register) => {
        dispatch(editDataTable(id,register))
    };
    const removeRegister = (id) => {
        dispatch(removeDataTable(id));
    };


    return {
        totalRegistersByPage,
        totalMercaderia,
        loading,
        mercaderias,
        setSearch,
        insertRegister,
        editRegister,
        removeRegister,
    }
}