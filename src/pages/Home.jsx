import Container from "../components/home/Container";
import Navbar from "../components/home/Navbar";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user, logout } = useAuth();

    return (
        <>
            <div className="flex h-screen w-full">
                <Navbar logout={logout} />
                <Container>
                    <main className="flex justify-center text-center w-full">
                        <h1 className="text-3xl font-bold mb-4">Bienvenido { user.name }</h1>
                        <br />
                        <p className="mt-5 ml-5">{ user.email }</p>
                        <img className="mx-auto my-4 shadow w-32 h-32 rounded-full " 
                            src={user.picture} 
                            alt="Profile" />
                    </main>
                </Container>
            </div>
        </>
    );
}

export default Home;