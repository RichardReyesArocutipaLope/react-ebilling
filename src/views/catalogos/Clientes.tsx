import "./Clientes.css";
import photoRegister from "../../assets/img-varios/react.png";
import { RegistroInfo } from "../../components/custom/RegistroInfo";
import { DataTable } from "../../components/reactStrap/DataTable";
import { useMercaderia } from "../../hooks/useMercaderia";
import { Loading1 } from "../../components/custom/loading/Loading1";
import { useState } from "react";

//ruta="Catalogo/cMercaderia/ConsultarMercaderias"
export const Clientes = () => {

  const { totalRegistersByPage, totalMercaderia, loading, mercaderias,
     setSearch, insertRegister, editRegister, removeRegister, } = useMercaderia();
  
  const [dataRegister, setDataRegister] = useState({})

  const thLabels = [
    {
      label: "Código",
      width: "6rem",
    },
    {
      label: "Descripción",
      width: "calc( 100% - 23rem)",
    },
    {
      label: "Unidad",
      width: "10rem",
    },
    {
      label: "Marca",
      width: "10rem",
    },
    {
      label: "",
      width: "10rem",
    },
  ];

  const onClickRegister = (register) => { 
    setDataRegister(register)  
  }

  if (loading) {
    return <Loading1 />;
  }

  return (
    <div className="content__container">
      <div className="content__wrapper">
        <div className="content__main">
          <DataTable
            thLabels={thLabels}
            tdData={mercaderias}
            totalRegisters={totalMercaderia}
            totalRegistersByPage={totalRegistersByPage}
            setSearch={setSearch}
            insertRegister={insertRegister}
            editRegister={editRegister}
            removeRegister={removeRegister}
            onClickRegister={onClickRegister}
          />
        </div>
      </div>
      <RegistroInfo photoRegister={photoRegister} dataRegister={dataRegister} />
    </div>
  );
};
