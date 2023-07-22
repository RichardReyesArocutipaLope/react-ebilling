import React from 'react'
import './ModalStrap.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2'
import { useForm2 } from '../../hooks/useForm2';
import { InputsGroup } from '../custom/InputsGroup';


export const ModalStrap = ({ modal, toggle, title, insertRegister }) => {

  enum TYPEINPUT {
    TEXT = 'text',
    BUTTON = 'button',
    CHECKBOX = 'checkbox',
    COLOR = 'color',
    DATE = 'date',
    DATETIME = 'datetime',
    DATETIME__LOCAL = 'datetime-local',
    EMAIL = 'email',
    FILE = 'file',
    HIDDEN = 'hidden',
    IMAGE = 'image',
    MONTH = 'month',
    NUMBER = 'number',
    PASSWORD = 'password',
    RADIO = 'radio',
    RANGE = 'range',
    RESET = 'reset',
    SEARCH = 'search',
    SUBMIT = 'submit',
    TEL = 'tel',
    TIME = 'time',
    URL = 'url',
    WEEK = 'week',
    SELECT = 'select',
    TEXTAREA = 'textarea',
  }

  const initialForm3 = [
    [
      {
        col: 6,
        name: 'tipoDocumento',
        value: 'OTROS',
        label: 'Tipo Documento',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'OTROS',
            label: 'OTROS',
            value: 'OTROS'
          },
          {
            id: 'DNI',
            label: 'DNI',
            value: 'DNI'
          },
          {
            id: 'CARNET EXT',
            label: 'CARNET EXT',
            value: 'CARNET EXT'
          },
          {
            id: 'RUC',
            label: 'RUC',
            value: 'RUC'
          },
          {
            id: 'PASAPORTE',
            label: 'PASAPORTE',
            value: 'PASAPORTE'
          },
          {
            id: 'CED. DIPLOMAT.',
            label: 'CED. DIPLOMAT.',
            value: 'CED. DIPLOMAT.'
          },
          {
            id: 'SIN DOCUMENTO',
            label: 'SIN DOCUMENTO',
            value: 'SIN DOCUMENTO'
          },
        ]
      },
      {
        col: 6,
        name: 'estadoCondicion',
        value: '',
        label: 'Estado y Condicion',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //==============
    [
      {
        col: 6,
        name: 'numDocumento',
        value: '',
        label: 'N Documento',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'tipoPersona',
        value: 'P. NATURAL',
        label: 'Tipo Persona',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'JURÍDICA',
            label: 'P. JURÍDICA',
            value: 'P. JURÍDICA'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //================
    [
      {
        col: 12,
        name: 'razonSocial',
        value: '',
        label: 'Razón Social',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================  

    [
      {
        col: 6,
        name: 'nombres',
        value: '',
        label: 'Nombres',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'apellidos',
        value: '',
        label: 'Apellidos',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================    
    [
      {
        col: 12,
        name: 'direccion',
        value: '',
        label: 'Dirección',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================     
    [
      {
        col: 12,
        name: 'nombreComercial',
        value: '',
        label: 'Nombre Comercial',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 12,
        name: 'representanteLegal',
        value: '',
        label: 'Representante Legal',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 12,
        name: 'correo',
        value: '',
        label: 'Correo Electronico',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 6,
        name: 'celular',
        value: '',
        label: 'Celular',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'telefono',
        value: '',
        label: 'Telefono',
        typeInput: TYPEINPUT.TEXT
      },
    ],

    [
      {
        col: 12,
        name: 'fechaNacimiento',
        value: '',
        label: 'Fecha Nacimiento',
        typeInput: TYPEINPUT.TEXT
      },
    ],

    [
      {
        col: 12,//bosstrap
        name: 'observaciones',
        value: '',
        rows: 3,
        cols: 90,//no es necesario
        label: 'Observaciones',
        typeInput: TYPEINPUT.TEXTAREA
      },
    ],
    //================
    [
      {
        col: 4,
        name: 'estadoCliente',
        value: '',
        label: 'Estado Cliente',
        typeInput: TYPEINPUT.CHECKBOX
      },
    ],
    //================
    [
      {
        col: 4,
        name: 'FotoCliente',
        value: '',
        label: 'Foto',
        typeInput: TYPEINPUT.FILE
      },
    ],
  ]

  const initialForm = [
    [
      {
        col: 4,
        name: 'codigo',
        value: '',
        label: 'Código',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 2,
        name: 'editar',
        value: '',
        label: 'Editar',
        typeInput: TYPEINPUT.CHECKBOX
      },
      {
        col: 6,
        name: 'tipoExistencia',
        value: '',
        label: 'Tipo Existencia',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //==============
    [
      {
        col: 6,
        name: 'familia',
        value: 'NO ESPECIFICADO',
        label: 'Familia',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
      {
        col: 6,
        name: 'subfamilia',
        value: 'NO ESPECIFICADO',
        label: 'Sub Familia',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //================
    [
      {
        col: 6,
        name: 'NombreMarca',
        value: 'NO ESPECIFICADO',
        label: 'Marca',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
      {
        col: 6,
        name: 'modelo',
        value: 'NO ESPECIFICADO',
        label: 'Modelo',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //================  

    [
      {
        col: 6,
        name: 'linea-producto',
        value: 'NO ESPECIFICADO',
        label: 'Linea Producto',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
      {
        col: 6,
        name: 'fabricante',
        value: 'NO ESPECIFICADO',
        label: 'Fabricante',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //================    
    [
      {
        col: 6,
        // name: 'n-serie',
        name: 'AbreviaturaUnidadMedida',
        value: '',
        label: 'N° Serie',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'n-motor',
        value: '',
        label: 'N° Motor',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================     
    [
      {
        col: 6,
        name: 'n-placa',
        value: '',
        label: 'N° Placa',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'año',
        value: '',
        label: 'Año',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 6,
        name: 'color',
        value: '',
        label: 'Color',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'textura',
        value: '',
        label: 'Textura',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 6,
        name: 'talla',
        value: '',
        label: 'Talla',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'tamaño',
        value: '',
        label: 'Tamaño',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 12,
        name: 'NombreProducto',
        value: '',
        label: 'Descripcion',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================ 
    [
      {
        col: 12,
        name: 'beneficios',
        value: '',
        label: 'Beneficios',
        typeInput: TYPEINPUT.TEXT
      },
    ],

    [
      {
        col: 6,
        name: 'origen-mercaderia',
        value: 'NO ESPECIFICADO',
        label: 'Origen Mercaderia',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
      {
        col: 6,
        name: 'otros-datos',
        value: '',
        label: 'Otros Datos',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================
    [
      {
        col: 6,
        name: 'unidad-medida',
        value: 'NO ESPECIFICADO',
        label: 'Unidad Medida',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
      {
        col: 6,
        name: 'peso-kg',
        value: '',
        label: 'Peso(KG)',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //================
    [
      {
        col: 6,
        name: 'fecha-vencimiento',
        value: '',
        label: 'Fecha Vencimiento',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 6,
        name: 'moneda',
        value: 'NO ESPECIFICADO',
        label: 'Moneda',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],

    //================
    [
      {
        col: 4,
        name: 'precio-unitario',
        value: '',
        label: 'Precio Unitario',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 4,
        name: 'stock-minimo',
        value: '',
        label: 'Stock Mínimo',
        typeInput: TYPEINPUT.TEXT
      },
      {
        col: 4,
        name: 'stock-maximo',
        value: '',
        label: 'Stock Máximo',
        typeInput: TYPEINPUT.TEXT
      },
    ],
    //======================
    [
      {
        col: 2,
        name: 'igv',
        value: 'afecto-igv',
        label: 'Afecto IGV',
        typeInput: TYPEINPUT.RADIO
      },
      {
        col: 2,
        name: 'igv',
        value: 'exonerado-igv',
        label: 'Exonerado IGV',
        typeInput: TYPEINPUT.RADIO
      },
      {
        col: 2,
        name: 'igv',
        value: 'inafecto-igv',
        label: 'Inafecto IGV',
        typeInput: TYPEINPUT.RADIO
      },
      {
        col: 6,
        name: 'tipo-sistema-calculo-isc',
        value: 'NO ESPECIFICADO',
        label: 'Tipo Sistema Calculo ISC',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //==================0
    [
      {
        col: 3,
        name: 'afecto-icbper',
        value: '',
        label: 'Afecto ICBPER',
        typeInput: TYPEINPUT.CHECKBOX
      },
      {
        col: 3,
        name: 'estado-mercaderia',
        value: '',
        label: 'Estado Mercaderia',
        typeInput: TYPEINPUT.CHECKBOX
      },
      {
        col: 6,
        name: 'forma-de-calculo',
        value: 'NO ESPECIFICADO',
        label: 'Form de Calculo',
        typeInput: TYPEINPUT.SELECT,
        options: [
          {
            id: 'NO ESPECIFICADO',
            label: 'NO ESPECIFICADO',
            value: 'NO ESPECIFICADO'
          },
          {
            id: 'NATURAL',
            label: 'P. NATURAL',
            value: 'P. NATURAL'
          },
          {
            id: 'DOMICILIADO',
            label: 'NO DOMICILIADO',
            value: 'NO DOMICILIADO'
          },
        ]
      },
    ],
    //================
    [
      {
        col: 6,
        name: 'foto-mercaderia',
        value: '',
        label: 'Foto Mercaderia',
        typeInput: TYPEINPUT.FILE
      },
      {
        col: 6,
        name: 'codigo-barras',
        value: '',
        label: 'Código Barras',
        typeInput: TYPEINPUT.FILE
      },
    ],
  ]

  const { valueForm, handleChange, handleSubmit, resetValues } = useForm2(initialForm);


  const onInsert = (register) => {
    Swal.fire({
        title: 'Seguro que desea insertar este registro?',
        text: "¡No podrás revertir esto!",
        icon: 'question',
        showCancelButton: true,
        background:'var(--bg-three-color-white)',
        color: 'var(--text-seven-color-black)',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'Cancelar',
        confirmButtonText: '¡Sí, Insertalo!'
    }).then((result) => {
        if (result.isConfirmed) {
          insertRegister(register)
            Swal.fire(
                '¡Insertado!',
                'Su registro ha sido insertado.',
                'success'
            )
          toggle()
        }
    })
}
  return (

    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <form className="form-modal" onSubmit={handleSubmit}>
          <div className='form-modal__wrapper'>
            {initialForm.map((group) => (
              <InputsGroup key={group[0].name} inputs={group} valueForm={valueForm} handleChange={handleChange} />
            ))}

          </div>
          <div className='form-modal__options'>
            <Button color="primary" type='submit' onClick={() => {onInsert(valueForm)}
            }>
              Grabar
            </Button>
            <Button color="secondary" onClick={resetValues}>
              Limpiar
            </Button>
            <Button color="danger" onClick={toggle}>
              Cerrar
            </Button>
            <div className='modal-footer__warning'>
              <p>&#40;*&#41; Campos obligatorios</p>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}
