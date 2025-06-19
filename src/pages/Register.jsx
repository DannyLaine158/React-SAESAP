import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthImage from "../components/auth/AuthImage";
import AuthSelectImage from "../components/auth/AuthSelectImage";

function Register() {
    let img = 'https://v1.tailwindcss.com/img/card-left.jpg';

    const defaultImage = "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80";
    const [ selectedImage, setSelectedImage ] = useState(defaultImage);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    
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

    const register = (e) => {
        e.preventDefault();
        console.log(name, email, pass);
    }

    return (
        <div className="flex justify-center items-center h-screen drop-shadow-xl mt-10">
            <AuthImage imageAuth={img} />

            <div className="bg-gray-100 p-6 m-6 rounded-md">
                <h2 className="text-3xl font-semibold mt-10">SocialNetwork</h2>
                <h4 className="text-2xl font-semibold text-gray-400 mb-7">Crear Cuenta</h4>
                <form className="mb-2">
                    
                    <AuthSelectImage selectedImage={selectedImage} 
                        handleImageChange={handleImageChange}
                        handleImageClick={handleImageClick}
                        defaultImage={defaultImage}
                    />

                    <AuthInput label="Nombre:" 
                        paramType="text" 
                        paramId="name" 
                        paramOnChange={e => setName(e.target.value)}
                        paramPlaceholder="Ingresa tu nombre"
                        paramValue={name}
                    />

                    <AuthInput label="Correo Electrónico:" 
                        paramType="email" 
                        paramId="email" 
                        paramOnChange={e => setEmail(e.target.value)}
                        paramPlaceholder="example@gmail.com"
                        paramValue={email}
                    />
                    
                    <AuthInput label="Contraseña:" 
                        paramType="password" 
                        paramId="password" 
                        paramOnChange={e => setPass(e.target.value)}
                        paramPlaceholder="*************"
                        paramValue={pass}
                    />

                    <AuthButton
                        nameAction={register}
                        label={'Regístrate'}
                        labelLink={'Inicia Sesión'}
                        endpoint={'/'}
                    />
                </form>
            </div>
        </div>
    );
}

export default Register;