import { useState } from "react";
import LoginImage from '../components/auth/LoginImage';
import LoginForm from '../components/auth/LoginForm';

function Login() {

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
                <LoginImage />
                <LoginForm email={email} setEmail={setEmail}
                    pass={pass} setPass={setPass} login={login}
                />
            </div>
        </>
    );
}

export default Login;