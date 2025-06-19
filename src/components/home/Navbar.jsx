import { AiFillCloseCircle, AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="fixed h-screen border-r">
            <div className="hidden md:flex flex-col gap-y-2 h-full w-[250px] p-2">
                <div className="py-12 ml-5 w-full">
                    <p className="text-3xl font-bold">SocialNetwork</p>
                </div>

                <div className="w-full overflow-y-auto h-full text-md">
                    <Link to={'/'}>
                        <div className="flex items-center mt-1 hover:bg-zinc-100 rounded-lg pl-5 py-2">
                            <AiFillHome className="font-bold text-2xl" />
                            <p className="ml-5">Inicio</p>
                        </div>
                    </Link>

                    <Link to={'/search'}>
                        <div className="flex items-center mt-1 hover:bg-zinc-100 rounded-lg pl-5 py-2">
                            <BsSearch className="font-bold text-2xl" />
                            <p className="ml-5">Buscar</p>
                        </div>
                    </Link>

                    <Link to={'/inbox'}>
                        <div className="flex items-center mt-1 hover:bg-zinc-100 rounded-lg pl-5 py-2">
                            <AiOutlineMessage className="font-bold text-2xl" />
                            <p className="ml-5">Mensajes</p>
                        </div>
                    </Link>

                    <Link to={'/create'}>
                        <div className="flex items-center mt-1 hover:bg-zinc-100 rounded-lg pl-5 py-2">
                            <BsPlusSquare className="font-bold text-2xl" />
                            <p className="ml-5">Crear</p>
                        </div>
                    </Link>

                    <Link to={'/logout'}>
                        <div className="flex items-center mt-1 hover:bg-zinc-100 rounded-lg pl-5 py-2">
                            <AiFillCloseCircle className="font-bold text-2xl" />
                            <p className="ml-5">Salir</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;