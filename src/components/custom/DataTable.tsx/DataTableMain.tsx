import { Table } from "reactstrap";
import { FaPenSquare, FaTrash, } from "react-icons/fa";
import Swal from 'sweetalert2'
export const DataTableMain = ({ thLabels, sliceMercaderias, editRegister, removeRegister, onClickRegister }) => {

    const onRemove = (id) => {
        Swal.fire({
            title: 'Seguro que desea borrar este registro?',
            text: "¡No podrás revertir esto!",
            icon: 'question',
            showCancelButton: true,
            background:'var(--bg-three-color-white)',
            color: 'var(--text-seven-color-black)',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:'Cancelar',
            confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeRegister(id)
                Swal.fire(
                    '¡Eliminado!',
                    'Su registro ha sido eliminado.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="data-table__main">
            <Table hover>
                <thead>
                    <tr>
                        {thLabels.map((item) => (
                            <th key={item.label} style={{ width: `${item.width}` }}>
                                {item.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="data-table__tbody">
                    {sliceMercaderias().map((element) => (
                        <tr key={element.codigo} onClick={() => { onClickRegister(element) }}>
                            <td>{element.codigo}</td>
                            <td>{element.description}</td>
                            <td>{element.unidad}</td>
                            <td>{element.marca}</td>
                            <td>
                                <div className="data-table__actions">
                                    <span
                                        className="pagination-button pagination-button--edit"
                                        onClick={() => editRegister(element.codigo, JSON.stringify({ x: 5, y: 6 } ))}
                                    >
                                        <FaPenSquare />
                                    </span>
                                    <span
                                        className="pagination-button pagination-button--delete"
                                        onClick={() => { onRemove(element.codigo) }}
                                    >
                                        <FaTrash />
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
