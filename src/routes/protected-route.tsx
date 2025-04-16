// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};