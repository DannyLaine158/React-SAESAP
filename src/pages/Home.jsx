import { useEffect } from "react";
import Container from "../components/home/Container";
import Navbar from "../components/home/Navbar";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user, logout } = useAuth();

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <>
            <div className="flex h-screen w-full">
                <Navbar logout={logout} />
                <Container>
                    <main className="flex justify-center text-center w-full">
                        <div className="mb-2">
                            <div className="flex flex-col items-center justify-center">
                                <img className="object-cover w-full h-full" 
                                    src={user?.picture} 
                                    alt="Perfil" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="font-medium mb-2 text-sm">Nombre:</span>
                            <p className="w-full px-3 py-1">{user?.name}</p>
                        </div>
                        <div className="mb-2">
                            <span className="font-medium mb-2 text-sm">Correo Electrónico:</span>
                            <p className="w-full px-3 py-1">{user?.email}</p>
                        </div>
                    </main>
                </Container>
            </div>
        </>
    );
}

export default Home;