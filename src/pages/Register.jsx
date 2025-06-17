import { useState } from "react";

function Register() {
    const defaultImage = "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80";
    const [ selectedImage, setSelectedImage ] = useState(defaultImage);
    
    const handleImageClick = () => {
        document.getElementById('profileImage').click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // FileReader: Objeto de JS sirve para leer archivos
            const reader = new FileReader();
            reader.onload = (e) => {
                // Pasando la imagen nueva al archivo
                setSelectedImage(e.target.result);
            }

            reader.readAsDataURL(file);
        } else {
            setSelectedImage(defaultImage);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen drop-shadow-xl mt-10">
            <div className="hidden md:block ml-4 h-1/2 drop-shadow-xl">
                <img className="h-full object-cover rounded-md"
                    src="https://v1.tailwindcss.com/img/card-left.jpg"
                    alt="semisocial" />
            </div>

            <div className="bg-gray-100 p-6 m-6 rounded-md">
                <h2 className="text-3xl font-semibold mt-10">SocialNetwork</h2>
                <h4 className="text-2xl font-semibold text-gray-400 mb-7">Crear Cuenta</h4>
                <form className="mb-2">
                    <div className="flex flex-col items-center justify-center">
                        <div onClick={handleImageClick} 
                            className="w-32 h-32 rounded-full overflow-hidden">
                            <img className="object-cover w-full h-full" 
                                src={selectedImage}
                                alt="Perfil" />
                        </div>
                        <input onChange={handleImageChange} className="hidden" 
                            type="file" id="profileImage" accept="image/*" />
                        {
                            ( selectedImage != defaultImage ) ?
                                (<p className="text-sm font-bold text-blue-800">Foto de perfil</p>) : 
                                (<p className="text-sm font-bold text-red-800">Selecciona una imagen</p>)
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;