import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import AuthImage from "../components/auth/AuthImage";
import AuthSelectImage from "../components/auth/AuthSelectImage";
import AuthForm from "../components/auth/AuthForm";
import AuthButton from "../components/auth/AuthButton";

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

    const fields = [
        {
            component: AuthSelectImage,
            props: {
                selectedImage,
                handleImageChange,
                handleImageClick,
                defaultImage
            }
        },
        {
            component: AuthInput,
            props: {
                label: "Nombre",
                paramType: "text",
                paramId: "name",
                paramOnChange: (e) => setName(e.target.value),
                paramPlaceholder: "Ingresa tu nombre",
                paramValue: name
            }
        },
        {
            component: AuthInput,
            props: {
                label: "Correo Electrónico",
                paramType: "email",
                paramId: "email",
                paramOnChange: (e) => setEmail(e.target.value),
                paramPlaceholder: "example@mail.com",
                paramValue: email
            }
        },
        {
            component: AuthInput,
            props: {
                label: "Contraseña",
                paramType: "password",
                paramId: "password",
                paramOnChange: (e) => setPass(e.target.value),
                paramPlaceholder: "*******",
                paramValue: pass
            }
        },
        {
            component: AuthButton,
            props: {
                nameAction: register,
                label: "Registrarse",
                labelLink: "Iniciar Sesión",
                endpoint: '/'
            }
        }
    ]

    return (
        <div className="flex justify-center items-center h-screen drop-shadow-xl mt-10">
            <AuthImage imageAuth={img} />
            <AuthForm fields={fields} />
        </div>
    );
}

export default Register;