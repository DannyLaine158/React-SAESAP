import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Navbar() {
    return (
        <nav>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
        </nav>
    );
}

export default Navbar;