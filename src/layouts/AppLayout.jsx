import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            { /* Outlet es el componente padre que tendrá cada 
                cada componente hijo */ }
            <Outlet />
        </div>
    );
}

export default AppLayout;