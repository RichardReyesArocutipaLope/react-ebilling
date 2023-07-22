import "./DataTable.css";
import { useState } from "react";
import { DataTableFooter } from "../custom/DataTable.tsx/DataTableFooter";
import { DataTableHeader } from "../custom/DataTable.tsx/DataTableHeader";
import { DataTableMain } from "../custom/DataTable.tsx/DataTableMain";

export const DataTable = ({ thLabels, tdData, totalRegisters, totalRegistersByPage,
  setSearch, insertRegister, editRegister, removeRegister, onClickRegister}) => {

  /**
   * 
   */

  const [currentPage, setCurrentPage] = useState(0);

  const sliceMercaderias = () => {
    return tdData.slice(currentPage, currentPage + totalRegistersByPage);
  };

  let totalPages = Math.floor(totalRegisters / totalRegistersByPage);
  if (totalRegisters % totalRegistersByPage > 0) {
    totalPages = totalPages + 1;
  }



  return (
    <div className="data-table">
      <DataTableHeader
        title={'Clientes'}
        buttonText={'Nuevo'}
        setSearch={setSearch} 
        insertRegister={insertRegister}/>

      <DataTableMain
        thLabels={thLabels}
        editRegister={editRegister}
        removeRegister={removeRegister}
        sliceMercaderias={sliceMercaderias} 
        onClickRegister={onClickRegister}/>

      <DataTableFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalRegisters={totalRegisters}
      />
    </div>
  );
};
