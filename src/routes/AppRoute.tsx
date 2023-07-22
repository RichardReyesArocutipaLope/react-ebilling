import { ViewLogin } from "../views/ViewLogin";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import { DashboardRouter } from "./DashboardRouter";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FaSpinner } from "react-icons/fa";
import './AppRoute.css';

export const AppRoute = () => {

  const args = useSelector((state: RootState) => state.auth);
  if (args.status === "checking") {
    return (
      <div className="loading">
        <span className="loading__img"><FaSpinner/></span>
        <p className="loading__description">Cargando...</p>
      </div>
    );
  }

  return (
    <Routes>
      {args.status == 'not-authenticated' ?
        <>
          <Route path="/login" element={<ViewLogin />} />
          <Route path="/*" element={<Navigate to="/login" />}  />
        </>
        :
        <>
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="/*" element={<Navigate to="/dashboard/*" />} />
        </>
      }
    </Routes>
  )
}
