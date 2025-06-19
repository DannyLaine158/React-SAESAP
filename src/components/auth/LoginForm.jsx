import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

function LoginForm({ email, setEmail, pass, setPass, login }) {
    return (
        <div className="bg-gray p-6 m-6 rounded-md ml-4 shadow-lg shadow-[#ace6ec]">
                <center><h2 className="text-3xl font-semibold mt-5">SocialNetwork</h2></center>
                <h4 className="text-2xl font-semibold text-gray-400 mb-7"></h4>
                <form className="mb-2">

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
                        nameAction={login}
                        label={'Iniciar Sesión'}
                        labelLink={'Registrarse'}
                        endpoint={'/register'}
                    />
                </form>
        </div>
    );
}

export default LoginForm;