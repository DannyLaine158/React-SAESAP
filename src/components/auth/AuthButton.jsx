import { Link } from "react-router-dom";

function AuthButton({ nameAction, label, labelLink, endpoint }) {
    return (
        <div className="text-right">
            <button
                onClick={nameAction}
                type="submit" 
                className="cursor-pointer shadow-lg shadow-[#ace6ec] w-full bg-[#76bdc4] text-white py-2 rounded-md mt-6 shadow-lg shadow-indigo-800/40">
                { label }
            </button>
            <br />
            <Link to={endpoint} className="text-sm text-blue-500 hover:underline">
                { labelLink }
            </Link>
        </div>
    );
}

export default AuthButton;