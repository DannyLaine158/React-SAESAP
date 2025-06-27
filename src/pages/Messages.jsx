import Container from "../components/home/Container";
import Navbar from "../components/home/Navbar";

function Messages() {
    return (
        <div className="flex h-screen w-full">
            <Navbar />
            <main className="flex-grow">
                <Container>
                    <div className="flex justify-end w-full">
                        Sala de Chat
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default Messages;