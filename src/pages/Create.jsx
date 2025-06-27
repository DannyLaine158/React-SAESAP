import Container from "../components/home/Container";
import Navbar from "../components/home/Navbar";

function Create() {
    return (
        <div className="flex h-screen w-full">
            <Navbar />
            <main className="flex-grow">
                <Container>
                    <div className="flex justify-end w-full">
                        Crear Post
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default Create;