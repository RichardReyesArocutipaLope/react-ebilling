import { Route, Routes } from 'react-router-dom'
import { SubNav } from '../components/reactStrap/SubNav'

import { EnvioFacturas } from '../views/comprobElectronicos/EnvioFacturas'
import { ResumenDiario } from '../views/comprobElectronicos/ResumenDiario'
import { ComunicacionBaja } from '../views/comprobElectronicos/ComunicacionBaja'
import { PublicacionAlaPagina } from '../views/comprobElectronicos/PublicacionAlaPagina'
import { ResCompFisDeContingencia } from '../views/comprobElectronicos/ResCompFisDeContingencia'
import { ConsultaCPE } from '../views/comprobElectronicos/ConsultaCPE'

import { FaReceipt, FaClipboardList, FaFileExcel,FaCloudUploadAlt,FaFile } from 'react-icons/fa'

export const ComprobEletronicosRouter = () => {
  const links=[
    {
      title:'Envio de Facturas',
      path:'envio-facturas',
      icon:<FaReceipt />
    },
    {
      title:'Resumen Diario',
      path:'resumen-diario',
      icon:<FaClipboardList/>
    },
    {
      title:'Comunicacion de Baja',
      path:'comunicacion-baja',
      icon:<FaFileExcel/>
    },
    {
      title:'Publicacion a Pagina Web',
      path:'publicacion-pag-web',
      icon:<FaCloudUploadAlt/>
    },
    {
      title:'Resp. Comp. Fis. de Contingencia',
      path:'r-c-f-contigencia',
      icon:<FaFile/>
    },
    {
      title:'Consulta de CPE',
      path:'consultas-cpe',
      icon:<FaClipboardList/>
    },
  ]
  return (
    <>
      <SubNav links={links}/>
      <h1>Comprobante elecronico</h1>
      <Routes>
        <Route path="envio-facturas" element={<EnvioFacturas />} />
        <Route path="resumen-diario" element={<ResumenDiario />} />
        <Route path="comunicacion-baja" element={<ComunicacionBaja />} />
        <Route path="publicacion-pag-web" element={<PublicacionAlaPagina />} />
        <Route path="r-c-f-contigencia" element={<ResCompFisDeContingencia />} />
        <Route path="consultas-cpe" element={<ConsultaCPE/>} />
      </Routes>
    </>
  )
}
