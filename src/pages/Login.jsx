import { useState } from "react";
import AuthImage from '../components/auth/AuthImage';
import LoginForm from '../components/auth/LoginForm';

function Login() {
    let img = 'https://i.pinimg.com/564x/59/91/4d/59914df23dd44615d0d05e14eb9493cc.jpg';

    // Inicializando nuestras variables de State
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");

    const login = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(email, pass);
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen drop-shadow-xl mt-1">
                <AuthImage imageAuth={img} />
                <LoginForm email={email} setEmail={setEmail}
                    pass={pass} setPass={setPass} login={login}
                />
            </div>
        </>
    );
}

export default Login;