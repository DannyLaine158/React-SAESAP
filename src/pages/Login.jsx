import { useState } from "react";
import AuthImage from '../components/auth/AuthImage';
import AuthForm from '../components/auth/AuthForm';
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { useAuth } from "../context/AuthContext";

function Login() {
    let img = 'https://i.pinimg.com/564x/59/91/4d/59914df23dd44615d0d05e14eb9493cc.jpg';
    const { login } = useAuth();

    // Inicializando nuestras variables de State
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ age, setAge ] = useState(0);

    const handleLogin = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(email, pass);
        login(email, pass);
    }

    const fields = [
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
            component: AuthInput,
            props: {
                label: "Edad",
                paramType: "number",
                paramId: "edad",
                paramOnChange: (e) => setAge(e.target.value),
                paramPlaceholder: "",
                paramValue: age
            }
        },
        {
            component: AuthButton,
            props: {
                nameAction: handleLogin,
                label: "Iniciar Sesión",
                labelLink: "Registrarse",
                endpoint: '/register'
            }
        }
    ]

    return (
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-xl mt-1">
                <AuthImage imageAuth={img} />
                <AuthForm fields={fields} />
            </div>
        </>
    );
}

export default Login;