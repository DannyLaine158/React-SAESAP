import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <p className="text-xl text-gray-500">Cargando...</p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to={'/'} replace />
    }

    return children;
}

export default PrivateRoute;