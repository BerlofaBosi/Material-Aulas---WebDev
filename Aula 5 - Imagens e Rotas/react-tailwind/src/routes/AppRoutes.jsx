import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout"
import Relatorios from "../pages/Relatorios"
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Configuracoes from "../pages/Configuracoes"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "/relatorios",
                element: <Relatorios />
            },
            {
                path: "/usuarios",
                element: <Usuarios />
            },
            {
                path: "/configuracoes",
                element: <Configuracoes />
            }
        ]
    },
])

