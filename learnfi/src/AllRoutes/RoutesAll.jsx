import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "../Pages/Courses";
import Institutes from "../Pages/Institutes";
import Students from "../Pages/Students";
import Analytics from "../Pages/Analytics";
import Home from "../Pages/Home";
import EditData from "../Pages/EditData";
import PrivateRoutes from "../Components/PrivateRoutes";
import Login from "../Components/Login";
import Signup from '../Components/Signup'
export default function RoutesAll() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={
            <PrivateRoutes>
              <Courses />
            </PrivateRoutes>
          }
        />
        <Route
          path="/Institutes"
          element={
            <PrivateRoutes>
              <Institutes />
            </PrivateRoutes>
          }
        />
        <Route
          path="/Students"
          element={
            <PrivateRoutes>
              <Students />
            </PrivateRoutes>
          }
        />
        <Route
          path="/Analytics"
          element={
            <PrivateRoutes>
              <Analytics />
            </PrivateRoutes>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoutes>
              <EditData />
            </PrivateRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
