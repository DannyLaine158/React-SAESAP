import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';

function LoginForm({ email, setEmail, pass, setPass, login }) {
    return (
        <div className="bg-gray p-6 m-6 rounded-md ml-4 shadow-lg shadow-[#ace6ec]">
                <center><h2 className="text-3xl font-semibold mt-5">SocialNetwork</h2></center>
                <h4 className="text-2xl font-semibold text-gray-400 mb-7"></h4>
                <form className="mb-2">

                    <LoginInput label="Correo Electrónico:" 
                        paramType="email" 
                        paramId="email" 
                        paramOnChange={e => setEmail(e.target.value)}
                        paramPlaceholder="example@gmail.com"
                        paramValue={email}
                    />
                    
                    <LoginInput label="Contraseña:" 
                        paramType="password" 
                        paramId="password" 
                        paramOnChange={e => setPass(e.target.value)}
                        paramPlaceholder="*************"
                        paramValue={pass}
                    />

                    <div className="text-right">
                        <button
                            onClick={login}
                            type="submit" 
                            className="cursor-pointer shadow-lg shadow-[#ace6ec] w-full bg-[#76bdc4] text-white py-2 rounded-md mt-6 shadow-lg shadow-indigo-800/40">
                            Iniciar Sesión
                        </button>
                        <br />
                        <Link to={'/register'} className="text-sm text-blue-500 hover:underline">
                            Registrarse
                        </Link>
                    </div>
                </form>
        </div>
    );
}

export default LoginForm;